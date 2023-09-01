const btnMetro = document.querySelectorAll("#metro nav a");
const boxMetro = document.querySelectorAll("#metro section");

btnMetro.forEach((el, index)=>{
    el.addEventListener("click", (e)=>{
        e.preventDefault();
        add(btnMetro, index);
        add(boxMetro, index);

        setTimeout(()=>{
            active(boxMetro, index);
        }, 0)
    })
})

function add(list, idx){
    for(let idx of list) idx.classList.remove("on");
    list[idx].classList.add("on")
}

function active(list, idx){
    for(let idx of list) idx.classList.remove("active");
    list[idx].classList.add("active");
}