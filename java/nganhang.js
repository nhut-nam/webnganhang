window.onload=()=>{

    let input = document.querySelector(".head-menu > :nth-child(2)")
    let search = document.querySelector(".head-menu input")
    input.addEventListener("click", function() {
        search.classList.toggle("dis")
    })

    let phoneInput = document.querySelector(".phone-input div")
    let phoneSearch = document.querySelector(".phone-input input")
    phoneInput.addEventListener("click", function() {
        phoneSearch.classList.toggle("dis")
    })
    // let gt = document.getElementById("gt")
    // let tc = document.getElementById("tc")
    // let tt = document.getElementById("tt")
    const header = document.querySelector("header")
    const h1 = document.getElementById("news")
    const news = document.querySelector(".news")
    const body = document.querySelector("body")
    let head = document.querySelector(".head")
    body.style.paddingTop = head.clientHeight   
    // gt.addEventListener("click", function() {
    //     document.documentElement.scrollTop = 923
    // })

    // tc.addEventListener("click", function() {
    //     document.documentElement.scrollTop = 0

    // })

    // tt.addEventListener("click", function(){
    //     document.documentElement.scrollTop = header.clientHeight + service.clientHeight + 
    //     h1.clientHeight + news.clientHeight + 400
    // })

    let personal = document.getElementById("personal")
    let bussiness = document.getElementById("bussiness")
    personal.addEventListener("click", function(){
        let subMenu = document.querySelectorAll(".sub-menu")
        subMenu[0].classList.toggle("dis")
        console.log(subMenu)
        subMenu[0].classList.toggle("m")
        setTimeout(() => {
            subMenu[0].classList.remove("m")
        }, 300);
        subMenu[1].classList.remove("dis")
    })
    bussiness.addEventListener("click", function(){
        let subMenu = document.querySelectorAll(".sub-menu")
        subMenu[1].classList.toggle("dis")
        subMenu[1].classList.toggle("m")
        setTimeout(() => {
            subMenu[1].classList.remove("m")
        }, 300);
        subMenu[0].classList.remove("dis")
    })

    let p = document.querySelector(".personal")
    let b = document.querySelector(".bussiness")
    p.addEventListener("click", function(){
        let subMenu = document.querySelectorAll(".sub-menu")
        subMenu[2].classList.toggle("dis")
        console.log(subMenu)
        subMenu[2].classList.toggle("m")
        setTimeout(() => {
            subMenu[2].classList.remove("m")
        }, 300);
        subMenu[3].classList.remove("dis")
    })
    b.addEventListener("click", function(){
        let subMenu = document.querySelectorAll(".sub-menu")
        subMenu[3].classList.toggle("dis")
        subMenu[3].classList.toggle("m")
        setTimeout(() => {
            subMenu[3].classList.remove("m")
        }, 300);
        subMenu[2].classList.remove("dis")
    })

    let digits = document.querySelectorAll(".digits > .digit")
    let carsoul = document.getElementById("carsoul")
    let current = 0
    for(let i = 0; i < digits.length; i++)
    {   
        digits[i].addEventListener("click",function() {
            for(let j = 0; j < digits.length; j++)
            {
                digits[j].style.background = 'white'
            }
            let imgWidth = document.querySelector("#carsoul > img").clientWidth
            carsoul.scrollLeft = imgWidth * i
            digits[i].style.background = 'var(--myColor)'
            current = i
        })
    }

    setInterval(function(){
        for(let j = 0; j < digits.length; j++)
        {
            digits[j].style.background = 'white'
        }
        current++
        if(current === digits.length)
        {
            current = 0
        }
        let imgWidth = document.querySelector("#carsoul > img").clientWidth
        carsoul.scrollLeft = imgWidth * current
        digits[current].style.background = 'var(--myColor)'
    },5000)

    let buttonx = document.querySelector(".phone > i")
    let phone =  document.querySelector(".phone-icon")
    let hmenu = document.querySelector(".phone")
    phone.addEventListener("click", function() {
        hmenu.classList.add("ani")
        setTimeout(hmenu.classList.add("dis"), 1000)
    })

    buttonx.addEventListener("click", function() {
        hmenu.classList.remove("dis")
    })


    let btnsServices = document.querySelectorAll(".phone-service button")
    let services = document.querySelectorAll(".service")
    for(let i = 0; i < btnsServices.length; i++)
    {
        btnsServices[i].addEventListener("click", function() {
            for(let j = 0; j < btnsServices.length; j++)
            {
                btnsServices[j].style.background = "white"
                services[j].style.display = "none"
            }
            btnsServices[i].style.background = "var(--myColor)"
            services[i].style.display = "block"
        })
    }

}

function loadNews(){
    fetch("news.json").then(res => res.json()).then(data => {
        let h = ""
        let news = document.querySelector(".news")
        for(let d of data)
        {
            h += `<div class="n">
            <img src="${d.image}" alt="">
            <p>${d.content}</p>
            <p><i>${d.day}/${d.month}/${d.year}</i></p>
        </div>`
        }
        news.insertAdjacentText("afterend", h)
    })
}