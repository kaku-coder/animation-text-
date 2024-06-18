function breakpoint(){
var h1=document.querySelector("h1")
var h1text= h1.textContent
var splittext =h1text.split("")
let halfvalue=Math.floor(splittext.length/2)

let cullter=""


splittext.forEach(function(elem,idx){
    if (idx<halfvalue) {
        cullter+=`<span class="firstindex">${elem}</span>`
        // console.log(elem);
    }else{
        cullter+=`<span class="secandindex">${elem}</span>`
        // console.log("lol",elem);
    }
})
h1.innerHTML=cullter
console.log(cullter);


}
breakpoint()

gsap.from(".firstindex",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.6,
    stagger:0.15,
    yoyo: true, // Corrected "yoyo-Infinity" to "yoyo: true"
    repeat: -1 
})
gsap.from(".secandindex",{
    y:50,
    opacity:0,
    duration:0.8,
    delay:0.6,
    stagger:-0.15,
    yoyo: true, // Corrected "yoyo-Infinity" to "yoyo: true"
    repeat: -1 
})