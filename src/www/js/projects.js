/*global console, document, window, XMLHttpRequest */
(function () {
    'use strict';

    var githubSpinnerId = 'githubSpinner',
        numberOfCommitsId = 'numberOfCommits',
        lastCommitMessageId = 'lastCommitMessage',
        githubIntegrationsId = 'githubIntegrations',
        authorLoginId = 'authorLogin',
        avatarId = 'avatar';

    function getJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", url, true);
        xhr.responseType = "json";
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            } else {
                callback(status);
            }
        };
        xhr.send();
    }

    /**
     * Used to hide github integration related DOM elements on failure.
     */
    function hideGitHubIntegrations() {
        document.getElementById(githubSpinnerId).style.display = 'none';
        document.getElementById(githubIntegrationsId).style.display = 'none';
        console.log("GitHub integration failed.");
    }

    // Before running this code, we require the document to be loaded
    // We want to retrieve the total number of commits for the projects github repository
    // We do this by using the GitHub API to get the list of contributors, and then sum up the number of commits for each
    window.onload = function () {
        var githubLinkElementsList, githubLink, apiLink;

        // First we need to retrieve the GitHub link of the current project
        githubLinkElementsList = document.querySelectorAll('#current > a');
        if (githubLinkElementsList.length === 0) {
            hideGitHubIntegrations();
            return;
        }
        githubLink = githubLinkElementsList[0].href;

        // In order to query the GitHub API We require the owner and repository name, which can be extracted from the github link
        // More precisely, we transform the old link
        apiLink = githubLink.replace('github.com', 'api.github.com/repos');

        // Gets the last commit message, and applys the retrieved GitHub data to the webpage
        function finishGitHubIntegration(baseApiLink, commitTotal) {
            var commitsApiLink = baseApiLink + '/commits';

            getJSON(commitsApiLink, function (err, data) {
                var lastCommitMessage, authorLogin, avatarUrl;

                if (err !== null || data.length < 0 || !data[0].hasOwnProperty('commit') || !data[0].commit.hasOwnProperty('message')
                        || !data[0].hasOwnProperty('author') || !data[0].author.hasOwnProperty('login')
                        || !data[0].author.hasOwnProperty('avatar_url')) {
                    hideGitHubIntegrations();
                    return;
                }

                lastCommitMessage = data[0].commit.message;
                authorLogin = data[0].author.login;
                // We append the s=40 parameter so that a smaller 40x40 image is returned
                avatarUrl = data[0].author.avatar_url + '&s=30';

                // Display the commit total in the appropriate element, and hide the loading spinner
                document.getElementById(numberOfCommitsId).innerHTML = commitTotal + ' Commits';
                document.getElementById(avatarId).src = avatarUrl;
                document.getElementById(authorLoginId).innerHTML = authorLogin;
                document.getElementById(lastCommitMessageId).innerHTML = lastCommitMessage;
                document.getElementById(githubSpinnerId).style.display = 'none';
                document.getElementById(githubIntegrationsId).style.display = 'block';
            });
        }

        // This function starts the GitHub integration process by getting the total number of commits using the given api link
        // Once it has the final total, it calls the finishGitHubIntegration function, which finishes the GitHub integration
        // It needs to be defined as a function because it calls itself recursively
        (function performGitHubIntegration(baseApiLink, commitTotalSoFar, startingPageNumber) {
            // We need to set default values for commitTotalSoFar and startingPageNumber if they have not been given
            commitTotalSoFar = commitTotalSoFar === undefined ? 0 : commitTotalSoFar;
            startingPageNumber = startingPageNumber === undefined ? 1 : startingPageNumber;

            // To handle the GitHub API pagination functionality, we need to append a page number to the link
            var paginatedApiLink = baseApiLink + '/contributors?anon=true&page=' + startingPageNumber;

            getJSON(paginatedApiLink, function (err, data) {
                var i;
                if (err !== null) {
                    hideGitHubIntegrations();
                    return;
                }

                // To get the total commit count, we sum the number of commits from every contributor
                for (i = 0; i < data.length; i += 1) {
                    commitTotalSoFar += data[i].contributions;
                }

                // GitHub limits the response to contain at most 30 objects (see https://developer.github.com/v3/#pagination)
                // We need to check that there isn't more pages of contributors
                if (data.length === 30) {
                    performGitHubIntegration(baseApiLink, commitTotalSoFar, startingPageNumber + 1);
                } else {
                    // Proceed with the next part of the github integration
                    finishGitHubIntegration(baseApiLink, commitTotalSoFar);
                }
            });
        }(apiLink));
    };
}());
