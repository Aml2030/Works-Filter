let switchLi = document.querySelectorAll(".switch li");
let imgs = Array.from(document.images)

switchLi.forEach((li)=>{
    li.addEventListener("click", removeActive);
    li.addEventListener("click", mangaeImgs);
  
});

function removeActive(){
    switchLi.forEach((li)=>{
        li.classList.remove("active") 
        this.classList.add("active")  
    })
}
function mangaeImgs(){
    imgs.forEach((i)=>{
        i.style.display="none"
    })
    document.querySelectorAll(this.dataset.cat).forEach((e)=>{e.style.display = "block"})
}