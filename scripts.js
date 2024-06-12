function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}


function handleFormSubmit(event) {
    event.preventDefault();
    alert('Форма отправлена');
    event.target.reset();
}

document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
document.getElementById('employeeForm').addEventListener('submit', handleFormSubmit);
document.getElementById('surveyForm').addEventListener('submit', handleFormSubmit);
