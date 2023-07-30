function clockMechanism(){
    const date=new Date();
    const hourHand=document.querySelector(".hour-arm").innerHTML;
    const minuteHand=document.querySelector(".minute-arm").innerHTML;
    const secondHand=document.querySelector(".second-arm").innerHTML;

   if(!hourHand || !secondHand || !minuteHand){
    alert("There is something missing in .html");
    return;
  }

  else{
    const second=date.getSeconds();
    const minute=date.getMinutes();
   const hour=date.getHours();
     
   alert(hour);

  }




}

clockMechanism();