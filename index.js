console.log("Hello World")
let Array = [[], [], [], [], []];
let B = false, 
I = false,
N = false, 
G = false,
O = false;

function newNumber(maxNumber) {

    let loop = true;
    let loop2 = true;
    let loop3 = true;
    let loop4 = true;
    let loop5 = true;


    while (loop == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1;
        if (x <= 15) {
            console.log(`The number is ${x} belongs to "B"`);
            B = true;
            BNumber = x;
            if (!Array[0].includes(x)) {
                Array[0].push(x);
            document.querySelector("#td1").textContent = Array[0][0];
            document.querySelector("#td6").textContent = Array[0][1];
            document.querySelector("#td11").textContent = Array[0][2];
            document.querySelector("#td16").textContent = Array[0][3];
            document.querySelector("#td21").textContent = Array[0][4];
            }
            if (Array[0][0,1,2,3,4] != null) {
                B = true;
                loop = false;
            }
        }
    }
    while (loop2 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1;
        if (x >= 16 && x <= 30) {
            console.log(`The number is ${x} belongs to "I"`);
            I = true;
            INumber = x;
            if (!Array[1].includes(x)) {
                Array[1].push(x);
            document.querySelector("#td2").textContent = Array[1][0];
            document.querySelector("#td7").textContent = Array[1][1];
            document.querySelector("#td12").textContent = Array[1][2];
            document.querySelector("#td17").textContent = Array[1][3];
            document.querySelector("#td22").textContent = Array[1][4];
            }
            if (Array[1][0,1,2,3,4] != null) {
                I = true;
                loop2 = false;
            }
        }
    }
    while (loop3 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1;
        if (x >= 31 && x <= 45) {
            console.log(`The number is ${x} belongs to "N"`);
            N = true;
            NNumber = x;
            if (!Array[2].includes(x)) {
                Array[2].push(x);
            document.querySelector("#td3").textContent = Array[2][0];
            document.querySelector("#td8").textContent = Array[2][1];
            document.querySelector("#td18").textContent = Array[2][3];
            document.querySelector("#td23").textContent = Array[2][4];
            }
            if (Array[2][0,1,2,3,4] != null) {
                N = true;
                loop3 = false;
            }
        }
    }
    while (loop4 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1;
        if (x >= 46 && x <= 60) {
            console.log(`The number is ${x} belongs to "G"`);
            G = true;
            GNumber = x;
            if (!Array[3].includes(x)) {
                Array[3].push(x);
            document.querySelector("#td4").textContent = Array[3][0];
            document.querySelector("#td9").textContent = Array[3][1];
            document.querySelector("#td14").textContent = Array[3][2];
            document.querySelector("#td19").textContent = Array[3][3];
            document.querySelector("#td24").textContent = Array[3][4];
            }
            if (Array[3][0,1,2,3,4] != null) {
                G = true;
                loop4 = false;
            }
        }
    }
    while (loop5 == true) {
        let x = Math.floor(Math.random() * maxNumber) + 1;
        if (x >= 61 && x <= 75) {
            console.log(`The number is ${x} belongs to "O"`);
            O = true;
            ONumber = x;
            if (!Array[4].includes(x)) {
            Array[4].push(x);
            document.querySelector("#td5").textContent = Array[4][0];
            document.querySelector("#td10").textContent = Array[4][1];
            document.querySelector("#td15").textContent = Array[4][2];
            document.querySelector("#td20").textContent = Array[4][3];
            document.querySelector("#td25").textContent = Array[4][4];
            }
            if (Array[4][0,1,2,3,4] != null) {
                O = true;
                loop5 = false;
            }
        }
    }

   


   if (B == true && I==true && N == true && G == true && O == true) {
     console.log(`BingoOOO!!!`)
     console.table ({
        B: BNumber,
        I: INumber,
        N: NNumber,
        G: GNumber,
        O: ONumber,
     });   
    }
}


// LOOPS
//let counter = 5;
//for(counter; counter >= 0; counter -- ) {
  // console.log(Current counter is ${counter});
   //if (counter == 2) break;

   //newNumber(75); }

//let counter = 10;
//while(counter >= 0 ){
  // console.log(Current counter is ${counter});
    //counter --; }

while (B == false || I == false || N == false || G == false || O == false){
    newNumber(75);
    if (B || I || N || G || O) {
        console.log(`BingoOOO!!!`)
    }
}

let cellValues = [];
document.querySelectorAll("td").forEach(cell => {
    cellValues.push(parseInt(cell.textContent));
});

let numColumns = document.querySelectorAll("tr")[0].childElementCount;

cellValues.sort((a, b) => a - b);

let index = 0;
for (let col = 0; col < numColumns; col++) {
    for (let row = 0; row < cellValues.length / numColumns; row++) {
        document.querySelectorAll("td")[row * numColumns + col].textContent = cellValues[index++];
    }
}
