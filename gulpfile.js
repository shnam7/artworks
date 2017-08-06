/**
 * Gulpfile
 */

const gbm = require('gulp-build-manager');
const upath = require('upath');

const srcRoot = 'src';
const destRoot = 'docs';

const images = {
  buildName: 'images',
  builder: 'GImagesBuilder',
  src: [upath.join(srcRoot, '**/*')],
  dest: destRoot,
};

gbm({
  systemBuilds: {
    build: images,
    clean: [destRoot],
    default: ['@clean', '@build']
  }
});