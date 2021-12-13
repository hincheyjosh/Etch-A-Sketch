const canvas = document.querySelector(".canvas")

let color = 'black'

function changeColor(newColor) {
    color = newColor
}

function clearCanvas() {
    const cells = document.querySelectorAll(".cell")
    cells.forEach(cell => {
        cell.style.backgroundColor = "white"
    })
}

function createCanvas() {
    let size;
    
    while (true) {
        input = Number(prompt("Pick the size of your 'pixels'(1-100): "))
        if (!input || input < 1 || input > 100) {
            alert("Please enter a valid number.")
        } else {
            size = input
            break
        }
    }

    for (let i = 0; i < size; i++) {
        let newRow = document.createElement("div")
        newRow.className = 'row'
        for (let j = 0; j < size; j++) {
            let newCell = document.createElement("div")
            newCell.className = 'cell'
            newRow.appendChild(newCell)
        }
        canvas.appendChild(newRow)
    }
    const divs = document.querySelectorAll(".cell")

    divs.forEach(div => {
        div.addEventListener("mouseover", function() {
            this.style.backgroundColor = color
        })
    })
}

window.addEventListener("DOMContentLoaded", createCanvas)