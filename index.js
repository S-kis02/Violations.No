let btn_avto_go = document.getElementById("btn_avto_go")

let div_regist = document.getElementById("regist")
let FIO = document.getElementById("FIO")
let FIO_err = document.getElementById("FIO_err")
let phone_number = document.getElementById("phone_number")
let phone_number_err = document.getElementById("phone_number_err")
let email = document.getElementById("email")
let email_err = document.getElementById("email_err")
let login_reg = document.getElementById("login_reg")
let login_reg_err = document.getElementById("login_reg_err")
let password_reg = document.getElementById("password_reg")
let password_reg_err = document.getElementById("password_reg_err")
let password_reg_err2 = document.getElementById("password_reg_err2")
let btn_reg = document.getElementById("btn_reg")

let div_avtoris = document.getElementById("avtoris")
let login_avto = document.getElementById("login_avto")
let login_avto_err = document.getElementById("login_avto_err")
let password_avto = document.getElementById("password_avto")
let password_avto_err = document.getElementById("password_avto_err")
let undefined_err = document.getElementById("undefined_err")
let btn_avto = document.getElementById("btn_avto")

let final = document.getElementById("final")

div_avtoris.style.display = "none"

FIO_err.style.display = "none"
phone_number_err.style.display = "none"
email_err.style.display = "none"
login_reg_err.style.display = "none"
password_reg_err.style.display = "none"
password_reg_err2.style.display = "none"

login_avto_err.style.display = "none"
password_avto_err.style.display = "none"
undefined_err.style.display = "none"

final.style.display = "none"

let flug = true

let users = []

if (localStorage.getItem('users')) {
    users = JSON.parse(localStorage.getItem('users'))
}

btn_avto_go.addEventListener('click', (e) => {
    e.preventDefault()
    div_avtoris.style.display = "block"
    div_regist.style.display = "none"
})

function validateRegist() {
    flug = true
    
    if (FIO.value.trim() === "") {
        FIO_err.style.display = "block"
        FIO.style.backgroundColor = "pink"
        flug = false
    }
    else {
        FIO_err.style.display = "none"
        FIO.style.backgroundColor = ""
    }

    if(phone_number.value.trim() === "") {
        phone_number_err.style.display = "block"
        phone_number.style.backgroundColor = "pink"
        flug = false
    }
    else {
        phone_number_err.style.display = "none"
        phone_number.style.backgroundColor = ""
    }

    if(email.value.trim() === "") {
        email_err.style.display = "block"
        email.style.backgroundColor = "pink"
        flug = false
    }
    else {
        email_err.style.display = "none"
        email.style.backgroundColor = ""
    }

    if(login_reg.value.trim() === "") {
        login_reg_err.style.display = "block"
        login_reg.style.backgroundColor = "pink"
        flug = false
    }
    else {
        login_reg_err.style.display = "none"
        login_reg.style.backgroundColor = ""
    }

    if(password_reg.value.trim() === "") {
        password_reg_err.style.display = "block"
        password_reg_err2.style.display = "none"
        password_reg.style.backgroundColor = "pink"
        flug = false
    }
    else if (password_reg.value.length < 6) {
        password_reg_err2.style.display = "block"
        password_reg_err.style.display = "none"
        password_reg.style.backgroundColor = "pink"
        flug = false
    }
    else{
        password_reg_err.style.display = "none"
        password_reg_err2.style.display = "none"
        password_reg.style.backgroundColor = ""
    }
    return flug
}

btn_reg.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateRegist()) {
        let user = {
            FIO: FIO.value,
            phone_number: phone_number.value,
            email: email.value,
            login_reg: login_reg.value,
            password_reg: password_reg.value
        }
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))
    
        console.log(users)

        FIO.value = ""
        phone_number.value = ""
        email.value = ""
        login_reg.value = ""
        password_reg.value = ""
    }
})

function validateAvto() {
    flug = true
    
    if (login_avto.value.trim() === "") {
        login_avto_err.style.display = "block"
        login_avto.style.backgroundColor = "pink"
        flug = false
    }
    else {
        login_avto_err.style.display = "none"
        login_avto.style.backgroundColor = ""
    }

    if(password_avto.value.trim() === "") {
        password_avto_err.style.display = "block"
        password_avto.style.backgroundColor = "pink"
        flug = false
    }
    else {
        password_avto_err.style.display = "none"
        password_avto.style.backgroundColor = ""
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || []

    if (storedUsers.find(user => user.login_reg === login_avto.value.trim() && user.password_reg === password_avto.value.trim())) {
        undefined_err.style.display = "none"
    }
    else if (login_avto.value.trim() !== "" && password_avto.value.trim() !== "") {
        undefined_err.style.display = "block"
        flug = false
    }

    return flug
}

btn_avto.addEventListener('click', (e) => {
    e.preventDefault()
    if (validateAvto()) {
        password_avto.value = ""
        login_avto.value = ""

        div_avtoris.style.display = "none"
        final.style.display = "block"
    }
})