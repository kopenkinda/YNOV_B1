const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const css = require('gulp-clean-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');


let ScriptsFiles = [
	'app/js/**/*.js',
	'app/js/script.js', // Always at the end
	'!app/js/scripts.min.js'
]


gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: 'app'
		},
		notify: false,
		open: false
	})
});


gulp.task('Styles', () => {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', notify.onError()))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(css({
			level: {
				1: {
					specialComments: 0
				}
			}
		}))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.stream())
});


gulp.task('Scripts', () => {
	return gulp.src(ScriptsFiles)
		.pipe(concat('scripts.min.js'))
		.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(uglify())
		.pipe(gulp.dest('app/js'))
		.pipe(browserSync.stream())
});


gulp.task('Markdown', () => {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({
			stream: true
		}))
});


gulp.task('RemoveDist', () => {
	return del([
		'dist/css/**/*',
		'dist/js/**/*',
		'dist/img/**/*',
		'dist/fonts/**/*',
		'dist/index.html'
	]);
});

gulp.task('Images', () => {
	return gulp.src('app/img/**/*')
		.pipe(cache(imagemin())) // Cache Images
		.pipe(gulp.dest('dist/img'));
});


gulp.task('Build', gulp.series('RemoveDist', 'Images', 'Scripts', 'Styles', async () => {
	let buildFiles = gulp.src([
		'app/*.html',
		'app/.htaccess',
	]).pipe(gulp.dest('dist'));

	let buildCss = gulp.src([
		'app/css/main.min.css',
	]).pipe(gulp.dest('dist/css'));

	let buildJs = gulp.src([
		'app/js/scripts.min.js',
	]).pipe(gulp.dest('dist/js'));

	let buildFonts = gulp.src([
		'app/fonts/**/*',
	]).pipe(gulp.dest('dist/fonts'));
}));


gulp.task('watch', () => {
	gulp.watch('app/sass/**/*.sass', gulp.parallel('Styles'));
	gulp.watch(['libs/**/*.js', 'app/js/*.js', '!app/js/scripts.min.js'], gulp.parallel('Scripts'));
	gulp.watch('app/*.html', gulp.parallel('Markdown'))
});
//);
//);


gulp.task('default', gulp.parallel('watch', 'browser-sync'));