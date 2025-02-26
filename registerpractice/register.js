document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1;
    const addParticipantButton = document.getElementById("addParticipant");
    const participantsFieldset = document.getElementById("participants");
    const registrationForm = document.getElementById("registrationForm");
    const summarySection = document.getElementById("summary");
    const summaryMessage = document.getElementById("summaryMessage");

    // Add participant function
    addParticipantButton.addEventListener("click", () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addParticipantButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
    });

    // Handle form submission
    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();  // Prevent page reload

        const adultName = document.getElementById("adultName").value;
        const totalFee = totalFees();
        const numParticipants = participantCount;

        // Hide form and show summary
        registrationForm.style.display = "none";
        summarySection.classList.remove("hide");
        summaryMessage.innerHTML = `Thank you <strong>${adultName}</strong> for registering. You have registered <strong>${numParticipants}</strong> participant(s) and owe <strong>$${totalFee}</strong> in fees.`;
    });

    // Function to generate participant template
    function participantTemplate(count) {
        return `
        <section class="participant" id="participant${count}">
            <h3>Participant ${count}</h3>
            <label for="name${count}">Name:</label>
            <input type="text" id="name${count}" required>
            
            <label for="age${count}">Age:</label>
            <input type="number" id="age${count}" required>

            <label for="fee${count}">Fee ($):</label>
            <input type="number" id="fee${count}" value="100" required>
        </section>`;
    }

    // Function to calculate total fees
    function totalFees() {
        let feeElements = [...document.querySelectorAll("[id^=fee]")];
        return feeElements.reduce((total, fee) => total + Number(fee.value), 0);
    }
});
