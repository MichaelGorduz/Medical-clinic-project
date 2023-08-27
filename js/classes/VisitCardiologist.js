import Visit from "./Visits.js";

class VisitCardiologist extends Visit {
    constructor(doctor, firstname, lastname, purpose, description,  urgency, visitDate, id, age, cardioDiseases, bodyMassIndex, vascularPressure) {
        super(doctor, firstname, lastname, purpose, description,  urgency, id);
        this.visitDate = visitDate;
        this.cardioDiseases = cardioDiseases;
        this.bodyMassIndex = bodyMassIndex;
        this.vascularPressure = vascularPressure;
        this.age = age;
    }


    renderCard() {
        const content = `<ul class="list-group list-group-flush hideMore">
                <li class="list-group-item">Visit Date:<span class ="card-items">${this.visitDate}</span></li>
                <li class="list-group-item">Cardiovascular Diseases:<span class ="card-items">${this.cardioDiseases}</span></li>
                <li class="list-group-item">Body Mass Index:<span class ="card-items">${this.bodyMassIndex}</span></li>
                <li class="list-group-item">Vascular Pressure:<span class ="card-items">${this.vascularPressure}</span></li>
        </ul>`;

        super.renderCard(content);
    }
}



export default VisitCardiologist;