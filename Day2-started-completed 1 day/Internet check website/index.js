var i=0


var onlines=()=>{
if(navigator.onLine == true){document.getElementById("pop-up").innerHTML=`
   <div>
       <h4 class="h41"> Your internet is connected</h4>
       <p class="p1">Turn off your internet to see notification</p>
   </div> `
   document.getElementById("pop-up").style.borderColor ="green white white white"
}}
window.addEventListener("offline",
offlines=()=>
     {
        document.getElementById("pop-up").innerHTML=`    

    
<div class="int-disc">
   <h2 class="h21">Connection lost</h2>
   <p> check your internet connection we<br> connection lost for ${i} seconds</p>
   <button class="retry-button" onclick="onlines()" >reconnect now</button>
</div>`

i+=1

document.getElementById("pop-up").style.borderColor ="red white white white"})


var check=()=>{ if(navigator.onLine == true)
    {onlines()}
    else{
    offlines()
    }}
    setInterval(check, 90000)
    










check()
