
var gulp = require('gulp');            
var livereload = require('gulp-livereload'), 
    webserver = require('gulp-webserver'); 
gulp.task('webserver', function() {
    gulp.src( './' )
    .pipe(webserver({ 
        livereload: true,
        open: true 
    }));
});

gulp.task('watch',function(){
    gulp.watch( '*.html', function(event){
          console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    }) 
});
gulp.task('default',['webserver','watch']);