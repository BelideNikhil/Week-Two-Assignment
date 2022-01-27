const tabButtons=document.querySelectorAll(".btn")

tabButtons.forEach(tabBtn=>{
    tabBtn.addEventListener("click",(e)=>{
        let previous=document.querySelector(".btn-underline-primary")
        previous.classList.remove("btn-underline-primary")
        tabBtn.classList.add("btn-underline-primary")
    })
})

// adding scroll-x when mouse wheel is closed
const scrollTab = document.querySelector(".scroll-tab");
scrollTab.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollTab.scrollLeft += e.deltaY < 0 ? -30 : 30

});