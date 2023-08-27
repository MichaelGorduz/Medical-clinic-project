import {getDoctorObj} from "../helpers/visit_helpers.js";
import initialModal from "../classes/modal/initialModal.js";
import showAllCards from "../classes/modal/showAllCards.js";


function getHeaders() {
    const token = `3532d1ce-ef58-47ab-b12e-a58870181b18`;
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
}

export function deleteCard(id) {
  return  fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
  method: 'DELETE',
  headers: getHeaders()
});
}

export function createCard(selectedDoctor) {
    const modal = document.getElementById("createCardModal");
    const background = document.querySelector(".modal-backdrop");

    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(selectedDoctor)
    })
        .then(response => response.json())
        .then(response => {
            getDoctorObj(response).renderCard();
            if(modal) {
                modal.remove();
                background.remove();
                initialModal();
            }
        })
}


    export function editCard (card) {
        const editForm = document.querySelector(".editForm")
    fetch(`https://ajax.test-danit.com/api/v2/cards/${card.id}`, {
  method: 'PUT',
  headers: getHeaders(),
  body: JSON.stringify(card)
})

  .then(response => {
    if (response.ok) {
     return response.json()
    } else {
        throw new Error ("card not found");
    }}).then(data => {
       editForm.remove()
       const updateCard = document.querySelector(`[data-id="${data.id}"]`);
       updateCard.remove()
       
       getDoctorObj(data).renderCard()

    }).catch((e)=> {
        console.log(e.message);

  }) 
}

export function getAllCards() {

    fetch("https://ajax.test-danit.com/api/v2/cards", {
        method: "GET",
        headers: getHeaders()
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            showAllCards(data)
        })
}
