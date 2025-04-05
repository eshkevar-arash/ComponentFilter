let filterList = document.querySelector('.filter__list')
let filterBtn = document.querySelector('.filter-btn')
let overlay = document.querySelector('.overlay')
let filterWrapper = document.querySelector('.filter-wrapper')
let filterHeaderBtn = document.querySelector('.filter__header-btn')
let filterAccordionItems = document.querySelectorAll('.filter__accordion')
filterAccordionItems = Array.from(filterAccordionItems)
console.log(filterAccordionItems)
function closeFilterSide(){
    overlay.classList.remove('overlay--fade')
    filterWrapper.classList.remove('filter-wrapper--show')
}
filterBtn.addEventListener('click', ()=> {
    overlay.classList.add('overlay--fade')
    filterWrapper.classList.add('filter-wrapper--show')
})

overlay.addEventListener('click', closeFilterSide)
filterHeaderBtn.addEventListener('click', closeFilterSide)


let targetBtn = document.getElementById('target-btn')
filterList.addEventListener('click' , event => {
    let targetBtn = event.target.closest('.target-btn')
    if (targetBtn){
        let accordion = targetBtn.parentElement
        filterAccordionItems.forEach(function (li){
            if (li !== accordion){
                li.style.maxHeight = "6.4rem"; // بستن آکوردیون
            }
        })
        if (accordion.style.maxHeight && accordion.style.maxHeight !== "6.4rem") {
            accordion.style.maxHeight = "6.4rem"; // بستن آکوردیون
        } else {
            accordion.style.maxHeight = accordion.scrollHeight + "px"; // باز کردن آکوردیون
        }
    }
})