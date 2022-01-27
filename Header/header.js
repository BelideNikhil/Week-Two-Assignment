
const navWrapper=document.querySelector("#colpNav")

window.onscroll=()=>collapseFunction()

function collapseFunction(){
    if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
        navWrapper.classList.add("collapsed-nav")
    }else{
        navWrapper.classList.remove("collapsed-nav")
    }
}