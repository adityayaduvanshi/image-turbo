# Image Turbo

It is an advanced image optimizer designed for resizing, compressing, converting formats, and batch processing images efficiently. It leverages the power of the sharp library to provide high-performance image optimization capabilities.

## Features

- Resize: Adjust image dimensions with precision.
- Compress: Reduce image file size while maintaining quality.
- Convert Formats: Change images to various formats (e.g., JPEG, PNG).
- Batch Processing: Optimize multiple images in one go.


## Installation

```bash
npm install image-turbo
```
    
## Usage/Examples

### Optimizing a Single Image
To optimize a single image, use the optimizeImage function. This function resizes, compresses, and converts an image according to the specified options.

```javascript
const { optimizeImage } = require('image-turbo');

const inputImagePath = 'path/to/your/image.jpg';
const outputImagePath = 'path/to/your/optimized-image.jpg';

optimizeImage(inputImagePath, {
  width: 800,      // Resize width
  quality: 80,     // Compression quality (0-100)
  format: 'jpeg'   // Output format (jpeg, png, webp, etc.)
})
  .then(() => console.log('Image optimized and saved to:', outputImagePath))
  .catch(err => console.error('Error optimizing image:', err));

```

### Optimizing Multiple Images
To optimize multiple images in one go, use the optimizeImages function. This function applies the same options to each image in the array.

```javascript
const { optimizeImages } = require('image-turbo');

const inputImagePaths = ['path/to/image1.jpg', 'path/to/image2.jpg'];
const outputImagePaths = ['path/to/optimized-image1.jpg', 'path/to/optimized-image2.jpg'];

optimizeImages(inputImagePaths, {
  width: 800,      // Resize width
  quality: 80,     // Compression quality (0-100)
  format: 'jpeg'   // Output format (jpeg, png, webp, etc.)
})
  .then(() => console.log('All images optimized and saved'))
  .catch(err => console.error('Error optimizing images:', err));

```
## API 

```
  optimizeImage(inputPath, options)
```
- `inputPath`: Path to the input image file.
- `options:` Object containing optimization options

    - `width`: (Optional) Resize width of the image.
    - `quality`: (Optional) Compression quality (0-100). Default is 80.
    - `format`: (Optional) Output format (jpeg, png, webp, etc.). Default is jpeg.

```
optimizeImages(inputPaths, options)
```
-  `inputPaths`: Array of paths to input image files.
- `options`: Object containing optimization options (same as optimizeImage).
## License

image-turbo is licensed under the MIT License. See the 
[LICENSE](https://github.com/adityayaduvanshi/image-turbo/blob/master/LICENSE)
file for details.
## Contact

For any questions or support, please reach out to Aditya Yaduvanshi:

- Email: aditya97y@gmail.com
- [LinkedIn](https://www.linkedin.com/in/theaditya-yaduvanshi-/)
- [Portfolio](https://adityayads.vercel.app) 
