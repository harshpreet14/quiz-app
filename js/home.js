// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var startSolvingBtn = document.getElementById('startBtn');

// Get the element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
startSolvingBtn.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Array to store selected topics
var selectedTopics = [];

// Add click event to all tag elements
// Add click event to all tag elements
document.querySelectorAll('.tag').forEach(item => {
    item.addEventListener('click', function() {
        // Get the data-topic attribute
        var topic = this.getAttribute('data-topic');

        // Check if the topic is already selected
        var index = selectedTopics.indexOf(topic);
        if (index !== -1) {
            // Topic is already selected, remove it from the array
            selectedTopics.splice(index, 1);
            this.style.backgroundColor = ''; // Reset background color
        } else {
            // Topic is not selected, add it to the array
            selectedTopics.push(topic);
            this.style.backgroundColor = 'yellow'; // Change background color to yellow
        }

        // Save the updated selected topics to localStorage
        saveSelectedTopics();
    });
});

// Get the 'Start Quiz' button
var startQuizBtn = document.getElementById('startQuiz');

// Start the quiz with selected topics when the 'Start Quiz' button is clicked
startQuizBtn.addEventListener('click', function() {
    // Check if at least 5 topics have been selected
    if (selectedTopics.length >= 5) {
        // Proceed to start the quiz with selected topics
        startQuiz(selectedTopics);
    } else {
        // Alert the user that they need to select more topics
        alert('Please select at least 5 topics to start the quiz.');
    }
});

// Function to start the quiz with selected topics
function startQuiz(topics) {
    // Logic to start the quiz with the selected topics
    // You'll need to implement this function based on how your quiz is set up
    console.log('Starting quiz with topics:', topics);
    // Close the modal
    modal.style.display = 'none';
}

// ... previous code ...

// Save the selected topics to localStorage
function saveSelectedTopics() {
    localStorage.setItem('selectedTopics', JSON.stringify(selectedTopics));
}

// Load the selected topics from localStorage
function loadSelectedTopics() {
    const topics = localStorage.getItem('selectedTopics');
    return topics ? JSON.parse(topics) : [];
}

// Restore selected topics on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load selected topics from localStorage
    selectedTopics = loadSelectedTopics();
    
    // Update the UI to reflect the restored selected topics
    document.querySelectorAll('.tag').forEach(item => {
        const topic = item.getAttribute('data-topic');
        if (selectedTopics.includes(topic)) {
            item.classList.add('selected');
        }
    });
});

// Add click event to all tag elements
document.querySelectorAll('.tag').forEach(item => {
    item.addEventListener('click', function() {
        // ... existing toggle logic ...

        // Save the updated selected topics to localStorage
        saveSelectedTopics();
    });
});

// ... existing 'Start Quiz' button event listener ...

// Function to start the quiz with selected topics
function startQuiz(topics) {
    // ... existing logic to start the quiz ...
    
    // Additionally, you may want to clear selected topics from localStorage
    // if you want to reset the state after starting the quiz.
    // localStorage.removeItem('selectedTopics');
}
