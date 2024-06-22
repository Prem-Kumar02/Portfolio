function scrollToElement(elementId,buttonId){
  const element=document.getElementById(elementId);

  const button=document.getElementById(buttonId);

  element.scrollIntoView({behavior:'smooth'});

}

document.getElementById(1).addEventListener('click',()=>{
  scrollToElement('01', '1');
})

document.getElementById(2).addEventListener('click',()=>{
  scrollToElement('02', '2');
})

document.getElementById(3).addEventListener('click',()=>{
  scrollToElement('03', '3');
})

document.getElementById(4).addEventListener('click',()=>{
  scrollToElement('04', '4');
})





