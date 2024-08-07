const game: string[] = ["Rock", "paper", "scissor"];

const play = (items:string) =>{
    let random: string = game[Math.floor(Math.random() * game.length)]

    console.log(random);
    if(random === items){
        return "draw";
    }
    else if (random === "Rock" && items === "scissor"){
        return "You Lose"
    }
    else if (random === "paper" && items === "Rock"){
        return "You Lose"
    }
    else if (random === "scissor" && items === "paper"){
        return "You Lose"
    }
    else if (random === "Rock" && items === "paper"){
        return "You Win"
    }
    else if (random === "paper" && items === "scissor"){
        return "You Win"
    }
    else if (random === "scissor" && items === "Rock"){
        return "You Win"
    }
}
console.log(play("scissor"))