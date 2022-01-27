const hideBadgeBtn=document.querySelector("#hideBadgeBtn")
const myNotification=document.querySelector("#myNotification")

hideBadgeBtn.addEventListener("click",()=>{
    let showNotif=myNotification.dataset.shownotification
    console.log(myNotification.dataset)
    if(showNotif=="true"){
        myNotification.style.display="none"
        myNotification.setAttribute("data-shownotification","false")
    }
    else{
        myNotification.style.display="block"
        myNotification.setAttribute("data-shownotification","true")
    }
    
})