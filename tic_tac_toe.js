let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn = document.querySelector("#newbtn");
let mgscont = document.querySelector(".msgcont");
let msg = document.querySelector("#msg");
let count = 0;
let turnO = true; //player O

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
            count = count + 1;
        }
        else {
            box.innerText = "X";
            turnO = true;
            count = count + 1;
        }
        box.disabled = true;

        let iswinner = checkwinner();
        if (count == 9 && !iswinner) {
            drawmatch();
        }
    });
});

const disablebtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enablebtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const drawmatch = () => {
    msg.innerText = "This is a draw match";
    mgscont.classList.remove("hide");
    disablebtn();
}

const showwinner = (winner) => {
    msg.innerText = `congratulations , winner is ${winner}`;
    mgscont.classList.remove("hide");
    disablebtn();
};

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log(pos1val + " is the winner");
                showwinner(pos1val);
                return true;
            }
        }
    }
};

const resetgame = () => {
    turnO = true;
    enablebtn();
    mgscont.classList.add("hide");
    count = 0;
};

resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);