const colors  = ["green","red","rgba(133,122,200)","#f15025","cyan","silver"]

const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

btn.style.backgroundColor = "#78C1F3"
// tried to give bgcolor directly from here
// so the values must be given as string otherwise errors will occur

btn.addEventListener("click",function getColor() {
    // numbers from 0 - 3
    const randomNumber = getRandNum();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
});

function getRandNum() {
    return parseInt(Math.random()*colors.length);
    // we can also use 
    // floor method
    // return Math.floor(Math.random()*colors.length);
}






