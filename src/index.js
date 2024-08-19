const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { validateImagePath, getOutputPath } = require('./utils');

/**
 * Optimize image by resizing, compressing, and converting format.
 * @param {string} inputPath - Path to the input image file.
 * @param {Object} options - Options for optimization.
 * @param {number} [options.width] - Width to resize the image to.
 * @param {number} [options.height] - Height to resize the image to.
 * @param {number} [options.quality] - Quality of the image (0-100).
 * @param {string} [options.format] - Format to convert the image to (e.g., 'jpeg', 'png').
 */
async function optimizeImage(inputPath, options = {}) {
  try {
    validateImagePath(inputPath);

    const outputPath = getOutputPath(inputPath, options.format);
    const { width, height, quality, format } = options;

    let transformer = sharp(inputPath);

    if (width || height) {
      transformer = transformer.resize(width, height);
    }

    if (format) {
      transformer = transformer.toFormat(format, { quality });
    } else {
      // Use the input format if no format is specified
      const inputFormat = path.extname(inputPath).slice(1);
      transformer = transformer[inputFormat]({ quality });
    }

    await transformer.toFile(outputPath);
    console.log('Image optimized and saved to:', outputPath);
  } catch (err) {
    console.error('Error optimizing image:', err.message);
  }
}

/**
 * Optimize multiple images with the same options.
 * @param {string[]} inputPaths - Array of paths to the input image files.
 * @param {Object} options - Options for optimization.
 */
async function optimizeImages(inputPaths, options = {}) {
  try {
    for (const inputPath of inputPaths) {
      const individualOptions = { ...options };
      if (options.output) {
        // Generate a unique output path for each input file
        const ext = path.extname(options.output);
        const baseName = path.basename(inputPath, path.extname(inputPath));
        individualOptions.output = path.join(
          path.dirname(options.output),
          `${baseName}-optimized${ext}`
        );
      }
      await optimizeImage(inputPath, individualOptions);
    }
  } catch (err) {
    console.error('Error optimizing images:', err.message);
  }
}

module.exports = {
  optimizeImage,
  optimizeImages,
};
