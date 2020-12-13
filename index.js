

const BO = document.getElementById("bo");
const OP = document.getElementById("op");

const _bo = () => {
    BO.classList.add("on");
    OP.classList.remove("on");
}
const _op = () => {
    BO.classList.remove("on");
    OP.classList.add("on");
}


BO.addEventListener("mousedown", _bo);
BO.addEventListener("mouseup", _op);

OP.addEventListener("mousedown", _bo);
OP.addEventListener("mouseup", _op);