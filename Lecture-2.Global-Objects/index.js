let no = 0;
const demo = () => {
    no++;
    if (no <= 10) {
        console.log(no);
    }
}
setInterval(demo, 1000);
const demo3 = () => {
    console.log("Hello World!");
}
setTimeout(demo3, 1000);
