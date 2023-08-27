import { deleteCard, editCard } from "../API/api.js";
import editModal from "./modal/editModal.js";


class Visit {
    constructor(doctor, firstname, lastname, purpose, description,  urgency, id ) {
        this.doctor = doctor;
        this.firstname = firstname;
        this.lastname = lastname;
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.id = id;
        
        
    this.cardWrapper = document.createElement('li')
    
}
showMore() { 
   const moreBtn = this.cardWrapper.querySelector('.moreBtn');
  
  
   moreBtn.addEventListener('click', (event) => {
    const btnContent = moreBtn.textContent;
    const nextElement = moreBtn.nextElementSibling
    if (btnContent.startsWith('Show')) { console.log(moreBtn)
        moreBtn.textContent = 'hide more'
        nextElement.style.display = 'block'
    } else {
        moreBtn.textContent = 'Show more'
        nextElement.style.display = 'none'
    }
   });
}

delete() {
    const deleteBtn = this.cardWrapper.querySelector('.deleteBtn');
  
        deleteBtn.addEventListener('click', () => {
            deleteCard(this.id).then(result => {
                if (result.ok) {
                    this.cardWrapper.remove();
                } else {
                    throw new Error("you are cannot delete card with this id");
                }
            })
        })
}


edit(card) {
    const editBtn = this.cardWrapper.querySelector('#editBtn');
    editBtn.addEventListener('click', (event) => {
        editModal(this)
})
}

statusCard() {
        const cardFooter = document.querySelector(".cardFooter");
        const dateNow = new Date().toISOString().slice(0,10).split('-').join('-');
        if (this.visitDate > dateNow) {
            cardFooter.insertAdjacentHTML("afterbegin", ` <div class="icon-link">
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.51555 7C3.55827 8.4301 3 10.1499 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3V6M12 12L8 8" stroke="#e8a70e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Pending
               </div>` )
        }
        else if (this.visitDate < dateNow) {
            cardFooter.insertAdjacentHTML("afterbegin", `<div class="icon-link">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12.3333L10.4615 15L16 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#1ce80e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Complete
                </div>` )
        }
        else {
            cardFooter.insertAdjacentHTML("afterbegin", `<div class="icon-link">
               <svg fill="#a83295" width="20px" height="20px" viewBox="0 0 24 24" id="notification-alert-left-2"
                 xmlns="http://www.w3.org/2000/svg" className="icon line">
                <path id="primary"
                      d="M11,3.09A5.47,5.47,0,0,1,12,3a6,6,0,0,1,6,6v4l1.38,1.38A2.12,2.12,0,0,1,17.88,18H6.12A2.12,2.12,0,0,1,4,15.88,2.17,2.17,0,0,1,4.19,15"
                      style="fill: none; stroke: rgb(168, 50, 149); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>
                <path id="primary-2" data-name="primary" d="M12,21h0a3,3,0,0,0,3-3H9A3,3,0,0,0,12,21ZM7,6V3"
                      style="fill: none; stroke: rgb(189, 145, 181); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path>
                <line id="primary-upstroke" x1="7.05" y1="10.5" x2="6.95" y2="10.5"
                      style="fill: none; stroke: rgb(189, 145, 181); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.95;"></line>
            </svg>
            Visit today
            </div>`)
        }
    }

renderCard(content) {
    
    const cards = document.querySelector('.cards');
    // this.cardWrapper.id = this.id;

    cards.prepend(this.cardWrapper);
    this.cardWrapper.insertAdjacentHTML("afterbegin", ` 
        <div class="card">
         <div class="card-body">
            <button type="button"  class="btn-close deleteBtn" data-bs-dismiss="card" aria-label="Close"></button>
            <h5 class="card-title">${this.doctor}</h5>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Name:<span class ="card-items">${this.firstname}</span></li>
                <li class="list-group-item">Surname:<span class ="card-items">${this.lastname}</span></li>
                <li class="list-group-item">Visit purpose:<span class ="card-items">${this.purpose}</span></li>
                <li class="list-group-item">Description:<span class ="card-items">${this.description}</span></li>
                <li class="list-group-item col">Urgency:<span class ="card-items">${this.urgency}</span></li>
             </ul>
             <button type="button" class="btn btn-outline-primary btn-sm moreBtn">Show More</button>               
             <div class = "hideMore">${content}</div>
             <div class="cardFooter">
      
               <a id="editBtn" class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-check" viewBox="0 0 16 16">
                  <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
                  <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-12Z"/>
                  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3Z"/>
                  </svg>
                  Edit
               </a>
            </div>
         </div>
     </div>
`)
this.statusCard();
this.showMore();
this.delete();
this.edit();
this.cardWrapper.dataset.id = this.id
}
}


export default Visit
