# barnabycolby.io
This repository contains the source code, test code and production code of the barnabycolby.io website. The actual website can be found at https://barnabycolby.io

## Frameworks used
* Grunt
* Less
* Bootstrap
* Nunjucks

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

The nginx configuration files are provided in this repository, however, the user is expected to install and configure nginx themselves.

## Highlights

### Nunjucks templates
The website is built from a series of nunjucks templates, allowing reuse of common HTML across webpages, as well as more dynamic content. As the pages are currently small, they are rendered during development and loaded as static pages by site visitors, which helps to improve load times.

### Easy content udpating
All content for the website has been encapsulated into json data files, allowing content changes to be made without HTML or JS modifications. This also separates the data from the tests, allowing the tests to remain the same even if the page content changes.

### Static asset versioning
To improve page load times, the static assets of the site, including the stylesheets and javascript, contain a 6-digit content hash in their filenames. Nginx instructs the clients to cache those files forever, without requiring interaction from the server when those files are used. The main html files are also cached by the client, with the instruction that they must ask the server if the file has been changed before using it. This maximises caching ability, while allowing instant changes to the content. If content in a static asset changes, then the link in the html file will also change (as the filename contains a hash of the content), causing the browser to download and use the new version of the static asset.

### CSS pipeline
The styling for the site starts as LESS, and is processed several times to produce the final result. The CSS pipeline includes ordering of the rules in the source files, as well as compilation to CSS. Next, uncss is used to remove unnecessary rules, meaning that instead of downloading the entire Bootstrap stylesheet (among others), the browser only needs to download the rules that are actually used. The CSS is also passed through autopreifxer to add CSS rules required by older browser implementations, and finally, the CSS is minified to reduce load times.

### Last updated in footer
Each HTML page contains the date of its last change in the footer. This is achieved using a combination of nunjucks and grunt-html-compare, and allows the user to see how stale the content is.
