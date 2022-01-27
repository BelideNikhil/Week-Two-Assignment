const chipContentWrapper=document.querySelector(".chip-content-wrapper")
const chipInput=document.querySelector("#chip-input")
let deleteChipBtn=document.querySelectorAll("#delete-chip-btn")


chipInput.addEventListener("keyup",(e)=>{
    if (e.key === "Enter" || e.keyCode === 13) {
        let inputData=chipInput.value
        if(inputData){
            let newChip=document.createElement("div")
            newChip.setAttribute("class","chip-item")

            newChip.innerHTML=`<button id="delete-chip-btn" class="btn-icon-only">
                                    <i class="fas fa-times"></i>
                               </button>
                               <span class="chip-text">${inputData}</span>`

            chipContentWrapper.insertBefore(newChip,chipInput)
            chipInput.value=""
            // updating the node list
            updateNodeList()
        }
    }
})


function updateNodeList(){
    deleteChipBtn=document.querySelectorAll("#delete-chip-btn")
    deleteChipBtn.forEach(eachChip=>{
        eachChip.addEventListener("click",()=>{
            let toBeDeleted=eachChip.parentElement
            toBeDeleted.remove()
        })
    })
}
updateNodeList()
