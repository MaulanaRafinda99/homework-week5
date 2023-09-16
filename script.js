// OOP --> Object Oriented Programming

// Sketsa / Blueprint
class Register {

    constructor(nama, umur, uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

// Database register :
const registerList = [
    new Register("Maulana Rafinda", 25, 100000),
    new Register("Jack Sparrow", 40, 500000),
    new Register("Elizabeth", 28, 800000)
]

// Code will started when page loaded.
window.addEventListener("load", (event) => {

    // DOM --> Document Object Model

    const nameInput = document.getElementById("input-nama")
    const ageInput = document.getElementById("input-umur")
    const moneyInput = document.getElementById("input-uang")

    const submitButton = document.getElementById("submit-button")

    const tableBody = document.getElementById("table-body")

    

    renderData(tableBody);
    // renderdataResume(tablebodyResume);

    submitButton.addEventListener("click", (e) => {

        // Object new Book
        const newRegister = new Register(nameInput.value, ageInput.value, moneyInput.value);


        // Logic for age & money when register :
        if(ageInput.value === 25  || ageInput.value < 25) {
            alert("Mohon maaf, minimal umur untuk mendaftar adalah 25 tahun");
        } else if(moneyInput.value === 100000 || moneyInput.value < 100000) {
            alert("Mohon maaf, minimal Uang Sangu adalah Rp. 100.000,- dan maksimal Rp. 1.000.000,- ");
        } else if (moneyInput.value > 1000000) {
            alert("Mohon maaf, minimal Uang Sangu adalah Rp. 100.000,- dan maksimal Rp. 1.000.000,- ");
        } else {
            alert("Register Succesfully:)")
            registerList.push(newRegister);
            renderData(tableBody);
        }
    })
})

const renderData = (tableBody) => {

    // Reset Data table body
    tableBody.innerHTML = ""

    for (let i = 0; i < registerList.length; i++) {
        let row = tableBody.insertRow(i);

        let currentRegister = registerList[i];

        // td number
        let numberCell = row.insertCell(0)

        // td title
        let nameCell = row.insertCell(1);

        // td author
        let ageCell = row.insertCell(2);

        // td year
        let moneyCell = row.insertCell(3);

        // td action
        let actionCell = row.insertCell(4);

        numberCell.innerHTML = i + 1;
        nameCell.innerHTML = currentRegister.nama;
        ageCell.innerHTML = currentRegister.umur;
        moneyCell.innerHTML = currentRegister.uangSangu;

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("bg-red-500", "rounded-xl", "px-3")
        deleteButton.textContent = "DELETE"
        deleteButton.addEventListener("click", (e) => {

            const rowElement = e.target.parentElement.parentElement
            const titleElement = rowElement.children[1]
            // const titleElement = rowElement.child

            // Hapus melalui array registerList

            registerList.forEach((register, index) => {
                if (register.nama === titleElement.textContent) {
                    // Delete ROW
                    registerList.splice(index, 1);
                }
            })

            // Render
            renderData(tableBody)
        })

        actionCell.append(deleteButton)
    }

}

// Make resume :
const tablebodyResume = document.getElementById("table-body-resume");
const renderdataResume = (tablebodyResume) => {
    function average(umur) {
        const min = Math.min(...umur);
        const max = Math.max(...umur);
        //filter the input array and exclude min and max values
        const filterArr = umur.filter(x => x !== min && x !== max);
        const sum = filterArr.reduce((acc, val) => acc + val, 0);
        return sum / filterArr.length;
    }

    uangSangu = moneyInput.value;
    const avg_money = average(uangSangu);
    console.log(avg_money);

    function average(umur) {
        const min = Math.min(...umur);
        const max = Math.max(...umur);
        //filter the input array and exclude min and max values
        const filterArr = uangSangu.filter(x => x !== min && x !== max);
        const sum = filterArr.reduce((acc, val) => acc + val, 0);
        return sum / filterArr.length;
    }

    umur = ageInput.value;
    const avg = average(umur);
    console.log(avg);

    for (let i = 0; i < registerList.length; i++) {
        let row = tablebodyResume.insertRow(i);
        i = registerList[umur];

        let currentRegister = registerList[i];

        // td number
        let avgAge = row.insertCell(0)

        // td title
        let avgMoney = row.insertCell(1);

        avgAge = currentRegister.average(avgAge);
        avgMoney = currentRegister.average(avgMoney);

    }
}

