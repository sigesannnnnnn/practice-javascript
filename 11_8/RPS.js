function RPS(){
const choices=["gu","choki","pa-"];

    // let Select =document.createElement("select");
    // let option1 =document.createElement("option");
    // let option2 =document.createElement("option");
    // let option3 =document.createElement("option");
    // const gu="gu";
    // option1 CSSMathValue


    let select =document.createElement("select");
    choices.forEach(choice => {
      let option =document.createElement("option");
      option.value=choice;
      option.textContent=choice;
      select.appendChild(option);
    });
    game.appendChild(select)

    let image=document.createElement("img")
    image.alt="choice";
    image.style.width="100px";
    image.style.height="100px";
    image.src="https://cdn-ak.f.st-hatena.com/images/fotolife/k/kotobalover/20190623/20190623180238.png"

    game.appendChild(image)
}