// Make a blueprint of code.
class Register {
    constructor(nama,umur,uangSangu) {
        this.nama = nama;
        this.umur = umur;
        this.uangSangu = uangSangu;
    }
}

// Make a database of Pendaftar : 
const registerList = [
    new Register("Maulana Rafinda",22, 1),
    new Register("Jack Sparrow", 40, 1),
    new Register("Elizabeth", 28,1)
]

// Code will started when page loaded.

window.addEventListener("load", (event) => {

    // DOM : Document Object Model on JS

    const nameInput  = document.getElementById("nama");
    const ageInput   = document.getElementById("umur");
    const moneyInput = document.getElementById("uang-sangu");

    const submitButton = document.getElementById("submit-button");
    const tableBody    = document.getElementById("table-body");

    renderData(tableBody);

    submitButton.addEventListener("click", (e) => {
        
        // Object new Pendaftar
        const newRegister = new Register(nameInput.value, ageInput.value, moneyInput.value);

        registerList.push(newRegister);
        renderData(tableBody);

    })

})

const renderData = (tableBody) => {

    // Reset Data Table Body
    tableBody.innerHTML = ""

    for (let i = 0; i < registerList.length; i++) {
        let row = tableBody.insertRow(i);

        let currentRegister = registerList[i];

        // Number of td
        let numberCell = row.insertCell(0);

        // td nama 
        let nameCell   = row.insertCell(1);

        // td umur 
        let ageCell    = row.insertCell(2);

        // td umur 
        let moneyCell = row.insertCell(3);

        numberCell.innerHTML = i + 1;
        nameCell.innerHTML = currentRegister.name;
        ageCell.innerHTML  = currentRegister.age;
        moneyCell = currentRegister.uangSangu;

        renderData(tableBody);
    }
}






