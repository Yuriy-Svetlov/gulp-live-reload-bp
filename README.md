# gulp-live-reload-bp (Live Reload Browser Page)

![Live Reload Browser Page](https://raw.githubusercontent.com/Yuriy-Svetlov/gulp-live-reload-bp/main/images/on_128x128_v1.png)

This module is for the browser plugin «[Live Reload Browser Page](https://live-reload-browser-page.com)» — this is the browser plugin for live reload the browser page during web development.

[live-reload-browser-page.com](https://live-reload-browser-page.com)

You may also want to use (In the Pro version of «Live Reload Browser Page», all these plugins are already built in): 
* [Live Alert Browser Page](https://live-alert-browser-page.com)
* [Live HTML Validator](https://live-html-validator.com)

![Live Reload Browser Page](https://raw.githubusercontent.com/Yuriy-Svetlov/gulp-live-reload-bp/main/images/main.png)


Main plugin and documentation are in [live-reload-bp](https://github.com/Yuriy-Svetlov/live-reload-bp)

## Installs

**Step - 1** 

You need to install the browser plugin [Live Reload Browser Page](https://live-reload-browser-page.com) if you have not already installed it for:
  * [Google Chrome](#)

**Step - 2**
```shell
npm i gulp-live-reload-bp --save-dev
```

##  How to use

[Example of how to establish a connection to the plugin «**Live Reload Browser Page**»](https://github.com/Yuriy-Svetlov/live-reload-bp/tree/main/documentation/examples/%D1%81onnect_to_server)

```javascript
const 
  gulp = require('gulp'),
  LiveReload = require("gulp-live-reload-bp"),
  plumber = require('gulp-plumber'),
  gulpSass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano');

const 
  cssWatch = 'src/scss/*.scss',
  cssSrc = ['src/scss/*.scss'],
  cssDest = 'dest/css';

const 
  liveReload = new LiveReload({
    host: '127.0.0.1', 
    port: '8080'
  });


function css() {
  return gulp.src(cssSrc)
  .pipe(plumber({errorHandler: onError}))        
  .pipe(gulpSass().on('error', gulpSass.logError))   
  .pipe(postcss([
      cssnano({zindex: false, reduceIdents: false})
  ]))
  .pipe(liveReload.reloadPage())    
  .pipe(gulp.dest(cssDest));
}


function onError(err){
  /* Here can be used: 
    https://github.com/Yuriy-Svetlov/live-alert-bp
    In the Pro version of «Live Reload Browser Page - Pro», all plugins are already built in.
  */

  liveReload.setError();  // This usage is optional. You can not use this, if you want your page to reload anyway.

  this.emit('end');
}


function watch(){
  liveReload.run();

  gulp.watch(cssWatch, gulp.series(css));
}


exports.css = css;
exports.watch = watch;
exports.start = gulp.series(css, watch);
```

##  Examples:

* [Gulp](https://github.com/Yuriy-Svetlov/gulp-live-reload-bp/tree/main/examples)


##  API

* [https://github.com/Yuriy-Svetlov/live-reload-bp](https://github.com/Yuriy-Svetlov/live-reload-bp#api)

##  Browser plugin API

[API of browser plugin **Live Reload Browser Page**](https://live-reload-browser-page.com/documentation)
