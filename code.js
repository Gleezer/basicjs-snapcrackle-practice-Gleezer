// To run this assignment, right click on index.html in the Visual Studio file explorer to the left
// and select "Open with Live Server"

// Your Code Here.

function snapCrackle(maxValue)
{
    let string = ''
    for (let index = 1; index <= maxValue; index++)
    {
        let isEven = index % 2 === 0
        let isOdd = !isEven
        let iSMultFive = index % 5 === 0
        let notMultFive = !iSMultFive

        if (isOdd && iSMultFive)
        {
            string += 'SnapCrackle, '
        }
        else if (isOdd && notMultFive)
        {
            string += 'Snap, '
        }
        else if (iSMultFive && isEven)
        {
            string += 'Crackle, '
        }
        else if (isEven)
        {
            string += index + ', '
        }
    
    }

    return string
} 


function render (maxValue, text)
{
    document.write(` <h1>Snap  Crackle!</h1> <h3>Max Value is: ${maxValue}</h3> <p> ${text}</p> `)
}
//console.log(snapCrackle(12))
//console.log(render(12, snap))

let highestNumber = prompt("What is the Highest Number?")
let snap = snapCrackle(highestNumber)
render(highestNumber, snap)
