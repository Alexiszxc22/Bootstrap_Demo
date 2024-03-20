console.log("Hello World");
let isB = false, 
isI = false,
isN = false, 
isG = false,
isO = false;

//new number

function generateNumber (maxNumber) {
    
    
    // Addition = "+"
    // Subtraction = "-"
    // Multiplication = "*"
    // Division = "/"
    // Remainder = "%"

   let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

   // if ... else if ... else statement
   // Conditional operator
   // GE >=, LTE <=, EQ ==, NEQ ! =, AND &&, OR ||
    if (randomNumber <= 15) {
        isB = true;
        console.log('The Number is in "B"');
        
    } else if (randomNumber>= 16 && randomNumber <= 30) {
        isI = true;
        console.log('The Number is in "I"');
        
    } else if (randomNumber>= 31 && randomNumber <= 45) {
       isN = true;
       console.log('The Number is in "N"');
        
    } else if (randomNumber >= 46 && randomNumber <= 60) {
        isG = true;
        console.log('The Number is in "G"');
        
    } else if (randomNumber >= 61 && randomNumber <= 75) {
        isO = true;
        console.log('The Number is in"O"');
        
    } else {
        console.log('The number is invalid.');
    }

    if (isB == true && isI==true && isN == true && isG == true && isO == true) {
     console.log('BINGOOOOOOO!!!!');   
     
    }
}

let counter = 10;