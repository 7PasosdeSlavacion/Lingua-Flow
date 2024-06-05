function checkAnswers() {
    const forms = document.querySelectorAll('.quiz-form');

    forms.forEach((form, index) => {
        const selectedAnswer = form.querySelector('input[type="radio"]:checked');
        const correctAnswer = form.getAttribute('data-answer');
        const blankSpan = form.previousElementSibling.querySelector('.blank');

        if (selectedAnswer && selectedAnswer.value === correctAnswer) {
            blankSpan.textContent = selectedAnswer.value;
            blankSpan.classList.add('correct');
            blankSpan.classList.remove('incorrect');
        } else {
            blankSpan.textContent = correctAnswer;
            blankSpan.classList.add('incorrect');
            blankSpan.classList.remove('correct');
        }
    });
}
