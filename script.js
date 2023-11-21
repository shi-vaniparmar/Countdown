const endd="13 MARCH 2024 00:00 AM"
 document.getElementById("enddate").innerHTML=endd;
const inputs=document.querySelectorAll("input");
 function clock()
 {
    const end=new Date(endd);
    const now=new Date();
    const diff=(end-now)/1000;
    if(diff<0) return ;
    // console.log(end);
    // console.log(now);
    // console.log(diff);
    //convert days 
 inputs[0].value= Math.floor(diff/3600/24);
// convert min
inputs[1].value= Math.floor(diff/3600)%24;
inputs[2].value=Math.floor(diff/60)%60;
inputs[3].value=Math.floor(diff)%60;



 }
 clock()
 setInterval(
    ()=>{
        clock()
    },1000
 )
 
    
 