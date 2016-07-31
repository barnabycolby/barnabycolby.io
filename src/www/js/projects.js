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
        apiLink += '/contributors';

        // Next, we retrive the list of contributors by following the link
        getJSON(apiLink, function (err, data) {
            var i, commitTotal = 0, commitTotalElement;
            if (err !== null) {
                hideGitHubIntegrations();
                return;
            }

            // To get the total commit count, we sum the number of commits from every contributor
            for (i = 0; i < data.length; i += 1) {
                commitTotal += data[0].contributions;
            }

            // Display the commit total in the appropriate element, and hide the loading spinner
            commitTotalElement = document.getElementById(numberOfCommitsId);
            commitTotalElement.innerHTML = commitTotal + ' Commits';
            document.getElementById(githubSpinnerId).style.display = 'none';
            commitTotalElement.style.display = 'block';
        });
    };
}());
