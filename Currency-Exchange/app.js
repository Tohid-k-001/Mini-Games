const BASE_URL= "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const btn = document.getElementById("#btn");

const dropdowns = document.querySelectorAll(".dropdown select");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");
// for (code in countryList) {
//     console.log(code, countryList[code]);
// }

// option inside the dropdown
for(let select of dropdowns){

    // currCode in countryList
    for(currCode in countryList){
        let newOption = document.createElement("option");

        // showing value and the actual value of the option
        newOption.innerText = currCode;
        newOption.value = currCode;

        // displaying beside the dropdown
        if(select.name == "from" && currCode == "USD"){
            newOption.selected = true;
        }
        if(select.name == "to" && currCode == "INR"){
            newOption.selected = true;
        }

        select.appendChild(newOption);
    }

    select.addEventListener("change", (evt)=> {
        updateflag(evt.target);
    })
}

const updateflag = (element) => {
    let currCode = element.value;
    // console.log(currCode);
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;

    // we have attribute element and the image is in parent container of element
    element.parentElement.querySelector("img").src = newSrc;
}


btn.addEventListener("click", async (evt) => {

    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;

    console.log(amountVal);

    if (amountVal === "" || amountVal === "0") {
        amount.value = "1";
        amountVal = 1;
    }

    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data);

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amountVal * rate;

    msg.innerText =
        `${amountVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
});

