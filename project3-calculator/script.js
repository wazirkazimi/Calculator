(function () {
   let screen=document.querySelector('.screen');
   let btns=document.querySelectorAll('.btn');
   let clrscr=document.querySelector('.clr');
   let res=document.querySelector('.res');
   let onlyone=document.querySelector('.del');

  btns.forEach(function(btns){
    btns.addEventListener('click',function(e){
        let value= e.target.dataset.num;
        screen.value += value;
    })
  });
res.addEventListener('click',function(e){
   if(screen.value === '') {
   screen.value="Null";
   }else{
    screen.value=eval(screen.value);
   }
})
clrscr.addEventListener('click' ,function(e){
    screen.value="";
})
onlyone.addEventListener('click' ,function(e){
    screen.value=screen.value.slice(0, -1)
})

})();