var gulp         = require('gulp'),
		sass         = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS    = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify')
		//imagemin 		= require('gulp-imagemin'),
		//pngquant 		= require('imagemin-pngquant'),
		del      		= require('del'),
		//cache    		= require('gulp-cache');

gulp.task('browser-sync', ['styles', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});


gulp.task('styles', function () {
	return gulp.src('sass/*.sass')
	.pipe(sass({
		includePaths: require('node-bourbon').includePaths
	}).on('error', sass.logError))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer({browsers: ['last 15 versions'], cascade: false}))
	.pipe(cleanCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.stream());
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/modernizr/modernizr.js',
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/waypoints/waypoints.min.js',
		'./app/libs/animate/animate-css.js',
		'./app/libs/plugins-scroll/plugins-scroll.js',
		'./app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'
		])
		.pipe(concat('libs.js'))
		// .pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});
gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('watch', function () {
	gulp.watch('sass/*.sass', ['styles']);
	gulp.watch('app/libs/**/*.js', ['scripts']);
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('build', ['clean', 'styles', 'scripts',], function() {
   var buildCss = gulp.src([
   	'app/css/main.min.css',
   'app/css/libs.min.css',
   'app/css/fonts.min.css'
   ])
   .pipe(gulp.dest('dist/css'))

   var buildFonts = gulp.src('app/fonts/**/*')
   		.pipe(gulp.dest('dist/fonts'));

   var buildJs = gulp.src('app/js/**/*')
   		.pipe(gulp.dest('dist/js'));

   var buildHtml = gulp.src('app/*.html')
   		.pipe(gulp.dest('dist'));
});

gulp.task('clear', function() {
    return cache.clearAll();
});

gulp.task('default', ['browser-sync', 'watch']);
