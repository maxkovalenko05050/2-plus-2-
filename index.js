let input1 = document.createElement ('input');
let input2 = document.createElement ('input');
let button = document.createElement ('button');
let field1 = null;
let field2 = null;
  
button.innerHTML = 'Посчитать';
input1.type = 'text';
input2.type = 'text';

let div1 = document.createElement('div');
div1.className = "error message";
div1.innerHTML = "Это не число";
let div2 = document.createElement('div');
div2.className = "error message";
div2.innerHTML = "Это не число!!!";
let result = document.createElement ('div');
result.id = "result";

window.addEventListener('load', (event)=> {
  document.body.appendChild(input1);
  document.body.appendChild(document.createElement("br"));  
  document.body.appendChild(input2);
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(button);
});

button.onclick = function(){
  field1 = input1.value;
  field2 = input2.value;
  if(isNaN(+field1)){
    input1.after(div1);
}else{
  div1.remove();
}
if(isNaN(+field2)){
  input2.after(div2);
}else{
  div2.remove();
}
if(isNaN(+field1) == false || isNaN(+field2) == false){
  result.innerHTML = `${+field1 + +field2}`;
  button.after(result);
}else{
  result.remove();
   }
}
