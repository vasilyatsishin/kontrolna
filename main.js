window.addEventListener("DOMContentLoaded", function (event) {
    // при нажатті на кнопку міняється її бекграунд
    document.querySelectorAll(".inst-but").forEach(function (e) {
        e.addEventListener("mouseover", function () {
            this.style.background = "rgba(215, 224, 224, 0.721)"
            document.querySelectorAll("option").forEach(function (e) {
                e.style.background = "white" 
            })
        })
        e.addEventListener("mouseout", function () {
        this.style.background = ""  
        })
    })

    let login = /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i
    let password = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    // додавання контенту на сторінку
    document.querySelector(".content").innerHTML = `
    <p class="content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, inventore esse aperiam cum quibusdam!.</p>
    <p class="content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, inventore esse aperiam cum quibusdam!.</p>
    <p class="content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, inventore esse aperiam cum quibusdam!.</p>
    <p class="content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, inventore esse aperiam cum quibusdam!.</p>
    <p class="content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sit, inventore esse aperiam cum quibusdam!.</p>
    `

    // вибір жирності тексту
    function fontWeight(element) {
        let box = document.querySelectorAll(element)
        document.querySelector(".b2").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.fontWeight = "bold"
            })
            document.querySelector(".b2").addEventListener("click", function(){
                box.forEach(function(box){
                    box.style.fontWeight = "normal"
                })
                fontWeight(".content-text")
            })
        })            
    }
    fontWeight(".content-text")

    // стиль тексту
    function fontStyle(element) {
        // курсив
        let box = document.querySelectorAll(element)
        document.querySelector(".b3").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.fontStyle = "italic"
            })
            document.querySelector(".b3").addEventListener("click", function(){
                box.forEach(function(box){
                    box.style.fontStyle = "normal"
                })
                fontStyle(".content-text")
            })
        })

        // підкреслений
        document.querySelector(".b4").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.textDecoration = "underline"
            })
            document.querySelector(".b4").addEventListener("click", function(){
                box.forEach(function(box){
                    box.style.textDecoration = "none"
                })
                fontStyle(".content-text")
            })
        })

        // закреслений
        document.querySelector(".b5").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.textDecoration = "line-through"
            })
            document.querySelector(".b5").addEventListener("click", function(){
                box.forEach(function(box){
                    box.style.textDecoration = "none"
                })
                fontStyle(".content-text")
            })
        })
    }
    fontStyle(".content-text")

    // розташування тексту
    function align(element) {
        let box = document.querySelectorAll(element)
        document.querySelector(".b6").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.textAlign = "left"
            })
        })      

        document.querySelector(".b7").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.textAlign = "center"
            })
        })    

        document.querySelector(".b8").addEventListener("click", function(){
            box.forEach(function(box){
                box.style.textAlign = "right"
            })
        })        
    }
    align(".content-text")

    // опція з назвою шрифту написана цим шрифтом
    function optFamily(element) {
        let box = document.querySelectorAll(element)
        box.forEach(function(box){
            box.style.fontFamily = box.value
        })   
    }
    optFamily("option")

    // шрифт тексту
    function fontFamily(element) {
        let box = document.querySelectorAll(element)
        document.querySelector(".b9").addEventListener("click", function(e){
            const target = e.target
            const family = target.value
            box.forEach(function(box){
                box.style.fontFamily = family
            })
        })     
    }
    fontFamily(".content-text")

    // опція такого самого розміру, як в ній написано
    function optSize(element) {
        let box = document.querySelectorAll(element)
        box.forEach(function(box){
            box.style.fontSize = box.value
        })   
    }
    optSize("option")

    // розмір шрифту на сторінці
    function fontSize(element) {
        let box = document.querySelectorAll(element)
        document.querySelector(".b10").addEventListener("click", function(e){
            const target = e.target
            const size = target.value
            box.forEach(function(box){
                box.style.fontSize = size
            })
        })     
    }
    fontSize(".content-text")

    // колір тексту
    document.querySelector(".b11").addEventListener("click", function () {
        function colorText(element) {
            let color = document.querySelectorAll(".tcc")
            color.forEach(function (color) {
                color.style.background = color.getAttribute("data-color")
            })
            let box = document.querySelector(element)
            box.style.display = "block"
            document.body.style.background = "rgba(0,0,0,.5)"
            color.forEach(function (color) {
                color.addEventListener("click", function () {            
                    let text = document.querySelectorAll(".content-text")
                    text.forEach(function (e) {
                        e.style.color = color.getAttribute("data-color")
                    })
                })
            })

            document.querySelector(".crestik").addEventListener("click", function () {
                box.style.display = "none"
                document.body.style.background = ""
            })
        }   
        colorText(".modalTextColor")
    })

    // бекграунд сторінки
    document.querySelector(".b12").addEventListener("click", function () {
        function background(element) {
            let color = document.querySelectorAll(".bgc")
            color.forEach(function (color) {
                color.style.background = color.getAttribute("data-color")
            })
            let box = document.querySelector(element)
            box.style.display = "block"
            document.body.style.background = "rgba(0,0,0,.5)"
            color.forEach(function (color) {
                color.addEventListener("click", function () {            
                    let text = document.querySelector("main")
                    text.style.background = color.getAttribute("data-color")
                })
            })

            document.querySelector(".crestik2").addEventListener("click", function () {
                document.querySelector(".modalBackground").style.display = "none"
                document.body.style.background = ""
            })

            document.querySelectorAll(".bgButton").forEach(function (e) {
                e.addEventListener("click", function () {
                    document.querySelectorAll(".bgButton").forEach(function (e) {
                        e.style.border = "0"
                        e.style.height = "92%"
                    })
                    e.style.borderTop = "1px solid gray"
                    e.style.borderLeft = "1px solid gray"
                    e.style.borderRight = "1px solid gray"
                    e.style.borderRadius = "2px"
                    e.style.height = "105%"
                })

                document.querySelector(".bg1").addEventListener("click", function () {
                    document.querySelector(".bgcPalitr").style.display = "flex"
                    document.querySelector(".bgcImages").style.display = "none"
                    document.querySelector(".modalBackground").style.height = ""
                })

                document.querySelector(".bg2").addEventListener("click", function () {
                    document.querySelector(".bgcPalitr").style.display = "none"
                    document.querySelector(".bgcImages").style.display = "flex"
                    document.querySelector(".modalBackground").style.height = ""
                    document.querySelectorAll(".bgImage").forEach(function (e) {
                        e.addEventListener("click", function () {
                            document.querySelector("main").style.background = "url" + "(" + e.getAttribute("src") + ")"
                            document.querySelector("main").style.backgroundPosition = "center center"
                        })
                    })
                })

                document.querySelector(".bg3").addEventListener("click", function () {
                    document.querySelector(".bgcPalitr").style.display = "none"
                    document.querySelector(".bgcImages").style.display = "none"
                    document.querySelector(".bgcFiles").style.display = "flex"
                    document.querySelector(".modalBackground").style.height = "25%"
                    document.querySelector(".bgFile").addEventListener("change", function () {
                    console.log( document.querySelector("main").style.backgroundImage = "url" + "( " + document.querySelector(".bgFile").files[0].fullPath + ")");
                    })
                })
            })
        }   
        background(".modalBackground")
    })

    // модальне вікно(реєстрація)
    function register(element) {
        document.querySelector(".bsign").addEventListener("click", function () {
            if(login.test(document.querySelector(".name").value) === true & password.test(document.querySelector(".password").value) === true){
                document.querySelector(element).style.display = "none"
                document.querySelector(".b1").disabled = false
                document.querySelector(".b1").style.background = "white"
                document.body.style.background = ""
                document.querySelector(".b13").parentNode.removeChild(document.querySelector(".b13"))
                let but = document.createElement("button")
                but.className = "inst-but b14"
                document.querySelector(".i5").append(but)
                let a = document.createElement("img")
                a.setAttribute("src", "./icons/unlock.png")
                a.className = "newImg"
                but.append(a)
                document.querySelector(".b14").addEventListener("click", function () {
                    document.querySelector(".modalConfirm").style.display = "flex"
                    document.body.style.background = "rgba(0, 0, 0, .5)"
                    document.querySelector(".mcn").addEventListener("click", function () {
                        document.querySelector(".b1").disabled = true
                        document.querySelector(".b1").style.background = "rgba(0,0,0,.2)"
                        document.querySelector(".register").style.display = "none"
                        document.querySelector(".b14").parentElement.removeChild(document.querySelector(".b14"))
                        let newE= document.createElement("button")
                        newE.className = "inst-but b13"
                        let b = document.createElement("img")
                        b.setAttribute("src", "./icons/lock.png")
                        b.className = "newImg"
                        newE.append(b)
                        document.querySelector(".i5").append(newE)
                        document.querySelector(".modalConfirm").style.display = "none"
                        document.body.style.background = ""
                        register(".register")
                    })
                    document.querySelector(".mcc").addEventListener("click", function(){
                        document.querySelector(".modalConfirm").style.display = "none"
                        document.body.style.background = ""
                    })
                })
            } else if(document.querySelector(".name").value === "" || document.querySelector(".password").value === ""){
                let p = document.createElement("p")
                p.innerHTML = "Value is Empty"
                p.className = "error"
                // document.querySelector(".reg").appendChild(p)
                // document.querySelector(".password").append(p)
                document.querySelector(".bsign").append(p)
                p.style.color = "red"
                p.style.height = "2px"
            }
        })
        document.querySelector(".b13").addEventListener("click", function () {
            document.querySelector(".register").style.display = "flex"
            document.body.style.background = "rgba(0,0,0,.5)"
        })
    }
    register(".register")

