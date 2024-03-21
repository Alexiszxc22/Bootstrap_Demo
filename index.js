console.log("Hello World");
let isB = false, isI = false, isN = false, isG = false, isO = false;

let BNumber, INumber, NNumber, GNumber, ONumber;

//new number
function generateNumber(maxNumber) {
    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    if (randomNumber <= 15) {
        BNumber = randomNumber;
        isB = true;
        console.log(`The Number ${randomNumber} is in "B"`);
        document.querySelector("#tr1").textContent = randomNumber;
        document.querySelector("#tr6").textContent = randomNumber;
        document.querySelector("#tr11").textContent = randomNumber;
        document.querySelector("#tr16").textContent = randomNumber;
        document.querySelector("#tr21").textContent = randomNumber;

    } else if (randomNumber >= 16 && randomNumber <= 30) {
        INumber = randomNumber;
        isI = true;
        console.log(`The Number ${randomNumber} is in "I`);
        document.querySelector("#tr2").textContent = randomNumber;
        document.querySelector("#tr7").textContent = randomNumber;
        document.querySelector("#tr12").textContent = randomNumber;
        document.querySelector("#tr17").textContent = randomNumber;
        document.querySelector("#tr22").textContent = randomNumber;

    } else if (randomNumber >= 31 && randomNumber <= 45) {
        NNumber = randomNumber;
        isN = true;
        console.log(`The Number ${randomNumber} is in "N"`);
        document.querySelector("#tr3").textContent = randomNumber;
        document.querySelector("#tr8").textContent = randomNumber;
        document.querySelector("#tr18").textContent = randomNumber;
        document.querySelector("#tr23").textContent = randomNumber;

    } else if (randomNumber >= 46 && randomNumber <= 60) {
        GNumber = randomNumber;
        isG = true;
        console.log(`The Number is ${randomNumber} is in "G"`);
        document.querySelector("#tr4").textContent = randomNumber;
        document.querySelector("#tr9").textContent = randomNumber;
        document.querySelector("#tr14").textContent = randomNumber;
        document.querySelector("#tr19").textContent = randomNumber;
        document.querySelector("#tr24").textContent = randomNumber;

    } else if (randomNumber >= 61 && randomNumber <= 75) {
        ONumber = randomNumber;
        isO = true;
        console.log(`The Number ${randomNumber} is in"O"`);
        document.querySelector("#tr5").textContent = randomNumber;
        document.querySelector("#tr10").textContent = randomNumber;
        document.querySelector("#tr15").textContent = randomNumber;
        document.querySelector("#tr20").textContent = randomNumber;
        document.querySelector("#tr25").textContent = randomNumber;
    }
}

let counter = 10;

while (!isB || !isI || !isN || !isG || !isO) {
    generateNumber(75);
}

if (isB && isI && isN && isG && isO) {
    console.log('BEEENGOOOOOOOOOO!!!!');
    console.table({
        B: BNumber,
        I: INumber,
        N: NNumber,
        G: GNumber,
        O: ONumber,
    });
}
