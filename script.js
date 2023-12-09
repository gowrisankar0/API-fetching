const data =document.getElementById("data");
const btn =document.getElementById("btn");




function fetchApi(){

 
   fetch("https://jsonplaceholder.typicode.com/todos")   
   .then((res)=>res.json())
   .then((api)=>data.innerHTML=JSON.stringify(api))
   .catch((err)=>data.innerHTML=err)
}


btn.addEventListener("click",fetchApi)