let answer = document.getElementById('answer')

let input = document.querySelectorAll('button')


input.forEach((button)=>{
    button.addEventListener('click', ()=>{
        answer.innerHTML += button.value;
    })
})

function  result() {
   if (answer.value !== '') {
      let evalua = eval(answer.innerHTML)
    answer.innerHTML =evalua
   }
    
    
}


function reset(){
   return answer.innerHTML = null;
}

function deleteWord(){
   let string =  answer.innerHTML.toString()
   return answer.innerHTML =  string.slice(0,-1)
}

 function toggleTheme(){
    return document.body.classList.toggle("dark-theme");
 }

 document.addEventListener('keydown' , (event)=>{
      let key = event.key

      if (key >= 0 && key <= 9 ) {
         answer.value += key
      }else if (key == 'Enter') {
        event.preventDefault()
         result()
      }else if (key == 'Backspace') {
         deleteWord()
      }else if (key == 'Escape') {
         reset()
      }else if(key == '+' || key == '-' || key =='*' || key == '/'){
         answer.value += key
      }
 })
