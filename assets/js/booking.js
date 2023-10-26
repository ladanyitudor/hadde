document.getElementById('date').addEventListener('input', function() {
    const selectedDate = this.value;
    // You can fetch available time slots for the selected date from a server
    // For this example, we'll generate some time slots dynamically
    const timeSlots = generateTimeSlots(selectedDate);

    const timeSlotSelect = document.getElementById('time-slot');
    timeSlotSelect.innerHTML = '';

    const defaultOption = document.createElement('option');
    defaultOption.value = "";
    defaultOption.text = "Select a Time Slot";
    timeSlotSelect.appendChild(defaultOption);

    timeSlots.forEach(slot => {
        const option = document.createElement('option');
        option.value = slot;
        option.text = slot;
        timeSlotSelect.appendChild(option);
    });
});

function generateTimeSlots(date) {
    // Replace this with your logic to generate available time slots for the selected date
    // This is just a placeholder example
    const availableTimeSlots = [
        "09:00 AM - 12:00 AM",
        "12:00 AM - 05:00 PM",
        "05:00 PM - 10:00 PM",
        // Add more time slots here
    ];
    return availableTimeSlots;
}