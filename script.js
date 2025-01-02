// Select elements
const shapeSelector = document.getElementById('shape');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
const createShapeButton = document.getElementById('createShape');
const canvas = document.getElementById('canvas');

// Event listener for "Create Shape" button
createShapeButton.addEventListener('click', () => {
  const shapeType = shapeSelector.value;
  const width = parseInt(widthInput.value);
  const height = parseInt(heightInput.value);

  if (!width || (shapeType !== 'circle' && shapeType !== 'square' && !height)) {
    alert('Please enter valid dimensions.');
    return;
  }

  createShape(shapeType, width, height);
});

// Create shape and append to canvas
function createShape(shapeType, width, height) {
  const shape = document.createElement('div');
  shape.className = 'shape';

  switch (shapeType) {
    case 'circle':
      shape.style.width = `${width}px`;
      shape.style.height = `${width}px`;
      shape.style.borderRadius = '50%';
      shape.style.backgroundColor = randomColor();
      break;

    case 'square':
      shape.style.width = `${width}px`;
      shape.style.height = `${width}px`;
      shape.style.backgroundColor = randomColor();
      break;

    case 'rectangle':
      shape.style.width = `${width}px`;
      shape.style.height = `${height}px`;
      shape.style.backgroundColor = randomColor();
      break;

    case 'oval':
      shape.style.width = `${width}px`;
      shape.style.height = `${height}px`;
      shape.style.borderRadius = '50%';
      shape.style.backgroundColor = randomColor();
      break;

    default:
      alert('Unknown shape type.');
      return;
  }

  // Append the shape to the canvas
  canvas.appendChild(shape);
}

// Generate a random color
function randomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
