import Modal from "./Modal.js";
import dropdownUrgency from "./dropdownUrgency.js";
import dropdownDoctor from "./dropdownDoctor.js";
import createVisit from "./createVisit.js";


export default function initialModal() {

    const createForm = ` <form id="input-form">
    <div class="mb-3 dropdown">
      <button class="btn btn-outline-primary specialist dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        Select&#160 Specialist&#160 &#160
      </button>
      <ul class="dropdown-menu doctors">
        <li><a class="dropdown-item therapist doc" href="#">therapist</a></li>
        <li><a class="dropdown-item dentist doc" href="#">dentist</a></li>
        <li><a class="dropdown-item cardiologist doc" href="#">cardiologist</a></li>
      </ul>
    </div>
    
    <div class="mb-3">
      <label for="first-name" class="col-form-label fw-medium">Full Name:</label>
      <div class="name-container" id="fullname">
        <input type="text" class="form-control" id="first-name" placeholder="Name" required >
        <input type="text" class="form-control" id="last-name" placeholder="Surname" required>
      </div>
    </div>
    
    <div class="mb-3">
      <label for="purpose" class="col-form-label fw-medium">Visit Purpose:</label>
      <input type="text" class="form-control" id="purpose" placeholder="purpose" required>
    </div>
    
    <div class="mb-3">
      <label for="description" class="col-form-label fw-medium">Description:</label>
      <textarea class="form-control" id="description" placeholder="patient complaints"></textarea>
    </div>
    
     <div class="mb-3">
      <label for="visit-date" class="col-form-label fw-medium">Visit Date:</label>
        <input type="date" class="form-control" id="visit-date" name="visit-date" placeholder="mm/dd/yyyy" required>
    </div>
    
    <div class="additionalFields">
    
        <div class="mb-3 cardiologist therapist additional-fields">
          <label for="age" class="col-form-label fw-medium">Age:</label>
          <input type="number" min = 1 max = 120 class="form-control" id="age" name="age" placeholder="1-120">
        </div>
    
        <div class="mb-3 cardiologist additional-fields">
          <label for="cardioDiseases" class="col-form-label fw-medium">Cardiovascular System Diseases:</label>
          <input type="text" class="form-control" id="cardioDiseases" name="cardioDiseases" placeholder="null">
        </div>
    
        <div class="mb-3 dentist additional-fields">
          <label for="last-visit" class="col-form-label fw-medium">Last visit:</label>
          <input type="date" class="form-control" id="last-visit" name="last-visit" placeholder="mm/dd/yyyy">
        </div>
    
        <div class="mb-3 cardiologist additional-fields">
          <label for="bodyMassIndex" class="col-form-label fw-medium">Body Mass Index:</label>
          <input type="number" min=10 max=40 step=0.1 class="form-control" id="bodyMassIndex" name="bodyMassIndex" placeholder="18.5 ~ 24.9">
        </div>
    
        <div class="mb-3 cardiologist additional-fields">
          <label for="vascularPressure" class="col-form-label fw-medium">Vascular Pressure:</label>
          <input type="text" class="form-control" id="vascularPressure" name="vascularPressure" placeholder="120/70">
        </div>
    
    </div>
    
    <div class="mb-3 dropdown">
      <button class="btn btn-outline-primary urgency-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
       Urgency
      </button>
      <ul class="dropdown-menu urgency">
        <li><a class="dropdown-item ordinary urg" href="#">ordinary</a></li>
        <li><a class="dropdown-item priority urg" href="#">priority</a></li>
        <li><a class="dropdown-item urgent urg" href="#">urgent</a></li>
      </ul>
    </div>
    </form>
`;

    const modal = new Modal("Create New Visit", createForm);

    modal.createModal();

    dropdownDoctor();

    dropdownUrgency();

    createVisit();
}