const panel = document.querySelector(".panel");
const panel_li = panel.querySelectorAll("li");
const btnPanel = document.querySelectorAll(".btns li");


btnPanel.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        add(btnPanel, index);
        play(panel_li, index);
        panel.style.marginLeft = `${-100*index}%`;
    })
})

function add(list, idx){
    for(let idx of list) idx.classList.remove("on");
    list[idx].classList.add("on")
}

function play(list, idx){
    for(let el of list) el.querySelector("video").pause();
    list[idx].querySelector("video").play();
}
