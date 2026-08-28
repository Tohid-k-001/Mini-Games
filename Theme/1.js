console.log("Hello, World!");

let div = document.querySelector("#div");
let body = document.querySelector("body");

let mode = "light";



div.addEventListener("click", function() {
    if (mode === "light") {
        mode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        mode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});

