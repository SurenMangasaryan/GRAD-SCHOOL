let navLi2 = document.querySelector(".nav-li-2");
let myDiv = document.querySelector(".nav-li2-div");

navLi2.addEventListener("mouseenter", () => {
    myDiv.style.opacity = "1";
    myDiv.style.transition = "all .5s linear";
})
myDiv.addEventListener("mouseleave", () => {
    myDiv.style.transition = "all .5s linear";
    myDiv.style.opacity = "0";
})


let boxes = document.querySelectorAll(".box");
let text;
let link;

for (let i = 0; i < boxes.length; i++) {
    text = document.createElement("p");
    text.setAttribute("class", "section1-box-text")
    link = document.createElement("p");
    link.setAttribute("class", "section1-box-link")

    boxes[i].addEventListener("mouseenter", () => {
        boxes[i].style.background = "orange";
        boxes[i].style.padding = "40px 60px";
        boxes[i].style.transition = "all .5s linear";

        if (boxes[i].classList.contains("section1-box1")) {
            text.innerHTML = "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
            boxes[i].append(text);
            link.innerHTML = "MORE INFO.";
            boxes[i].append(link);
        }
        if (boxes[i].classList.contains("section1-box2")) {
            text.innerHTML = "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
            boxes[i].append(text);
            link.innerHTML = "DETAILS";
            boxes[i].append(link);
        }
        if (boxes[i].classList.contains("section1-box3")) {
            text.innerHTML = "Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero."
            boxes[i].append(text);
            link.innerHTML = "READ MORE";
            boxes[i].append(link);
        }
    })

    boxes[i].addEventListener("mouseleave", () => {
        text.innerHTML = "";
        link.innerHTML = "";
        boxes[i].style.padding = "20px 60px";
        boxes[i].style.transition = "all .5s linear";
        boxes[i].style.background = "rgba(22, 34, 57, 0.95)";
    })
}

let item = document.querySelectorAll(".item");
let content = document.querySelectorAll(".content");

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("click", () => {
        for (let i = 0; i < item.length; i++) {
            item[i].classList.remove("active");
        }
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove("active");
        }

        item[i].classList.add("active");
        content[i].classList.add("active");
    })
}


let btn = document.querySelector(".s3-btn");
let inps = document.querySelectorAll(".s3-inputs");

btn.addEventListener("click", function () {
    for (let i = 0; i < inps.length; i++) {
        if (inps[i].name == "name") {
            inps[i].focus();
        }
    }
})

let radios = document.querySelectorAll(".manual-btn");
for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
        for (let i = 0; i < radios.length; i++) {
            radios[i].classList.remove("active")
        }
        radios[i].classList.add("active")
    })
}

let counter = 1;
setInterval(function () {
    document.getElementById("radio" + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 3000);

let s6Btn = document.querySelector(".s6-btn");
let s6Inps = document.querySelectorAll(".s6-inputs");

s6Btn.addEventListener("click", function () {
    for (let i = 0; i < inps.length; i++) {
        if (s6Inps[i].name == "name") {
            s6Inps[i].focus();
        }
    }
})