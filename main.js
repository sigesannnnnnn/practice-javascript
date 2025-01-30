function ClickCounterGame(){
    let count =0;
    const gameContainer =document.getElementById("game-container");

    let button1 =document.createElement("button");
    button1.textContent="+1ボタン";

    let button2 =document.createElement("button");
    button2.textContent="+10ボタン";

    let button3 =document.createElement("button");
    button3.textContent="リセット";
 


    let counter=document.createElement("p");
    counter.textContent=count ;

    button1.addEventListener("click",function(){
        if(count<100){
            count++;
        }
        counter.textContent=count;

        
    })
        button2.addEventListener("click",function(){
            if(count<=90){
            count=count+10
            }
            counter.textContent=count;

    })

    button3.addEventListener("click",function(){
        count=0;
        counter.textContent=count;


    })



    gameContainer.appendChild(button1);
    gameContainer.appendChild(button2);
    gameContainer.appendChild(button3);
    gameContainer.appendChild(counter);

}

ClickCounterGame();

function startNumberGuessgane(){
    const gameContainer=document.getElementById("game-container");
    const randomNumber=Math.floor(Math.random()*100) + 1;
    let messaga=document.createElement("p");
    messaga.textContent=randomNumber;
    let input =document.createElement("input");
    input.type="number";
    input.placeholder="好きな数字を入力してください(1~100)"

    gameContainer.appendChild(input);
    gameContainer.appendChild(messaga);

    let button =document.createElement("button");
    button.textContent="確認"

    button.addEventListener("click",function(){
        const val =parseInt(input.value);
        if (randomNumber == val){
            messaga.textContent="正解"
        }else if(randomNumber<val){
            messaga.textContent="大きい"
        }else{
            messaga.textContent="小さい"
        }

        count++;
        countDisplay.textContent=`試行錯誤: ${count}`;
    })
gameContainer.appendChild(button);
let count=0;
const countDisplay=document.createElement("p");
countDisplay.textContent=`試行錯誤: ${count}`;
gameContainer.appendChild(countDisplay);
}
startNumberGuessgane();
