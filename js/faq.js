document.addEventListener("DOMContentLoaded", () => {
    var faqs = document.querySelectorAll(".faq");

    faqs.forEach(function (faq) {
        var question = faq.querySelector(".faq-question");
        var answer = faq.querySelector(".faq-answer");

        question.addEventListener("click", function () {
            faq.classList.toggle("open");

            if (faq.classList.contains("open")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = 0;
            }
        });
    });
})