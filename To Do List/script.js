let additem = document.getElementById('addtodo');
let itemList = document.getElementById('list');
let remove = document.querySelector('remove');
let input = document.getElementById('addtextinput');
let clearInput = document.getElementById('clear');
let deleteItems = document.getElementById('delete');

input.value= '';

clearInput.addEventListener('click' , ()=>{
    input.value = '';
});


additem.addEventListener('click' , ()=>{
    addingElement();  
});
document.addEventListener('keydown',(event)=>{
    if (event.key == 'Enter') {
        addingElement()
    }
});

deleteItems.addEventListener('click', deleteSelected)

function addingElement(){
    if (input.value !== '' ) {
        
   
   let added =  document.createElement('div');
    added.className = "addedtodo";

   let addedcheck = document.createElement('input');
   addedcheck.type = 'checkbox';
   addedcheck.className = 'check';
   added.appendChild(addedcheck);

   let addedinput = document.createElement('h3');
   addedinput.className = 'addedtext';
   addedinput.innerHTML = input.value;
   added.appendChild(addedinput)

   let removebtn = document.createElement('button');
   removebtn.className = 'remove';
   removebtn.innerHTML = 'X';
   added.appendChild(removebtn)

   itemList.appendChild(added)  




   removebtn.addEventListener('click' , ()=>{
    itemList.removeChild(added) 
   })

     
   }
  input.value = ''
input.focus()
    
}




function deleteSelected(){
   
    let items = document.querySelectorAll('.addedtodo');
    items.forEach((item)=>{
       let checkbox =   item.querySelector('.check');
         if(checkbox.checked){
            itemList.removeChild(item)
         }
    })

}
//background: rgba(62, 151, 151, 0.311);