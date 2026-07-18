/**
 * Gulpfile
 */

import path from "node:path";
// import imageminG from "gulp-imagemin";
import sharpOptimizeImages from "gulp-sharp-optimize-images";
import tron from "gulp-tron";

const srcRoot = "src";
const destRoot = "docs";
// const imageminOptions = {
//   interlaced: true,
//   progressive: true,
//   optimizationLevel: 5,
//   // svgoPlugins: [{removeViewBox: true}]
// };

const images = {
  name: "images",
  //   build: (bs) => bs.src().pipe(imageminG(imageminOptions)).dest(),
  build: (bs) =>
    bs
      .src()
      .pipe(
        sharpOptimizeImages({
          jpg_to_jpg: {
            quality: 80,
            progressive: true,
            mozjpeg: true,
          },
          png_to_png: {
            quality: 80,
            compressionLevel: 8,
          },
        }),
      )
      .dest(),
  src: [path.join(srcRoot, "**/*.{jpg,svg,ico,png,txt}")],
  dest: destRoot,
  clean: destRoot,
};

const build = {
  name: "@build",
  dependsOn: images,
};

tron.task(build).addCleaner();
