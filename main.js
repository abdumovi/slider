const items = document.querySelectorAll('.item');
const prev = document.querySelector('.last');
const next = document.querySelector('.next');

let index = 0;
prev.addEventListener('click',pervo);
next.addEventListener('click',nexti);
function counter(n){
  for(let i of items){
    i.classList.remove('active');
  }
  items[n].classList.add('active');
}

function pervo(){
  if(index == items.length - 1){
    index = 0;
    counter(index);
  }else{
    index++;
    counter(index);
  }
}
function nexti(){
  if(index == items.length - 1){
    index = 0;
    counter(index);
  }else{
    index++;
    counter(index);
  }
}

