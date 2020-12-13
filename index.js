



const BO = document.getElementById("bo");
const OP = document.getElementById("op");

const BO_sound = [];
Array.from(new Array(12).keys()).map((i) => {
    BO_sound.push(new Audio(`./sound/bo/bo (${i + 1}).wav`));
});

const OP_sound = [];
Array.from(new Array(10).keys()).map((i) => {
    OP_sound.push(new Audio(`./sound/op/op (${i + 1}).wav`));
});


const _bo = () => {
    BO.classList.add("on");
    OP.classList.remove("on");
    BO_sound[Math.floor(Math.random() * (BO_sound.length + 1))].play();
}
const _op = () => {
    BO.classList.remove("on");
    OP.classList.add("on");
    OP_sound[Math.floor(Math.random() * (OP_sound.length + 1))].play();
}


BO.addEventListener("mousedown", _bo);
BO.addEventListener("mouseup", _op);

OP.addEventListener("mousedown", _bo);
OP.addEventListener("mouseup", _op);