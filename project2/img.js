const hr_hand=document.getElementById("hour-hand");
const min_hand=document.getElementById("minute-hand");
const sec_hand=document.getElementById("second-hand");
const val=document.querySelectorAll("#time.value");
const dt=document.getElementById("date");
const options={weekday:'short', month:'short', day:'numeric'};
let indicator=document.getElementById('indicator');
setInterval(()=>{
    let date=new Date();
    dt.firstElementChild.innerText=date.toLocaleDateString;
    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();
},1000);
