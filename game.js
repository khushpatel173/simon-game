let level = 1;
let user = [];
let game = [];
let gamestart = false;
document.addEventListener("keypress" , 
    function()
{
   if(!gamestart)
   {
 flash();   
   }
   gamestart = true;
})
function flash()
{
    let randomnum = random();
    game.push(randomnum[3]);
    user =[];
    let heading = document.querySelector("h3");
    heading.innerText = `Level : ${level}`;
    level++;
   let box = document.querySelector(`.${randomnum}`); 
    box.classList.add("flash");
    setTimeout(
        () => {
        box.classList.remove("flash");
        } , 200
    )
}
function random()
{
    let random = Math.floor(Math.random() * 4) +1;
    return `box${random}`;
}

let container = document.querySelector(".container");
container.addEventListener("click" , function(event)
{
    // console.dir(event.target);
    if(gamestart)
    {
    user.push(event.target.className[3])
    // check the last index
    
    if(user[user.length-1] != game[user.length-1])
    {
      // that means you have lost;
      game =[];
      user = [];
      let h3 = document.querySelector("h3");
       h3.innerText = `You lost your score was ${level-1} , Press any key to start a new game`;
      level = 1;
      console.log("YOU LOST");
      gamestart = false;
    }
    if(gamestart)
    {
    if(user.length == game.length)
    {
        // move on the next round
        flash();
    }
}
}
})

