
const simpleDlgBtn=document.querySelector("#simpleDlgBtn")
const discordDlgBtn=document.querySelector("#discordDlgBtn")
const confirmationBtn=document.querySelector("#confirmationBtn")

const simpleDialog=document.querySelector("[data-simpledialog]")
const eventDialog=document.querySelector("[data-eventdialog]")
const confDialog=document.querySelector("[data-confdialog]")

simpleDlgBtn.addEventListener("click",()=>{
    const verif=simpleDialog.getAttribute("id")
    if(verif){
        simpleDialog.setAttribute("id","")
    }
})

discordDlgBtn.addEventListener("click",()=>{
    const verif=eventDialog.getAttribute("id")
    if(verif=="hide-content"){
        eventDialog.setAttribute("id","")
    }
})
confirmationBtn.addEventListener("click",()=>{
    const verif=confDialog.getAttribute("id")
    if(verif=="hide-content"){
        confDialog.setAttribute("id","")
    }
})


const closeDialogBtn=document.querySelectorAll(".closeDialogBtn")
closeDialogBtn.forEach(eachButton=>{
    eachButton.addEventListener("click",()=>{
        eachButton.parentElement.parentElement.parentElement.setAttribute("id","hide-content") 
    })
})