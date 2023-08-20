window.onload = () => {
    let input = document.querySelector(".head-menu > :nth-child(2)")
    let search = document.querySelector(".head-menu input")
    input.addEventListener("click", function() {
        search.classList.toggle("dis")
    })

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


    // let years = document.querySelectorAll(".carsoul > div")
    // let carsould = document.querySelector(".carsoul")
    // for(let i = 0; i < years.length(); i++)
    // {
    //     years[i].addEventListener("click", function() {
            
    //     })
    // }

    let arrows = document.querySelectorAll(".years > i")
    let year = document.querySelector(".carsoul > div")
    let carsoul = document.querySelector(".carsoul")
    let items = document.querySelectorAll(".items")
    let current = 0
    let yearHeight = year.clientHeight
    console.log(yearHeight)
    arrows.forEach(a => {
        a.addEventListener("click", function() {
            if(a.id === "up")
            {
                if(carsoul.scrollTop != 333)
                {
                    current++
                    if(current == 6)
                    {
                        current = 0
                    }
                    for(let i = 0; i < items.length; i++)
                    {
                        items[i].classList.remove("flex", "opa")
                    }
                    setTimeout(items[current].classList.toggle("flex", "opa"),100)
                    carsoul.scrollTop += yearHeight
                    console.log(carsoul.scrollTop)
                }
            }
            else if(a.id === "down")
            {
                if(carsoul.scrollTop != 0)
                {
                    current--
                    if(current < 0)
                    {
                        current = 5
                    }
                    for(let i = 0; i < items.length; i++)
                    {
                        items[i].classList.remove("flex", "opa")
                    }
                    setTimeout(items[current].classList.toggle("flex", "opa"),100)
                    carsoul.scrollTop -= yearHeight
                }
            }
        })
    })


    loadPerson()

    let btns = document.querySelectorAll(".top button")
    let qtpt = document.querySelector(".qtpt")
    let ls = document.querySelector(".ls")
    for(let i = 0; i < btns.length; i++)
    {
        btns[i].addEventListener("click", function() {
            for(let j = 0; j < btns.length; j++)
                btns[j].style.background = "white"
            btns[i].style.background = "#47b5ff"
            qtpt.style.display = "none"
            ls.style.display = "none"
            if(btns[i].id === "qtpt"){
                qtpt.style.display = "flex"
            }
            else
                ls.style.display = "block"
        })
    }

    let buttons = document.querySelectorAll(".bank button")
    let thongtin = document.querySelectorAll(".thongtin")
    for(let i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener("click", function() {
            thongtin[i].classList.toggle("dis")
        })
    }
}

function loadPerson(){
    fetch("/person.json").then(res => res.json()).then(data => {
        let h = ``
        let btc = document.querySelector(".btc")
        for(let i = 0; i < data.length; i++)
        {
            console.log(data[i].image)
            h += 
            `
                <div class="people">
                    <div class="person">
                        <img src="${data[i].image}" alt=""/>
                    </div>
                    <div class="about-person">
                        <h1 style="font-weight: 700;">${data[i].name}</h1>
                        <p>Chức vụ hiện tại: <b>${data[i].position}</b></p>
                        <h1>Trình độ chuyên môn</h1>
                        <ul>
                            <li>${data[i].info1}</li>
                            <li>${data[i].info2}</li>
                        </ul>
                        <div>Xem tiểu sử</div>
                    </div>
                </div>
                <div class="perform">
            <div class="off-icon"><i class="fa-solid fa-x"></i></div>
            <div>
                <h2>Chức vụ hiện tại: ${data[i].position}</h2>
                <h1>Ông ${data[i].name}</h1>
                <p>${data[i].detail}</p>
            </div>
            <div><img src="${data[i].image}" alt=""></div>

        </div>
            `
        }
        console.log(h)
        btc.innerHTML += h
        let tieusu = document.querySelectorAll(".about-person > :last-child")
        let performs = document.querySelectorAll(".perform")
        let offIcon = document.querySelectorAll(".off-icon")
        for(let i = 0; i < tieusu.length; i++)
        {
            tieusu[i].addEventListener("click", function() {
                for(let i = 0; i < performs.length; i++)
                {
                    performs[i].style.display = "none"
                }
                performs[i].style.display = "flex"
            })
        }

        for(let i = 0; i < offIcon.length; i++)
        {
            offIcon[i].addEventListener("click", function() {
                performs[i].style.display = "none"
            })
        }
    })
}