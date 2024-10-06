let UserPoint=0;
let CompPoint=0;

let message=document.querySelector(".msg");

let choices =document.querySelectorAll(".choice");

let UserScore=document.querySelector("#user-point");
let CompScore=document.querySelector("#comp-point");




const genCompChoice = () => {
    const option=["rock","paper","scissior"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];
}

const gameDraw=()=>{
    console.log("Game Is Draw");
    message.innerText="Game is Draw";
    message.style.backgroundColor="blue";
}



const playGame=(userChoice)=>{
    console.log("Box Is Clicked ",userChoice);

    const compChoice=genCompChoice();
    console.log("Comp Choice ",compChoice);
    

    const showWinner=(UserWin,userChoice,compChoice)=>{
        if(UserWin){
            UserPoint++;
            UserScore.innerText=UserPoint;
            // console.log(`You Win! ${userChoice} beats comp ${compChoice}`);//to check Who Wins In Console
            message.innerText=`You Win! ${userChoice} beats comp ${compChoice}`;
            message.style.backgroundColor="green";
        }else{
            CompPoint++;
            CompScore.innerText=UserPoint;
            // console.log(`You lose ${compChoice} beat user ${use}`);//same as Upper print in Console Only
            message.innerText=`You lose ${compChoice} beat user ${userChoice}`;
            message.style.backgroundColor="red";
        }
    }

    if(userChoice===compChoice){
        gameDraw();
    }else{
        let UserWin=true;
        if(userChoice==="rock"){
            UserWin=compChoice==="scissior"?false : true;
        }
        else if(userChoice==="paper"){
            UserWin=compChoice==="rock"?false:true;
        }
        else {
            UserWin=compChoice==="rock"?false:true;
        }
        showWinner(UserWin ,compChoice,userChoice);
    }
}






choices.forEach((choice)=>{
    choice.addEventListener('click',function(){
        const userChoice=choice.getAttribute("id");
        // console.log("Choice Clicked",userChoice);//to check which id is Clicked
        playGame(userChoice); //making a function for playing Game;
    })
})


