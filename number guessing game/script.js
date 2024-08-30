let user_input = document.getElementById('input');

let button = document.getElementById('guess');
let user_num = document.getElementById('usernum');
let guesses = document.getElementById('numofguess');
let guessval = document.getElementById('guessnoval');
let user_number = document.getElementById('usernumval');
let hint = document.getElementById('hint')
let value = undefined ;

let counter = 0
guessval.innerHTML = counter


let random = Math.round(Math.random()*15)
console.log(random);


function popupe(){
    let popUp =  document.createElement('div');
    let popUpBtn = document.createElement('button');
    popUp.innerText = "Congratulations you won the game "
    popUpBtn.innerText = 'Play Again';
    popUpBtn.className = 'popupbtn'
    popUp.className = 'popup';
    document.body.append(popUp);
    popUp.appendChild(popUpBtn)


    popUpBtn.addEventListener('click', ()=>{
        popUp.style.display = 'none'
        document.location.reload()
     })
 
 }


     

button.addEventListener('click',function(){
    value = Number(user_input.value);
    guessCount();
    guessNumber()
    click();
    
  
    
} ) 





function guessNumber(){
    user_number.innerHTML += user_input.value + " "
}

function guessCount(){
    counter++
    guessval.innerHTML = counter
}
function click(){
    
    if (value == undefined) {
        hint.innerHTML = 'Enter a Number'
    }

    if (value  === random){
        // hint.innerHTML = "congratulations you have guessed the correct number";
       popupe()
       
    }
    if(value > random){
        hint.innerHTML = "your guess is too high";
    }
    if(value <random){
        hint.innerHTML = "your guess is too low";
    }
   
   
}



