import Visit from "./Visits.js";

class VisitDentist extends Visit {
    constructor(doctor, firstname, lastname, purpose, description,urgency, visitDate, id, lastVisit) {
        super(doctor, firstname, lastname, purpose, description,  urgency, id);
        this.visitDate = visitDate;
        this.lastVisit = lastVisit;

    }


    renderCard() {
        const content = `<ul class="list-group list-group-flush">
            <li class="list-group-item">Visit Date:<span class ="card-items">${this.visitDate}</span></li>
            <li class="list-group-item">Last visit:<span class ="card-items">${this.lastVisit}</span></li>
        </ul>`;
        super.renderCard(content)
    }
}
export default VisitDentist