document.getElementById('scrollButton_header').addEventListener('click', () => {
    document.getElementById('targetSection_header').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
})

document.getElementById('scrollButton_delive').addEventListener('click', () => {
    document.getElementById('targetSection_header').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
})

document.getElementById('scrollButton_contact').addEventListener('click', () => {
    document.getElementById('targetSection_contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
})

const urlParams = new URLSearchParams(window.location.search);
const scrollTo = urlParams.get('scrollTo');

if (scrollTo) {
    const targetElement = document.getElementById(scrollTo);
    if (targetElement) {
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}