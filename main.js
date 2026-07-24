console.log("Hello World !");
console.log("Hello World !!");
console.log("Hello World !!!");
console.log("Hello World !!!!");
console.log("Hello World !!!!!");

function sayspring(language) {

    message = "春";
    if (language === 0) {
        console.log("春");
    } else if (language === 1) {
        message = "spring";
    } else if (language === 2) {
        message = "printemps";
    } else if (language === 3) {
        message = "primavera";
    } else if (language === 4) {
        message = "春天";
    }

    console.log(message);

    const spring_result = document.querySelector('#say_spring');
    spring_result.textContent = message;

}