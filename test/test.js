const fs = require('fs');
const path = require('path');
const { optimizeImage, optimizeImages } = require('../src/index');

describe('Image Optimization Tests', () => {
  const inputImagePath = path.resolve(__dirname, 'images', 'sample.jpg');
  const outputImagePath = path.resolve(
    __dirname,
    'images',
    'sample-optimized.png' // Changed to .png
  );
  const outputImagePathPng = path.resolve(
    __dirname,
    'images',
    'sample-optimized-multiple.png' // Changed name to differentiate
  );

  test('optimizeImage function should optimize a single image', async () => {
    await optimizeImage(inputImagePath, {
      width: 500,
      quality: 70,
      output: outputImagePath,
      format: 'png', // Explicitly set format to png
    });

    // Delay to ensure file write is complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    console.log('Expected output path:', outputImagePath);
    expect(fs.existsSync(outputImagePath)).toBe(true);
  });

  test('optimizeImages function should optimize multiple images', async () => {
    const outputDir = path.dirname(outputImagePathPng);
    await optimizeImages([inputImagePath], {
      width: 500,
      quality: 70,
      output: path.join(outputDir, 'output.png'), // Changed this line
      format: 'png',
    });

    // Delay to ensure file write is complete
    await new Promise((resolve) => setTimeout(resolve, 500));

    const expectedOutputPath = path.join(outputDir, 'sample-optimized.png');
    console.log('Expected output PNG path:', expectedOutputPath);
    expect(fs.existsSync(expectedOutputPath)).toBe(true);
  });
});
