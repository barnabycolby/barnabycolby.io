/*global console, document, window, XMLHttpRequest */
(function () {
    'use strict';

    var githubSpinnerId = 'githubSpinner',
        numberOfCommitsId = 'numberOfCommits';

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
        document.getElementById(numberOfCommitsId).style.display = 'none';
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
        apiLink += '/contributors?anon=true';

        // This function gets the total number of commits using the given api link
        // Once it has the final total, it updates the webpage accordingly
        // It needs to be defined as a function because it calls itself recursively
        (function getAndSetCommitTotal(baseApiLink, commitTotalSoFar, startingPageNumber) {
            // We need to set default values for commitTotalSoFar and startingPageNumber if they have not been given
            commitTotalSoFar = commitTotalSoFar === undefined ? 0 : commitTotalSoFar;
            startingPageNumber = startingPageNumber === undefined ? 1 : startingPageNumber;

            // To handle the GitHub API pagination functionality, we need to append a page number to the link
            var paginatedApiLink = baseApiLink + "&page=" + startingPageNumber;

            getJSON(paginatedApiLink, function (err, data) {
                var i, commitTotalElement;
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
                    getAndSetCommitTotal(baseApiLink, commitTotalSoFar, startingPageNumber + 1);
                } else {
                    // Display the commit total in the appropriate element, and hide the loading spinner
                    commitTotalElement = document.getElementById(numberOfCommitsId);
                    commitTotalElement.innerHTML = commitTotalSoFar + ' Commits';
                    document.getElementById(githubSpinnerId).style.display = 'none';
                    commitTotalElement.style.display = 'block';
                }
            });
        }(apiLink));
    };
}());
