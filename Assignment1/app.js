// Function to get a random color in the format #RRGGBB
function generateRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

// Function to set that random color of the square box
function setRandomColor() {
    // let box = document.getElementById('box');
    // box.style.backgroundColor = generateRandomColor();
}
  

// Function to change background color of body as per the random color, that gets generated in square box
function changeBackgroundColor() { 
    let box = document.getElementById('background');
    box.style.backgroundColor = generateRandomColor();
}