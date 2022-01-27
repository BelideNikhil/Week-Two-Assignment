const baselineBtn=document.querySelector("#baselineBtn")
const leadingBtn=document.querySelector("#leadingBtn")
const stackedBtn=document.querySelector("#stackedBtn")

// snackbars
const baselineSnackbar=document.querySelector("#baselineSnackbar")
const leadingSnackbar=document.querySelector("#leadingSnackbar")
const stackedSnackbar=document.querySelector("#stackedSnackbar")

baselineBtn.addEventListener("click",()=>{
    baselineSnackbar.style.display="flex"
    leadingSnackbar.style.display="none"
    stackedSnackbar.style.display="none"
    setTimeout(()=>{
        baselineSnackbar.style.display="none"
    },6000)
})

leadingBtn.addEventListener("click",()=>{
    baselineSnackbar.style.display="none"
    leadingSnackbar.style.display="flex"
    stackedSnackbar.style.display="none"
    setTimeout(()=>{
        leadingSnackbar.style.display="none"
    },6000)
})

stackedBtn.addEventListener("click",()=>{
    baselineSnackbar.style.display="none"
    leadingSnackbar.style.display="none"
    stackedSnackbar.style.display="flex"
    setTimeout(()=>{
        stackedSnackbar.style.display="none"
    },6000)
})