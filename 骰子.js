let b = document.querySelector(".box")
function myrandom(){
    return Math.random() * 360
}
let button = document.querySelector("button")

// button.onclick = function a(){
//     let dx = myrandom()
//     let dy = myrandom()
//     b.style.transform = `rotateX(${dx}deg) rotateY(${dy}deg)`;
//     // requestAnimationFrame(a) // 每10毫秒调用一次
// }


let zhen
let state = false
function a(){
    let dx = myrandom()
    let dy = myrandom()
    b.style.transform = `rotateX(${dx}deg) rotateY(${dy}deg)`;
    zhen = requestAnimationFrame(a)
}
button.onclick = function(){
    state = !state
    if(state){
        a()
        button.innerText = "停止"
    }
    else{
        cancelAnimationFrame(zhen)
        button.innerText = "开始"
    }
}


