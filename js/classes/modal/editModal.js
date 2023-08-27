import Modal from "./Modal.js";
import dropdownUrgency from "./dropdownUrgency.js"
import dropdownDoctor from "./dropdownDoctor.js"
import createVisit from "./createVisit.js";


export default function editModal(obj) {
  

    const createForm = ` <form id="input-form">
<div class="mb-3 dropdown">
  <button class="btn btn-outline-primary editDoctor edit-specialist  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   ${obj.doctor}
  </button>
  <ul class="dropdown-menu doctors">
    <li><a class="dropdown-item therapist doc" href="#">Therapist</a></li>
    <li><a class="dropdown-item dentist doc" href="#">Dentist</a></li>
    <li><a class="dropdown-item cardiologist doc" href="#">Cardiologist</a></li>
  </ul>
</div>

<div class="mb-3">
  <label for="first-name" class="col-form-label fw-medium">Full Name:</label>
  <div class="name-container" id="fullname">
    <input type="text" class="form-control" id="edit-first-name" value='${obj.firstname}' placeholder="Name" required >
    <input type="text" class="form-control" id="edit-last-name" value='${obj.lastname}' placeholder="Surname" required>
  </div>
</div>

<div class="mb-3">
  <label for="purpose" class="col-form-label fw-medium">Purpose of the visit:</label>
  <input type="text" class="form-control" id="edit-purpose" value='${obj.purpose}' placeholder="purpose" required>
</div>

<div class="mb-3">
  <label for="description" class="col-form-label fw-medium">Description:</label>
  <textarea class="form-control" id="edit-description"  placeholder="patient complaints">${obj.description}</textarea>
</div>

 <div class="mb-3">
      <label for="visit-date" class="col-form-label fw-medium">Visit Date:</label>
        <input type="date" class="form-control" id="visit-date" name="visit-date" placeholder="mm/dd/yyyy" required>
</div>

<div class="additionalFields">

    <div class="mb-3 cardiologist therapist additional-fields">
      <label for="age" class="col-form-label fw-medium">Age:</label>
      <input type="number" min = 1 max = 120 class="form-control" value='${obj.age}' id="edit-age" name="age" placeholder="1-120">
    </div>

    <div class="mb-3 cardiologist additional-fields">
      <label for="cardioDiseases" class="col-form-label fw-medium">Diseases of the Cardiovascular System:</label>
      <input type="text" class="form-control" id="edit-cardioDiseases" value='${obj.cardioDiseases}'  name="cardioDiseases" placeholder="null">
    </div>

    <div class="mb-3 dentist additional-fields">
      <label for="last-visit" class="col-form-label fw-medium">Last visit:</label>
      <input type="date" class="form-control" id="edit-last-visit" name="last-visit" value='${obj.lastVisit}' placeholder="mm/dd/yyyy">
    </div>

    <div class="mb-3 cardiologist additional-fields">
      <label for="bodyMassIndex" class="col-form-label fw-medium">Body Mass Index:</label>
      <input type="number" min=10 max=40 step=0.1 class="form-control" id="edit-bodyMassIndex" value='${obj.bodyMassIndex}' name="bodyMassIndex" placeholder="18.5 ~ 24.9">
    </div>

    <div class="mb-3 cardiologist additional-fields">
      <label for="vascularPressure" class="col-form-label fw-medium">Vascular Pressure:</label>
      <input type="text" class="form-control" id="edit-vascularPressure" value='${obj.vascularPressure}' name="vascularPressure" placeholder="120/70">
    </div>

</div>

<div class="mb-3 dropdown">
  <button class="btn btn-outline-primary urgency-edit edit-urgency-btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   ${obj.urgency}
  </button>
  <ul class="dropdown-menu urgency">
    <li><a class="dropdown-item ordinary urg" href="#">ordinary</a></li>
    <li><a class="dropdown-item priority urg" href="#">priority</a></li>
    <li><a class="dropdown-item urgent urg" href="#">urgent</a></li>
  </ul>
</div>
<div class="edit-actions">
<button class="edit btn btn-primary" type="submit">Submit</button>
<button class="edit-close btn btn-danger" type="button">Close</button>
</div>
</form>`;

const modal = new Modal("Edit Visit", createForm);

modal.createEditForm();

dropdownDoctor("editDoctor");      // change doctor in dropdown menu

dropdownUrgency("urgency-edit");
const editClose = document.querySelector(".edit-close")  
editClose.onclick = function(){
    const editForm = document.querySelector(".editForm");
    editForm.remove()
}   //change urgency in dropdown menu
const editObj = {editBtn:"edit", id:obj.id}
createVisit(editObj);
}