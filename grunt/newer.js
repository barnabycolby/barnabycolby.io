/*global module, require */
(function () {
    'use strict';

    module.exports = {

        options: {
            override: function (detail, include) {
                if (detail.task === 'less') {
                    // Find import statements in less files and assesses the imports as well
                    var fs = require('fs'),
                        path = require('path'),
                        filePath = detail.path,
                        mTime = detail.time;

                    fs.readFile(filePath, function (err, data) {
                        var importRegEx,
                            match,
                            importFile,
                            importFileFullPath,
                            stat;

                        if (err) {
                            throw err;
                        }

                        importRegEx = new RegExp('@import "(.+)";', 'g');
                        match = importRegEx.exec(data);
                        while (match !== null) {
                            // We need to add the .less extension if it was not added to the import statement
                            // match[1] contains the string that matched the (.+) group, in this case the filename
                            importFile = match[1];
                            if (importFile.indexOf('.less', importFile.length - ('.less').length) === -1) {
                                importFile += '.less';
                            }

                            importFileFullPath = path.dirname(filePath) + '/' + importFile;
                            /*jslint stupid: true */
                            // jslint does not like blocking methods
                            // Grunt tasks are run non-concurrently so using the async versions would only result in making the code more complex
                            if (fs.existsSync(importFileFullPath)) {
                                stat = fs.statSync(importFileFullPath);
                                /*jslint stupid: false */
                                if (stat.mtime > mTime) {
                                    include(true);
                                    return;
                                }
                            } else {
                                // If the file does not exist then we should recompile to expose the error
                                include(true);
                                return;
                            }

                            match = importRegEx.exec(data);
                        }

                        // If we make it to this point then none of the imports, if any existed, required a recompile
                        include(false);
                    });
                } else {
                    include(false);
                }
            }
        }
    };
}());
