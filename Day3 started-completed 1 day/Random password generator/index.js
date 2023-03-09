var slider = document.getElementById("bar");
var output = document.getElementById("demo");
const copybt = document.getElementById("icon")

output.innerHTML = Math.floor(slider.value/3);





function fpass(){
 let xp = slider.value/3
   let rpass=''
   let y=document.getElementById("num")
   let x=document.getElementById("up")
   let z=document.getElementById("lc")
   let s=document.getElementById("sb")
   for( let i=0;i<xp;i++ ){
         if(x.checked){

         let pc2 = alphas()
         rpass+=pc2
 
         i++ 
         }
         if(y.checked){
         let pc = rnum()
         rpass+=pc

         i++ 
         }
         if(z.checked){
         let pc3 = lowercase()
         rpass+=pc3

         i++ 
         }
         if(s.checked){
         let pc4 = specch()
         rpass+=pc4

         i++ 

         }
  }
  
   let result = rpass.slice(0,slider.value/3);
   console.log(xp)
   console.log(result)
  
 console.log(rpass+"hgf")
 

    return result
}

function copyClp(){
   navigator.clipboard.writeText(document.getElementById("form1").value);
   document.getElementById("tick").style.display = "block";
   setTimeout
    (change=()=>{
      document.getElementById("tick").style.display = "none";
   },5000)
   return x
   
   
 }

let generatepassword=()=>{

   document.getElementById("form1").value= fpass();
   document.getElementById("bar").setAttribute("value",'7') ;
   
 };

 function rnum(){
    let rpass =Math.floor((Math.random()*9))
    return rpass
 }

function alphas (){
   let alpha ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let tpass =''
   ralpha = Math.random()*alpha.length+1
   tpass=tpass+ alpha.charAt(ralpha)
   let alphapass= tpass
   return alphapass
}
function lowercase (){
   let alpha1 ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
   let alpha=alpha1.toLowerCase()
   let tpass =''
   ralpha = Math.random()*alpha.length+1
   tpass=tpass+ alpha.charAt(ralpha)
   let alphapass= tpass

   return alphapass
}
function specch (){
   let alpha ='!@#$%^&*()_+|}":?><~+-+*'
   let tpass =''
   ralpha = Math.random()*alpha.length+1
   tpass=tpass+ alpha.charAt(ralpha)
   let alphapass= tpass
   return alphapass
}
let copyfunction=()=>{
}
slider.oninput = function() {
   output.innerHTML = Math.floor(this.value/4);
   generatepassword()
 if (slider.value>10 ){ 
 document.getElementById("form1").style.borderColor="red"

 }
 if (slider.value>20 ){ 
    document.getElementById("form1").style.borderColor="orange"
 }
 if (slider.value>30){ 
 document.getElementById("form1").style.borderColor="blue"
 }
 if (slider.value>40){ 
    document.getElementById("form1").style.borderColor="green" 
 }}

 


generatepassword()
document.getElementById("submit").addEventListener('click',generatepassword)

document.getElementById("icon").addEventListener("click",copyClp)


setInterval(change(),1000)