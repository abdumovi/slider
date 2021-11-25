let elSlider = document.querySelector('.slider');
let elItem = document.querySelectorAll('.item');
let num = 0;
function left(){
  for(let i = num; i < elItem.length; i++){
    elItem[i].style.zIndex = "1";
    num +=1;
    break;
  }
  if(num == elItem.length){
    for(let j = 0; j < elItem.length; j++){
      elItem[j].style.zIndex = "0";
      num = 0;
    }
    console.log(num);
  }
}
let ri = 0;
let nums = [];
for(let i = elItem.length; i > 0; i--){
  nums[nums.length] = elItem[i];
}

function rigiht(){
  for(let i = ri; i < nums.length; i++){
    elItem[i].style.zIndex = "0";
    ri +=1;
    break;
    
  }
  if(ri == nums.length){
    for(let j = 0; j < nums.length; j++){
      nums[j].style.zIndex = "1";
      ri = nums.length;
    }
    console.log(num);
  }
}
