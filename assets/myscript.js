let nav = document.getElementById("mobile-nav-show");
let bar = document.querySelector(".open");
let Xbar = document.querySelector(".close");
function showNav(){ 
    nav.style.display = "block";

    document.body.addEventListener("click",function handler(){
        if(nav.classList.contains("Active")){
            nav.style.display = "none";
            bar.style.display ="block";
            Xbar.style.display ="none";
            nav.classList.remove("Active"); 
            this.removeEventListener("click", handler);
            }else {
            bar.style.display ="none";
            Xbar.style.display ="block";
            nav.classList.toggle("Active");
           }
    });

   
}
let executed = false;
let numInt = [];
const arr = [];
const num = document.querySelectorAll('.num');




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            if(executed == false){
                counter();
            }      
        }
    });
});

num.forEach((el) => observer.observe(el));
function counter(){
    
    executed = true;
    for(i = 0; i < num.length; i++){  
        numInt[i] = parseInt(num[i].innerHTML);
        console.log(numInt[i]);
    } 
    for(i = 0; i < num.length; i++){
        frame(i);
    }

    function frame(elem){
        let count = 0;
        arr[elem] = setInterval(function(){
            if(count > numInt[elem]){                       
                clearInterval(arr[elem]);       
            } else{
                num[elem].innerHTML = count + "+";      
            }
            count++;
        }, 0.1);
     
    }

}