//     // перехід на текстАреа
   function move() {
        document.querySelector(".b1").addEventListener("click", function () {
            document.querySelector(".content").style.display = "none"
            document.querySelectorAll(".instruments").forEach(function (e) {
                e.style.display = "none"
            })
            let div = document.createElement("div")
            div.className = "i6"
            document.querySelector("header").appendChild(div)
            for (let i = 0; i <= 3; i++) {
                let button = document.createElement("button")
                button.className = "new-but n" + i
                div.appendChild(button)
                let img = document.createElement("img")
                img.className = "img img" + i
                document.querySelectorAll(".new-but")[i].appendChild(img)
            }
            // збереження value в textarea
            document.querySelector(".n0").addEventListener("click", function () {
                document.querySelector(".content").innerHTML = area.value
                document.querySelector(".content").style.display = "block"
                area.style.display = "none"
                document.querySelectorAll(".instruments").forEach(function (e) {
                    e.style.display = "flex"
                })

                document.querySelectorAll(".img").forEach(function () {
                    document.querySelector(".img").style.display = "flex"
                });
            })

            document.querySelectorAll(".new-but").forEach(function (e) {
                e.addEventListener("mouseover", function () {
                    this.style.background = "rgba(215, 224, 224, 0.721)"
                    document.querySelectorAll("option").forEach(function (e) {
                        e.style.background = "white" 
                    })
                })

                e.addEventListener("mouseout", function () {
                this.style.background = ""  
                })
            })

            function setAttribute(element, attribute) {
                document.querySelector(element).setAttribute("src", attribute)
            }
            setAttribute(".img0", "./icons/save.png")
            setAttribute(".img1", "./icons/table.png")
            setAttribute(".img2", "./icons/number list.png")
            setAttribute(".img3", "./icons/list.png")

            let area = document.createElement("textarea")
            area.className = "tarea"
            document.querySelector("main").appendChild(area)
            area.value = document.querySelector(".content").innerHTML

           function save() {
                document.querySelector(".n0").addEventListener("click", function () {
                    document.querySelector(".content").innerHTML = area.value
                    document.querySelector(".content").style.display = ""
                    area.parentNode.removeChild(area)
                    document.querySelectorAll(".instruments").forEach(function (e) {
                        e.style.display = "flex"
                    })
                    document.querySelector("header").removeChild(document.querySelector(".i6"))
                    document.querySelectorAll(".img").forEach(function () {
                        document.querySelector(".img").style.display = "flex"
                    });
                })
                document.querySelector(".n1").addEventListener("click", function(){
                    document.querySelector(".modalTable").style.display = "flex"
                    document.body.style.background = "rgba(0, 0, 0, .5)"
                    document.querySelector(".tarea").style.background = "rgba(0, 0, 0, .01)"
                    document.querySelector(".mtcrestik").addEventListener("click", function () {
                        document.querySelector(".modalTable").style.display = "none"
                        document.body.style.background = ""
                        document.querySelector(".tarea").style.background = ""
                        document.querySelector(".counttr").value = null
                        document.querySelector(".countd").value = null
                        document.querySelector(".widthtd").value = null
                        document.querySelector(".heighttd").value = null
                        document.querySelector(".widthbor").value = null
                    })
                    document.querySelector(".reset").addEventListener("click", function () {
                        document.querySelector(".counttr").value = null
                        document.querySelector(".countd").value = null
                        document.querySelector(".widthtd").value = null
                        document.querySelector(".heighttd").value = null
                        document.querySelector(".widthbor").value = null
                        document.querySelectorAll(".tstyle")[0].setAttribute("selected", true)
                        document.querySelectorAll(".tcolor")[0].setAttribute("selected", true)
                    })
                    document.querySelector(".create").addEventListener("click", function(){
                        let row = document.querySelector(".counttr").value
                        let columns = document.querySelector(".countd").value
                        let width = document.querySelector(".widthtd").value
                        let height = document.querySelector(".heighttd").value
                        let wBorder = document.querySelector(".widthbor").value
                        let area = document.querySelector(".tarea")
                        let colorBorder = document.querySelector(".borcolor").value
                        let styleBorder = document.querySelector(".borstyle").value
                        let table = document.createElement("table")
                        for (let i = 0; i < row; i++) {
                            const tr = table.insertRow();
                            for (let j = 0; j < columns; j++) {
                              const td = tr.insertCell();
                              td.appendChild(document.createTextNode('TD'));
                              td.style.width = width + "px";
                              td.style.height = height + "px";
                              td.style.border = wBorder + "px" + " " + styleBorder + " " + colorBorder
                            }
                          }
                        table.style.width = width.value + "px"
                        table.style.height = height.value + "px"
                        table.style.border = wBorder + "px" + " " + styleBorder + " " + colorBorder
                        let div = document.createElement("div")
                        div.append(table)
                        area.append(div)
                        area.value = area.value + div.innerHTML
                    })
                })

                document.querySelector(".n2").addEventListener("click", function () {
                    document.querySelector(".createListOi").style.display = "flex"
                    document.body.style.background = "rgba(0, 0, 0, .5)"
                    document.querySelector(".tarea").style.background = "rgba(0, 0, 0, .01)"
                    document.querySelector(".crestikListOi").addEventListener("click", function () {
                        document.querySelector(".createListOi").style.display = "none"
                        document.body.style.background= ""
                    })
                    document.querySelector(".createlistOI").addEventListener("click", function () {
                        function list() {
                            let countli = document.querySelector(".licountinpOi")
                            let newUl = document.createElement("ul")
                            let div = document.createElement("div")
                            div.append(newUl)
                            for (let i = 0; i < countli.value; i++) {
                                let li = document.createElement("li")
                                li.innerHTML = "li"
                                li.setAttribute("type", document.querySelector(".markTypeOI").value)
                                newUl.append(li)
                            }
                            document.querySelector(".tarea").value = document.querySelector(".tarea").value + div.innerHTML
                        }
                        list()
                    })
                    document.querySelector(".resetUI").addEventListener("click", function () {
                        document.querySelector(".licountinp").value = null
                        document.querySelectorAll(".uitype")[0].setAttribute("selected", true)
                    })
                })

                document.querySelector(".n3").addEventListener("click", function () {
                    document.querySelector(".createList").style.display = "flex"
                    document.body.style.background = "rgba(0, 0, 0, .5)"
                    document.querySelector(".tarea").style.background = "rgba(0, 0, 0, .01)"
                    document.querySelector(".crestikList").addEventListener("click", function () {
                        document.querySelector(".createList").style.display = "none"
                        document.body.style.background= ""
                    })
                    document.querySelector(".createlist").addEventListener("click", function () {
                        function list() {
                            let countli = document.querySelector(".licountinp")
                            let newUl = document.createElement("ul")
                            let div = document.createElement("div")
                            div.append(newUl)
                            for (let i = 0; i < countli.value; i++) {
                                let li = document.createElement("li")
                                li.innerHTML = "li"
                                li.style.listStyleType = document.querySelector(".markType").value
                                newUl.append(li)
                            }
                            document.querySelector(".tarea").value = document.querySelector(".tarea").value + div.innerHTML
                        }
                        list()
                    })
                    document.querySelector(".resetUI").addEventListener("click", function () {
                        document.querySelector(".licountinp").value = null
                        document.querySelectorAll(".uitype")[0].setAttribute("selected", true)
                    })
                })
           }
           save()
        })
   }
   move()
})


// document.querySelectorAll(".inst-but").forEach(function (e) {
//     e.addEventListener("click", function () {
//         console.log(this);
//     })
// })