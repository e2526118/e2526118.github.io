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

function janken(myHand) {

    let handArray = ['ぐー', 'ちょき', 'ぱー'];

    let resultArray = ['アイコです．', 'あなたの負けです．', 'あなたの勝ちです．'];


    let computerHand = 0;


    let result = 0;


    console.log('あなたの手は：' + handArray[myHand]);


    let rand = Math.random() * 100;
    console.log('乱数：' + rand);


    let rand_int = Math.floor(rand);
    console.log('乱数（整数）：' + rand_int);


    computerHand = rand_int % 3;
    console.log('computerHand：' + computerHand);
    console.log('コンピュータの手は：' + handArray[computerHand]);

    result = (myHand - computerHand + 3) % 3
    

    console.log(resultArray[result]);
    console.log('-----------------------------');

    const janken_result = document.querySelector('#result');
    janken_result.textContent = resultArray[result];
}

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