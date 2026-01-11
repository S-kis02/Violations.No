let statements = document.getElementById("statements")
let table = document.getElementById("table")
let table_statements = document.getElementById("table_statements")
let form_violation = document.getElementById("form_violation")
let number = document.getElementById("number")
let violation = document.getElementById("violation")
let p_number = document.getElementById("p_number")
let p_violation = document.getElementById("p_violation")
let btnSend = document.getElementById("btnSend")
let btnAdd = document.getElementById("btnAdd")

let statementsArr = JSON.parse(localStorage.getItem('statementsArr')) || []

statements.style.display = 'none'

function loadStatementsToTable() {
    const dataRows = table_statements.querySelectorAll('tr:not(:first-child)')
    dataRows.forEach(row => row.remove())
    
    statementsArr.forEach(statement => {
        let tr = document.createElement("tr")
        table_statements.append(tr)

        let td_time = document.createElement("td")
        td_time.textContent = statement.time
        tr.append(td_time)

        let td_number = document.createElement("td")
        td_number.textContent = statement.number
        tr.append(td_number)

        let td_status = document.createElement("td")
        td_status.textContent = statement.status
        tr.append(td_status)
    })
}

loadStatementsToTable()

function applicationTime() {
    const now = new Date()
    const day = String(now.getDate()).padStart(2, '0')
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    
    return `${day}.${month}.${year} ${hours}:${minutes}`
}

function Status() {
    return "Новое"
}

function validation() {
    let flag = true

    if (number.value.trim() === "") {
        number.style.backgroundColor = "rgb(255, 151, 151)"
        p_number.textContent = 'Введите номер автомобиля'
        flag = false
    } else {
        number.style.backgroundColor = ""
        p_number.textContent = ""
    }

    if (violation.value.trim() === "") {
        violation.style.backgroundColor = "rgb(255, 151, 151)"
        p_violation.textContent = 'Опишите ситуацию'
        flag = false
    } else {
        violation.style.backgroundColor = ""
        p_violation.textContent = ""
    }

    return flag
}

btnExit.addEventListener('click', (e) => {
    statements.style.display = 'none'
    table.style.display = ''
})

btnSend.addEventListener('click', (e) => {
    e.preventDefault()

    if (validation()) {
        const currentTime = applicationTime()
        const currentStatus = Status()

        let statement = {
            time: currentTime,
            number: number.value.trim(),
            violation: violation.value.trim(),
            status: currentStatus
        }

        statementsArr.push(statement)
        
        localStorage.setItem('statementsArr', JSON.stringify(statementsArr))

        statements.style.display = 'none'
        table.style.display = ''

        loadStatementsToTable()

        form_violation.reset()
    }   
})

btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    statements.style.display = ''
    table.style.display = 'none'
})