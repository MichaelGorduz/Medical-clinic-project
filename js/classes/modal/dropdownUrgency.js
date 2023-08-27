export default function dropdownUrgency(editSelector) {
    const searchSelector = editSelector || 'urgency-btn'
    const prior = document.querySelectorAll('.urg');
    const btnPrior = document.querySelector(`.${searchSelector}`);
    
    prior.forEach(item => {
        item.addEventListener('click', function() {     //change dropdown
            btnPrior.textContent = item.textContent;
        });
    })

}