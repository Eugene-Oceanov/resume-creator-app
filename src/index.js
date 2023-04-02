import './sass/style.scss'
const toCanvas = require("html2canvas");

const toPDF = require("html2pdf.js")
const PDFopt = {
    margin: 0,
    filename: `resume${new Date(Date.now()).toLocaleString()}.pdf`,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 1 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
}

const person = {
    name: "",
    surname: "",
    birthday: "",
    birthplace: "",
    expirience: [],
    aboutMe: "",
}

const currentTemplate = ""

const nameInp = document.querySelector(".name-input"),
    surnameInp = document.querySelector(".surname-input"),
    imgInp = document.querySelector(".img-input"),
    birthmonthInp = document.querySelector(".birthmonth-input"),
    birthplaceInp = document.querySelector(".birthplace-input"),
    workplaceInp = document.querySelector(".workplace-input"),
    postInp = document.querySelector(".post-input"),
    workFromInp = document.querySelector(".work-from-input"),
    workToInp = document.querySelector(".work-to-input"),
    deskriptionInp = document.querySelector(".description-input"),
    submitBtn = document.querySelector(".submit-btn"),
    saveBtn = document.querySelector(".save-btn");
const resume = document.querySelector(".resume");

submitBtn.onclick = () => {
    resume.innerHTML = `<h1>${nameInp.value} ${surnameInp.value}</h1>
                        <p>Birth info: was born in ${birthmonthInp.value} in ${birthplaceInp.value}</p>
                        <img src="${imgInp.value}">
                        <h2>Expirience</h2>
                        <h3>${workplaceInp.value}</h3>
                        <p>${postInp.value}</p>
                        `
}

saveBtn.onclick = () => {
    toCanvas(resume).then(canvas => {
        canvas.style.width = "816px";
        canvas.style.height = "calc(816px * 1.294117647058824)";
        toPDF().from(canvas).set(PDFopt).save()
    });
}