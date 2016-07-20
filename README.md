# barnabycolby.io
This repository contains the source code, test code and production code of the barnabycolby.io website. The actual website can be found at http://barnabycolby.io

## Frameworks used
* Grunt
* AngularJS
* Less
* Bootstrap

## How do I build it?
Assuming you already have the node package manager installed on your system (npm), as well as bower, then you need to install the project dependencies by running:

```
npm install
```

The website build is automated using grunt and relies on a running PhantomJS ghostdriver server to test the project. Instead of intialising and destroying this server on each grunt run, the user is expected to manually initialise the server during development, allowing the speed of the grunt pipeline to be increased. The PhantomJS ghostdriver server can be started using the following command:

```
phantomjs --webdriver=4444
```

Once the server has been initialised, run grunt to build the site.

```
grunt
```
