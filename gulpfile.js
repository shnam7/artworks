/**
 * Gulpfile
 */

const gbm = require('gulp-build-manager');
const upath = require('upath');

const srcRoot = 'src';
const destRoot = 'docs';

const artworks = {
  buildName: 'images',
  builder: 'GImagesBuilder',
  src: [upath.join(srcRoot, '**/*.{jpg,svg,ico,png,txt}')],
  dest: destRoot
};

gbm({
  systemBuilds: {
    build: [artworks],
    clean: [destRoot],
    default: ['@clean', '@build']
  }
});