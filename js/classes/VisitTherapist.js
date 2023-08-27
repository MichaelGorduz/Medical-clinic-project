import Visit from "./Visits.js";

class VisitTherapist extends Visit {
    constructor(doctor, firstname, lastname, purpose, description,  urgency, visitDate, id, age) {
        super(doctor, firstname, lastname, purpose, description,  urgency, id);
        this.visitDate = visitDate;
        this.age = age;
    }
    renderCard() {
        const content = `<ul class="list-group list-group-flush">
        <li class="list-group-item">Visit Date:<span class ="card-items">${this.visitDate}</span></li>
        <li class="list-group-item">Age:<span class ="card-items">${this.age}</span></li>
        </ul>`
        super.renderCard(content);
    }
}
export default VisitTherapist