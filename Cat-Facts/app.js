const url="https://meowfacts.herokuapp.com/";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#getFact");
// let promise= fetch(url);
// console.log(promise);


// here we arer directly creating the async functions berfpre that we are creating a functions caz we were not using the api

// const getFacts = async () => {
//     console.log("Getting data ......");
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     factPara.innerText = data.data[0];
//     console.log(data.data[0]);
// }


// Usin promise chaining .then() 
function getFacts() {
    return new Promise ((resolve, reject) => {
        console.log("Getting data ......");
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            factPara.innerText = data.data[0];
            console.log(data.data[0]);
            resolve();
        })
        .catch((error) => {
            console.error("Error fetching facts:", error); 
            reject(error);
        });
    })
}


btn.addEventListener("click", getFacts);