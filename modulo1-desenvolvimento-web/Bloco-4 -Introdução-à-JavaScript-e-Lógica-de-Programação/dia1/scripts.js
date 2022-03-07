const a1 = 90;
const a2 = 200;
const a3 = 46;

if (a1 < 0 || a2 < 0 || a3 < 0) {
    console.log("insira um angulo valido");
}
else if (a1 + a2 + a3 === 180){
    console.log(true);
}
else {
    console.log(false);
}