
export function filtering() {
    const opnModal = document.querySelector(".find");

    opnModal.insertAdjacentHTML("afterBegin", `
  <button class="btn btn-outline-light dropdown-toggle sortBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" id ="docFind" href="#">Doctor</a></li>
    <li><a class="dropdown-item" id ="urgFind" href="#">Urgency</a></li>
    <li><a class="dropdown-item" id ="purFind" href="#">Purpose</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" id = "conFind" href="#">Condition</a></li>
  </ul>
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder = "... input parameters here ...">
  <button class="btn btn-outline-light" type="button" id="findBtn">Find</button>`
    )

    dropdownFilter();
}



function dropdownFilter() {
    const findParams = document.querySelectorAll(".dropdown-item");
    const sortBtn = document.querySelector(".sortBtn");
    
    findParams.forEach(item => {
        item.addEventListener('click', function() {     //change dropdown
            sortBtn.textContent = item.textContent;
            // console.log(sortBtn.textContent);
        });
    })
return sortBtn.textContent
}


// function finder() {
//     const findArea = document.querySelector(".form-control");
//
// }


// renderAllCards(data)
// const cards = data;
//   const filteredData = data.filter(item => item.doctor === "therapist");
//             console.log(data);