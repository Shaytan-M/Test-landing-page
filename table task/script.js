let modalWrapper = document.querySelector('.modal_window_wrapper');
let modalWindow = document.querySelector('.modal_window');
let buttonEdit = document.querySelector('#edit');
let secondModal = document.querySelector('.second_form_wrapper');
let buttonSave = document.querySelector('#save');
let secondForm = document.querySelector('.second_form');
let tbody = document.querySelector('.table_wrapper>table>tbody');
let listboxInp = document.querySelectorAll('#checkboxes>label>input');
let firstInputValue;
let secondInputValue; 
var expanded = false;
let objForData = [];





// Відкриття першого модального вікна
function showModal(event){   
    modalWrapper.classList.add('active')


   
    
}
// Закриття першого модального вікна без змін в таблиці
modalWrapper.addEventListener('click', function(e){  
    modalWrapper.classList.remove('active')


    
})

modalWindow.addEventListener('click', function(e){ 
    e.stopImmediatePropagation()
})


//  Відкриття другого модального вікна
buttonEdit.addEventListener('click', function(e){ 
    e.preventDefault()

    secondInputValue = document.querySelectorAll('.second_main_inp > label > input');
    firstInputValue = document.querySelectorAll('.main_inp > label > input');


    secondInputValue.forEach(item => {
      
       

        firstInputValue.forEach(inp => {
            if(item.getAttribute('data-name') == inp.getAttribute('data-name')){
                item.value = inp.value
            }
        })

        
    });

    secondModal.classList.add('active')

    
})
// Закриття першого модального вікна без змін в першому
secondModal.addEventListener('click', function(e){  
    secondModal.classList.remove('active')
})


// збереження другого модального вікна
buttonSave.addEventListener('click', function(e){ 
    e.preventDefault()
    

    secondInputValue = document.querySelectorAll('.second_main_inp > label > input');
    firstInputValue = document.querySelectorAll('.main_inp > label > input')

   
    secondInputValue.forEach(item => {
      
       

        firstInputValue.forEach(inp => {
            if(item.getAttribute('data-name') == inp.getAttribute('data-name')){
                inp.value = item.value
            }
        })

        
    });

    secondModal.classList.remove('active')

   

    
})



secondForm.addEventListener('click', function(e){
    e.stopPropagation()
})



// Функція для лістБоксу
function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}




// Збереження першого модального вікна
first_save.addEventListener('click', function(e){ 
  

    let lstbox = '';

    listboxInp.forEach(item => {
        item.checked ? lstbox += item.value + ';' : '';

        item.checked = false;
    })

    
    let formInp = e.path[1].elements;
    
    let obj = {
        number: formInp[0].value,
        date: formInp[1].value,
        name: formInp[2].value,
        reason : lstbox,
        address: formInp[3].value

    }

    
    


    localStorage.setItem(`${JSON.stringify(obj)}` ,JSON.stringify(obj))




})




function sumKvtFunc(event){



    sumKVT.value = +firstKVT.value + +secondKVT.value + +threeKVT.value


}




async function getData(url) {
    const resp = await fetch(url);
    return await resp.json();
}





function printData(){
  
  

    
    let arrLocal = Object.values(localStorage);



    arrLocal.forEach(item => {
        

        tbody.innerHTML += `<tr><td>${JSON.parse(item).number}</td><td>${JSON.parse(item).date}</td><td>${JSON.parse(item).name}</td> <td>${JSON.parse(item).reason}</td><td>${JSON.parse(item).address}</td></tr>`
    })




}







printData()




