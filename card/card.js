console.log("inside card")

const cardDropdown=document.querySelector(".basic-dropdown")
const cardWrapper=document.querySelector(".card-wrapper")

cardDropdown.addEventListener("change",(e)=>{
    let selectedValue=e.target.value
    cardWrapper.setAttribute("class","card-wrapper")
    // 
    if(selectedValue==="basic"){
        cardWrapper.setAttribute("class","card-wrapper")
    }else if(selectedValue==="title-overlay-img"){
        cardWrapper.setAttribute("class","card-wrapper title-overlay-img")
    }else if(selectedValue==="title-first"){
        cardWrapper.setAttribute("class","card-wrapper card-header-first")
    }else if(selectedValue==="basic w/buttons"){
        cardWrapper.setAttribute("class","card-wrapper card-with-no-icons")
    }else if(selectedValue==="basic w/icons"){
        cardWrapper.setAttribute("class","card-wrapper card-with-no-buttons")
    }else if(selectedValue==="horizontal-card"){
        cardWrapper.setAttribute("class","card-wrapper card-horizontal")
    }
})