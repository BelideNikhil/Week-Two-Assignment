const tabButtons=document.querySelectorAll(".btn")
const scrollTab = document.querySelector(".scroll-tab");


tabButtons.forEach(tabBtn=>{
    tabBtn.addEventListener("click",(e)=>{
        let previous=document.querySelector(".btn-underline-primary")
        previous.classList.remove("btn-underline-primary")
        tabBtn.classList.add("btn-underline-primary")
    })
})


tabButtons.forEach(tabBtn=>{
    tabBtn.addEventListener("click",(e)=>{
        let windowWidth=window.innerWidth || document.documentElement.clientWidth
        console.log(windowWidth)

        tabBtn.scrollIntoView()
        let {x:elemPosition}=tabBtn.getBoundingClientRect();
        console.log(elemPosition)
        
        if(windowWidth>1400){
            if( elemPosition<450){
                scrollTab.scrollLeft +=-100
            }else if(elemPosition>950){
                scrollTab.scrollLeft +=100
            }
        }else if(windowWidth>1000 && windowWidth<1400){
            if( elemPosition<350){
                scrollTab.scrollLeft +=-80
            }else if(elemPosition>700){
                scrollTab.scrollLeft +=80
            }
        }
        else if(windowWidth>600 && windowWidth<1000){
            if( elemPosition<250){
                scrollTab.scrollLeft +=-120
            }else if(elemPosition>450){
                scrollTab.scrollLeft +=120
            }
        }else if(windowWidth<600){
            if( elemPosition<150){
                scrollTab.scrollLeft +=-120
            }else if(elemPosition>250){
                scrollTab.scrollLeft +=120
            }
        }
        // e.target.scrollIntoView({ inline: "center" })
    })
})
