const container = document.getElementById("container");
const colors= ["#56CF2", "#05AFF2", "#F28705", "#A62103"];
const SQUARE=500;

const getRandomColor = () => colors[Math.floor(Math.random()*colors.length)];

const setColor= (square) => {
    const color = getRandomColor();
    square.style.bacckground=color;
    square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};
const removeColor = (square) => {
    square.style.bacckground="#1d1d1d";
    square.style.boxShadow="0 0 2px #000";

};
for (let i=0; i < SQUARE; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));
    container.appendChild(square);

}