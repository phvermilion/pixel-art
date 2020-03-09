//elements from html file
const pixelColor = document.getElementById('colorPicker') //color choice
const textFieldHeight = document.getElementById('inputHeight'); //height choice
const textFieldWidth = document.getElementById('inputWidth');//width choice
const sizePickerForm = document.getElementById('sizePicker');//form
const grid = document.getElementById('pixelCanvas');//the whole grid element

/** 
 * @function makeGrid Takes 2 numbers and creates an HTML table
 * @param {number} width the number of columns in the table
 * @param {number} height the number of rows in the table
 */

function makeGrid(height, width) {
    grid.innerHTML = "";//removes any previous grid
    for (let row = 0; row < height; row++){
        const newRow = grid.insertRow(row);
        for (let col = 0; col < width; col++) {
            const newCell = newRow.insertCell(col); //adds a cell (column) in a row
            //event listener on each cell that has beeen created
            newCell.addEventListener('click', function(event){
                event.target.style.backgroundColor = pixelColor.value //adds color
            })
            
        }
    }
}


sizePickerForm.addEventListener("submit", function (event){
    event.preventDefault(); //makes it so when submitted a new page isn't automatically loaded   
    makeGrid(textFieldHeight.value, textFieldWidth.value)
});
