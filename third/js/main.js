console.log("Hello World !");
console.log("Hello World !!");
console.log("Hello World !!!");
console.log("Hello World !!!!");
console.log("Hello World !!!!!");

function sayeat(language) {

    message = "いただきます";
    if (language === 0) {
        console.log("いただきます");
    } else if (language === 1) {
        message = "잘 먹겠습니다";
    } else if (language === 2) {
        message = "let's eat";
    } else if (language === 3) {
        message = "我会很享受拥有这个的";
    } else if (language === 4) {
        message = "Je vais apprécier ça";
    }

    console.log(message);

    const eat_result = document.querySelector('#say_eat');
    eat_result.textContent = message;

}