

function changeColor(){
    document.getElementById("text").style.color="red";

}


//document.getElementById("text").style.color="red";
/*これは、ドキュメントの中の（text）というidを持っている
タグのスタイルの色を赤にしてください。*/

function increasCount(){
  
    count++;
    document.getElementById("counter").innerText=count;

}

function herasukaunto(){
  
    count--;
    document.getElementById("counter").innerText=count;
}

let count=0;