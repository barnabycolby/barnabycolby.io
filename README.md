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

The website build is automated using grunt. The pipeline relies on some background servers for testing the source and distribution code. Instead of intialising and destroying these servers on each grunt run, the servers task allows the servers to be initiated once per session, speeding up the build pipeline.

```
grunt servers
```

Once the servers have been initialised, run grunt to build the code.

```
grunt
```
