const drawerCloseBtn=document.querySelector("#drawerCloseBtn")
const modalDrawerWrapper=document.querySelector(".modal-drawer-wrapper")

drawerCloseBtn.addEventListener("click",()=>{
    if(modalDrawerWrapper.classList.contains("hideContent")){
        modalDrawerWrapper.classList.remove("hideContent")
    }
})

modalDrawerWrapper.addEventListener("click",(e)=>{
    console.log(e.target)
    if(e.target===modalDrawerWrapper){
        modalDrawerWrapper.classList.add("hideContent")
    }
})

