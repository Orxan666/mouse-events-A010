"use strict";
// let txt=document.querySelector(".text")
// let btn=document.querySelector("#btn")
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Event	Nə vaxt işləyir
// click	Sol düyməyə basıb buraxanda
// dblclick	İki dəfə tez-tez klik edəndə
// mousedown	Düyməyə basılan an
// mouseup	Düymə buraxılan an
// mousemove	Mouse element üzərində hərəkət edəndə
// mouseenter	Mouse elementin üzərinə girəndə
// mouseleave	Mouse elementdən çıxanda
// mouseover / mouseout	enter/leave-ə oxşar, amma daxili elementlərdə də işləyir
// contextmenu	Sağ klik
// wheel	Mouse təkəri fırlananda
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// btn.addEventListener("click",function(e){
//     alert(txt.value)
// })


// const box=document.querySelector(".box")
// box.addEventListener("mouseenter",()=>box.style.background="red")
// box.addEventListener("mouseleave",()=>box.style.background="transparent")

//   const circle = document.getElementById("circle");
//   document.addEventListener("mousemove", (e) => {
//     circle.style.left = e.clientX + "px";
//     circle.style.top = e.clientY + "px";
//   });


//   document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
// });

const closeBtn=document.querySelector("#chat .nav-ico")
const chat=document.querySelector("#chat")
const openBox=document.querySelector(".open-box")
closeBtn.addEventListener("click",function(){
    chat.classList.add("d-none")
})


openBox.addEventListener("click",function(){
    chat.classList.remove("d-none")
})




