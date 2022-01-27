const drawerCloseBtn=document.querySelector("#drawerCloseBtn")
const drawerContainer=document.querySelector(".drawer-container")

drawerCloseBtn.addEventListener("click",()=>{
    if(drawerContainer.classList.contains("hideContent")){
        drawerContainer.classList.remove("hideContent")
    }else{
        drawerContainer.classList.add("hideContent")
    }
})