
export default function dropdownDoctor(editSelector) {
    const serchValue = editSelector || 'specialist'
    const additionalFields = document.querySelectorAll('.additional-fields');
    const docList = document.querySelectorAll('.doc');
    const btnDoc = document.querySelector(`.${serchValue}`);

    docList.forEach(item => {
        item.addEventListener('click', function() {     //change dropdown
            btnDoc.textContent = item.textContent;
        });
    })
    

    docList.forEach(item => {
        item.addEventListener('click', function() {
            const selectedClass = item.classList[1];

            additionalFields.forEach(field => {
                field.classList.remove('active');     // Remove "active" class from all fields
                field.querySelector('input').removeAttribute('required');
            });

            additionalFields.forEach(field => {
                if (field.classList.contains(selectedClass)) {
                    field.classList.add('active');               // Add ".active" to fields with the matching class of doctors
                    field.querySelector('input').setAttribute('required', "true");
                }
            });

            docList.forEach(item => {
                item.classList.remove('active');  // Remove ".active" from all items
            });
            item.classList.add('active');         // Add ".active" to the clicked item
            btnDoc.textContent = item.textContent;


        });
    });
    if (editSelector) {
        const findItem = [...docList].find(item =>{console.log(item.textContent, btnDoc.textContent) 
           return item.textContent.trim() === btnDoc.textContent.trim()})
           findItem.click()  
    }
 
}