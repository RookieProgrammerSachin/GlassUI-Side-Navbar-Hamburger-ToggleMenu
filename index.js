function menuToggle(){
    let a = document.querySelectorAll("span");
    a[0].classList.toggle("toggle-1");
    a[1].classList.toggle("toggle-2");
    a[2].classList.toggle("toggle-3");
    document.querySelector(".menu-items").classList.toggle("menu-out");
}

// let btn = document.querySelector(".hamburger-container").addEventListener("click", ()=>{
  // this.classList.add("hmb-active");
// }) 
// function btnActiveClass(){
//   document.querySelector(".hamburger-container").classList.toggle("hmb-active");
// }