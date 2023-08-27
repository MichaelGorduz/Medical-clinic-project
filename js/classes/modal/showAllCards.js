import VisitDentist from "../VisitDentist.js";
import VisitCardiologist from "../VisitCardiologist.js";
import VisitTherapist from "../VisitTherapist.js";

export default function showAllCards(data) {
    data.forEach(card => {
        let cardObject;
        const {
            doctor,
            firstname,
            lastname,
            purpose,
            description,
            urgency,
            visitDate,
            id,
            age,
            cardioDiseases,
            bodyMassIndex,
            vascularPressure,
            lastVisit
        } = card;


        switch (card.doctor) {
            case "dentist":
                cardObject = new VisitDentist(doctor, firstname, lastname, purpose, description, urgency, visitDate, id, lastVisit);
                cardObject.renderCard();
                break;

            case "cardiologist":
                cardObject = new VisitCardiologist(doctor, firstname, lastname, purpose, description, urgency, visitDate, id, age, cardioDiseases, bodyMassIndex, vascularPressure);
                cardObject.renderCard();
                break;

            case "therapist":
                cardObject = new VisitTherapist(doctor, firstname, lastname, purpose, description, visitDate, urgency, id, age);
                cardObject.renderCard();
                break;
        }
    });
}