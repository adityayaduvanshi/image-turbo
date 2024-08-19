const path = require('path');
const fs = require('fs');

/**
 * Validate if the provided image path exists.
 * @param {string} imagePath - Path to the image file.
 * @throws {Error} If the image path is invalid.
 */
function validateImagePath(imagePath) {
  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image file does not exist: ${imagePath}`);
  }
}

/**
 * Generate the output path for the optimized image.
 * @param {string} inputPath - Path to the input image file.
 * @param {string} [format] - Format to convert the image to.
 * @returns {string} - Path to save the optimized image.
 */
function getOutputPath(inputPath, format) {
  const ext = format ? `.${format}` : path.extname(inputPath);
  return path.join(
    path.dirname(inputPath),
    `${path.basename(inputPath, path.extname(inputPath))}-optimized${ext}`
  );
}

module.exports = {
  validateImagePath,
  getOutputPath,
};
