const increase = document.querySelector("#inc");
const decrease = document.querySelector("#dec");
const reset = document.querySelector("#re");
const h1= document.querySelector("#h1");
let num = 0;

increase.onclick = function(){  
  num++;  
  h1.textContent = num;
};

decrease.onclick = function(){
  num--;
  h1.textContent = num;
};

reset.onclick = function(){
  num = 0;
  h1.textContent = 0;
};

