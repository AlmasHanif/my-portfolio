


///selecting start page tags///

let startingPage = document.querySelector("#starting-page");
let choose = document.querySelectorAll(".choose");

///selecting main page tags///
let mainPage = document.querySelector("#main-page");
let showChange = document.querySelector("#show-change");
let boxes = document.querySelectorAll(".boxes");

///selecting winner page tags///
let winner = document.querySelector("#winner");
let winner_name = document.querySelector("#winner-name");
let quit_btn = document.querySelector("#quit");



//false => x turn
//true => o turn
let changeTurn = null;



//select which you ///

choose.forEach(chooseNow => {
    chooseNow.addEventListener("click", () => {
        if (chooseNow.id === "playerX") {
            changeTurn = false;
            // console.log(changeTurn)
            showChange.style.left = "0px";
        }
        else {
            changeTurn = true;
            // console.log(changeTurn)
            showChange.style.left = "160px";

        }
        startingPage.style.display = "none";
        mainPage.style.display = "block";
    })
})

boxes.forEach(items => {
    items.addEventListener("click", () => {
        //add x icon if changeturn = false
        //add o icon if changeturn = true
        if (changeTurn == false) {
            items.innerHTML = `<i class= "fas fa-times"></i>`;
            items.id = "X";
            items.style.pointerEvents = "none";
            showChange.style.left = "160px";

            //change turn value true//
            changeTurn = true;
        }
        else {
            items.innerHTML = `<i class= "fas fa-circle-notch"></i>`;
            items.id = "O";
            items.style.pointerEvents = "none";
            showChange.style.left = "0px";

            //change turn value true//
            changeTurn = false;
        }
        winingFunc();
        drawFunc();
    })
})

///all posible wining combo///

let winingCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let winingFunc = () => {
    for (let i = 0; i <= 7; i++) {
        let a = winingCombination[i];
        // console.log(a)
        if (boxes[a[0]].id == "" || boxes[a[1]].id == "" || boxes[a[2]].id == "") {
            continue;
        }
        else if (boxes[a[0]].id == "X" && boxes[a[1]].id == "X" && boxes[a[2]].id == "X") {
            // console.log("X is winner")


            ///add winner text///
            winner_name.innerText = `Player X win The Game!`;


            ///show winner page & hide main page///
            mainPage.style.display = "none";
            winner.style.display = "block";
        }
        else if (boxes[a[0]].id == "O" && boxes[a[1]].id == "O" && boxes[a[2]].id == "O") {
            console.log("O is winner")

            ///add winner text///
            winner_name.innerText = `Player O win The Game!`;


            ///show winner page & hide main page///
            mainPage.style.display = "none";
            winner.style.display = "block";
        }
        else {
            continue;
        }
    }
}

////game draw function///

let drawFunc = () => {
    if (boxes[0].id != "" && boxes[1].id != "" &&
        boxes[2].id != "" && boxes[3].id != "" &&
        boxes[4].id != "" && boxes[5].id != "" &&
        boxes[6].id != "" && boxes[7].id != "" && boxes[8].id != "") {


        ///add draw text///
        winner_name.innerText = `Draw The Game!`;


        ///show winner page & hide main page///
        mainPage.style.display = "none";
        winner.style.display = "block";
    }
}


///restart game///

quit_btn.addEventListener("click", ()=>{
    window.location.reload();
})