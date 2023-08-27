
import {getDoctorObj} from "../../helpers/visit_helpers.js";
import {createCard, editCard} from "../../API/api.js";

export default function createVisit(editObj) {
    const searchValue = editObj?.editBtn || 'visit-submit'
    function makeSelector(selector, type="id") {
        const point = type === "id" ? "" : "."
        const selectValue = editObj?.editBtn ?editObj?.editBtn+'-':''
        return `${point}${selectValue}${selector}`
    }
    document.querySelector(`.${searchValue}`).addEventListener("click", function (event) {
        event.preventDefault();
        console.log(makeSelector("specialist", "point"));
        const doctor = document.querySelector(makeSelector("specialist", "point")).textContent;
        const firstname = document.getElementById(makeSelector("first-name")).value;
        const lastname = document.getElementById(makeSelector("last-name")).value;
        const purpose = document.getElementById(makeSelector("purpose")).value;
        const description = document.getElementById(makeSelector("description")).value;
        const urgency = document.querySelector(makeSelector("urgency-btn", "point")).textContent;
        const visitDate = document.getElementById(makeSelector("visit-date")).value;
        const age = document.getElementById(makeSelector("age")).value;
        const cardioDiseases = document.getElementById(makeSelector("cardioDiseases")).value;
        const lastVisit = document.getElementById(makeSelector("last-visit")).value;
        const bodyMassIndex = document.getElementById(makeSelector("bodyMassIndex")).value;
        const vascularPressure = document.getElementById(makeSelector("vascularPressure")).value;
        const selectedDoctor = getDoctorObj({doctor, firstname, lastname, purpose, description, urgency,  visitDate, id:editObj?.id, age, cardioDiseases, lastVisit, bodyMassIndex, vascularPressure});

    if (editObj?.editBtn) {editCard(selectedDoctor)}else {
        validationVoid(selectedDoctor);
    }

    })
}

function validationVoid(selectedDoctor) {
    let formValid = true;
    const formElements = document.querySelectorAll("#purpose, #last-name, #first-name, #visit-date");

    formElements.forEach(element => {
        if (element.required && !element.value.trim()) {
            formValid = false;
            alert(`${element.name || element.id} is required`);
        }
    });

    if (formValid) {
        createCard(selectedDoctor);
    }
}


