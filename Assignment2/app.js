const names = ["Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"];

    let current_index = 0;
    const displayedName = document.getElementById("box");

    function getNames(index) {
        displayedName.textContent = names[index];
    }

    function getNext() {
        current_index = (current_index + 1) % names.length;
        getNames(current_index);
    }

    function getPrevious() {
        current_index = (current_index - 1 + names.length) % names.length;
        getNames(current_index);
    }

    // Initial display
    getNames(current_index);