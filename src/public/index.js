var elementosVideosTutoriais = document.querySelectorAll('.tutoriais');

elementosVideosTutoriais.forEach(function(tutoriais) {
    tutoriais.addEventListener('click', function() {
        tutoriais.classList.toggle('active');
    });
});
