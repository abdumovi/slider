let elSlider = document.querySelector('.slider');
let elItem = document.querySelectorAll('.item');

function start(elItem){
  for(let i = 0; i < elItem.length; i++){
    
    if(elItem[i].id == 0){
      elItem[i].style.left = "100%";
    }
  }
}
// style.zIndex = "1";
start(elItem);
let itemset = 0;
function left(){
  itemset += 1;
  for(let i = 0; i < elItem.length-1; i++){
    elItem[0].style.left = "-100%";
    if(elItem[i].id == 1){
      elItem[i].id = 2;
      elItem[i].style.left ="-100%";
    }
    if(elItem[i].id == 0){
      elItem[i].id = 1;
      elItem[i].style.left = "0";
      break;
    }
  }
  if(itemset == elItem.length){
    for(let i = 0; i < elItem.length; i++){
      elItem[i].id = 0;
      elItem[0].style.left = "0";
      itemset = 0;
    }
  }
 
}
