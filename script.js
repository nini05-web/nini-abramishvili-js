// burger bar
let navigation=document.getElementById("nav-bar")
let burgerBar=document.getElementById("burger-Bar")

burgerBar.addEventListener("click", function () {
    navigation.classList.toggle("toggle")
    burgerBar.classList.toggle("activeBar")
  });
  
  let input = document.querySelector(".input-form");
  let addButton = document.querySelector(".btn-add");
  let ul = document.querySelector(".ul-items");
  let clearAllItems = document.querySelector(".clearall");
  
  addButton.addEventListener("click" , function() {
    let inputValue = input.value;
    if (inputValue = " " ){
     return
    }
    
    let li = document.createElement("li");
  
    let btnDelete = document.createElement("i");
    btnDelete.innerHTML = <i class="fa-solid fa-trash"></i>
    btnDelete.addEventListener("click", function () {
      li.remove();
    });
    li.textContent = inputValue;
  
    li.appendChild(i);
    ul.appendChild(li);
  
    input.value = " ";
  });
  
  clearAllItems.addEventListener("click", function () {
    ul.innerHTML = " ";
  });
  
