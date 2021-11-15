
const 
  gulp = require('gulp'),
  liveReloadBP = require("live-reload-bp"),
  liveAlertFormatterSass = require("live-alert-bp-formatter-sass"),
  plumber = require('gulp-plumber'),
  gulpSass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  cssnano = require('cssnano'),
  webServer = require('./web-server');

const 
  cssWatch = 'src/scss/*.scss',
  cssSrc = ['src/scss/*.scss'],
  cssDest = 'dest/css';

const 
  liveReload = new liveReloadBP({
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
    .pipe(gulp.dest(cssDest));
}


function reloadPage(cb){
    liveReload.reloadPage();
    liveReload.resetError();

  cb();
}


function onError(err){
  if(liveReload.hasError() === false){
    if(err.plugin === 'gulp-sass'){

      // Without Sass formatter
      /*
      liveReload.liveAlert([
        { label: 'File', message: err.file },
        { label: 'Message', message: err.message }
      ]);
      */

      /*
        With Sass formatter

        # Formaters
        https://github.com/Yuriy-Svetlov/live-alert-bp#formaters
      */
      liveReload.liveAlert(
        liveAlertFormatterSass(err)
      );

    }
  }

  this.emit('end');
}


function watch(){
  liveReload.run();
  webServer();

  gulp.watch(cssWatch, gulp.series(css, reloadPage));
}


exports.css = css;
exports.watch = watch;
exports.reloadPage = reloadPage;
exports.start = gulp.series(css, watch);
