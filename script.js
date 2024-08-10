// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll event handler for images
function onScroll() {
    const elements = document.querySelectorAll('.image-placeholder');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const elemTop = rect.top;
        const elemBottom = rect.bottom;

        const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        if (isVisible) {
            element.classList.add('active');
        } else {
            element.classList.remove('active');
        }
    });
};

window.addEventListener('scroll', onScroll);

// Modal handling
var modal = document.getElementById("myModal");
var btn = document.getElementById("book-demo-btn");
var btn2 = document.getElementById("book-demo-btn-sidebar");
var span = document.getElementsByClassName("close")[0];

// Open the modal from the navbar
btn.onclick = function() {
    modal.style.display = "block";
}

// Open the modal and hide the sidebar from the sidebar button
btn2.onclick = function() {
    const sidebar = document.querySelector('.sidebar');
    modal.style.display = "block";
    sidebar.style.display = "none";
}

// Close the modal when clicking the close button
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var firstName = document.getElementById("firstName").value;
    var companyName = document.getElementById("companyName").value;
    var plan = document.getElementById("plan").value;

    // Using EmailJS to send the email
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        firstName: firstName,
        companyName: companyName,
        plan: plan
    }).then(function(response) {
        alert('Email successfully sent!');
        modal.style.display = "none";
    }, function(error) {
        alert('Failed to send email. Please try again later.');
    });
});

// Show the sidebar
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "block"; // Correctly show the sidebar
}

// Hide the sidebar
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none"; // Correctly hide the sidebar
}
document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let parms={ 
        firstName :document.getElementById("firstName").value,
        lastName : document.getElementById("lastName").value,
        email : document.getElementById("email").value,
        company: document.getElementById("company").value,
        description : document.getElementById("description").value,
        plan : document.getElementById("plan").value}


    // Using EmailJS to send the email
    emailjs.send("service_jyflhd9", "template_2a6qqdn",parms).then(function(response) {
        
        alert('Email successfully sent!');
        modal.style.display = "none";
    }, function(error) {
        alert('Failed to send email. Please try again later.');
    });
});