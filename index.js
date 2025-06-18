let roll = document.querySelector("button");
roll.addEventListener("click", ()=> {
var randomNum = (Math.floor(Math.random() * 6)) + 1;
if(randomNum===1){
document.querySelector(".img1").src="../ProjectDiceGame/image/dice1.png";
}
else if(randomNum===2){
    document.querySelector(".img1").src="../ProjectDiceGame/image/dice2.png";
}
else if(randomNum===3){
    document.querySelector(".img1").src="../ProjectDiceGame/image/dice3.png";
}
else if(randomNum===4){
    document.querySelector(".img1").src="../ProjectDiceGame/image/dice4.png";
}
else if(randomNum===5){
    document.querySelector(".img1").src="../ProjectDiceGame/image/dice5.png";
}
else if(randomNum===6){
    document.querySelector(".img1").src="../ProjectDiceGame/image/dice6.png";
}
else{
    document.querySelector(".img1").src="../ProjectDiceGame/image/dice6.png";
}

var randomNum2 = (Math.floor(Math.random()*6)) +1 ;
if(randomNum2===1){
    document.querySelector(".img2").src="../ProjectDiceGame/image/dice1.png";
    }
    else if(randomNum2===2){
        document.querySelector(".img2").src="../ProjectDiceGame/image/dice2.png";
    }
    else if(randomNum2===3){
        document.querySelector(".img2").src="../ProjectDiceGame/image/dice3.png";
    }
    else if(randomNum2===4){
        document.querySelector(".img2").src="../ProjectDiceGame/image/dice4.png";
    }
    else if(randomNum2===5){
        document.querySelector(".img2").src="../ProjectDiceGame/image/dice5.png";
    }
    else if(randomNum2===6){
        document.querySelector(".img2").src="../ProjectDiceGame/image/dice6.png";
    }
    else{
        document.querySelector(".img2").src="../ProjectDiceGame/image/dice6.png";
    }
    if(randomNum>randomNum2){
        document.querySelector("h1").innerHTML = "👑Player1 Wins";
    }
    else if(randomNum<randomNum2){
        document.querySelector("h1").innerHTML = "Player2 Wins👑";
    }
    else{
        document.querySelector("h1").innerHTML = "Draws🤦‍♀️";
    }
});