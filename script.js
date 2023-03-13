"use strict"
let elForm = document.querySelector(".form");
let elList = document.querySelector("#list");

function modeFunc() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

elForm.addEventListener("submit",e=>{
  e.preventDefault();
  
  let {keyImp,keyTitle,keySub,keyNum,skidName,products}= e.target.elements
  let obj={
    id:dataArray.length + 1,
    img:keyImp.value,
    title:keyTitle.value,
    desk:keySub.value,
    prise:keyNum.value,
    sprise:skidName.value,
    kategory :products.value,
    
  }
  dataArray.push(obj);
  renderFunc(dataArray,elList )
  keyImp.value = null;
  keyTitle.value = null;
  
  keyNum.value = null;
  keySub.value = null;
  
})
let dataArray = [
  
  
]; 
function renderFunc(array ,element) {
  element.innerHTML = null;
  
  for (let i = 0; i < array.length; i++) {
    let newLi = document.createElement("li");
    let newkeyImp = document.createElement("img");
    let newkeySub = document.createElement("p");
    let  newkeyNum = document.createElement("p")
    let newkeyTitle = document.createElement("h1");
    let newskidName = document.createElement("p");
    let newproduct = document.createElement("p");
    let newBtn = document.createElement("button");
    let newI = document.createElement("i")
    
    
    newLi.setAttribute("class", "item flex flex-col items-center ml-5  w-[300px] border-[4px]  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-xl");
    newLi.setAttribute("style", "overflow:hidden");
    newkeyImp.setAttribute("class","big__img mb-5 w-[100%]");
    newkeyTitle.setAttribute("class","bolt px-5 text-2xl mb-4");
    newkeySub.setAttribute("class","text-center mb-5 px-5 text-xl text-slate-600");
    newkeyNum.setAttribute("class"," text-xl text-green-400");
    newskidName.setAttribute("class","mb-4 text-yellow-500 text-2xl");
    newproduct.setAttribute("class","border  bg-sky-500 text-white font-[500] m-2 rounded-lg h-[35px] px-12 text-xl mb-4")
    newI.setAttribute("class", "fa-solid fa-trash")
    
    newBtn.setAttribute("class", "bg-rose-700 px-6 text-yellow-500 rounded-2xl mb-4");
    newBtn.setAttribute("id","delBtn");
    newBtn.dataset.todoId = array[i].id;
    
    
    newBtn.addEventListener("click", evt =>{
      array.textContent = null
      evt.preventDefault()
      let todoBtn = evt.target.dataset.todoId;
      let foundIndex = dataArray.findIndex((item) => item.id ==todoBtn);
      dataArray.splice(foundIndex,1);
      renderFunc(dataArray,elList )
      // element.innerHTML = null;
      
    })  
    
    newkeyImp.src=array[i].img;
    newkeyTitle.textContent = array[i].title;
    newkeySub.textContent = array[i].desk;
    newkeyNum.textContent = array[i].prise;
    newskidName.textContent = array[i].sprise;
    newproduct.textContent = array[i].kategory;
    newBtn.textContent = "delete";
    // console.log(newkeyTitle);
    newLi.append(newkeyImp);
    newLi.append(newkeyTitle);
    newLi.append(newkeySub);
    newLi.append(newkeyNum);
    newLi.append(newskidName);
    newLi.append(newproduct);
    newLi.append(newBtn);
    element.append(newLi);
    
  }
}

renderFunc(dataArray,elList )
