import { participantTemplate, successTemplate } from "./templates.js";

document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    const form = document.querySelector("form");
    const summaryContainer = document.getElementById("summary-container");
    const summary = document.getElementById("summary");

    function totalFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((total, feeInput) => total + (Number(feeInput.value) || 0), 0);
    }

    function submitForm(event) {
        event.preventDefault(); // Prevent form from reloading the page

        const totalFee = totalFees();
        const adultName = document.getElementById("adult_name").value;

        // Insert the success message inside the summary box
        summary.querySelector("p").innerHTML = successTemplate({
            adultName,
            participantCount: Math.max(1, participantCount),
            totalFees: totalFee
        });

        // ✅ Instead of hiding the form, just show the summary below it
        summaryContainer.classList.remove("hide");
        summaryContainer.classList.add("styled-box");
    }

    addButton.addEventListener("click", () => {
        participantCount++;
        addButton.insertAdjacentHTML("beforebegin", participantTemplate(participantCount));
    });
    
    form.addEventListener("submit", submitForm);
});
