import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import VisitDentist from "../classes/VisitDentist.js";



export function getDoctorObj(obj) {
    let visit;

    switch (obj.doctor) {
        case "cardiologist" :
            visit = new VisitCardiologist(obj.doctor, obj.firstname, obj.lastname, obj.purpose, obj.description, obj.urgency, obj.visitDate, obj.id,  obj.vascularPressure, obj.bodyMassIndex, obj.cardioDiseases, obj.age, );
            break

        case "therapist" :
            visit = new VisitTherapist(obj.doctor, obj.firstname, obj.lastname, obj.purpose, obj.description,  obj.urgency, obj.visitDate, obj.id, obj.age );
            break

        case "dentist" :
            visit = new VisitDentist(obj.doctor, obj.firstname, obj.lastname, obj.purpose, obj.description,  obj.urgency, obj.visitDate, obj.id, obj.lastVisit);
            break
    }
    return visit
}

export function clearTable() {
    const element = document.querySelectorAll(".cards li");
    element.forEach(el => {
        el.parentNode.removeChild(el);
    })
}

export function clearFind() {
    document.querySelector(".input-group.find").remove();

}



