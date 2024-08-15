// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelector('.modal').classList.add('show');

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
    modal.style.display = "flex";  // Ensure modal is displayed as a flexbox
    modal.style.opacity = "0";     // Start with opacity 0 for the fade-in effect
    modal.style.transform = "translateY(-40%)";  // Initial position for the slide-down effect
    
    // Trigger the transition after a slight delay to allow the browser to recognize the initial state
    setTimeout(function() {
        modal.style.opacity = "1";  // Fade in
        modal.style.transform = "translateY(-10%)";  // Slide down
    }, 10);  // 10ms delay is enough
}

// Open the modal and hide the sidebar from the sidebar button
btn2.onclick = function() {
    const sidebar = document.querySelector('.sidebar');
    const modal = document.querySelector('.modal');  // Ensure this selects your modal

    // Hide the sidebar
    sidebar.style.display = "none";

    // Display the modal with initial hidden styles
    modal.style.display = "flex";  // Ensure modal is displayed as a flexbox
    modal.style.opacity = "0";     // Start with opacity 0 for the fade-in effect
    
    // Trigger the transition after a slight delay to allow the browser to recognize the initial state
    setTimeout(function() {
        modal.style.opacity = "1";  // Fade in
        modal.style.transform = "translateX(-48%)";  // Slide down
    }, 10);  // 10ms delay is enough
}

function toggleDetails() {
    var details = document.getElementById('details');
    var button = document.getElementById('toggleButton');
    if (details.style.maxHeight === '0px' || details.style.maxHeight === '') {
        details.style.maxHeight = details.scrollHeight + 'px';
        button.textContent = 'Less details';
    } else {
        details.style.maxHeight = '0px';
        button.textContent = 'More details';
    }
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
//LEFT TO RIGHT
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with class="text-content", excluding the one with id="home" and those inside .product-box.reverse
    const elements = document.querySelectorAll('.text-content:not(#home):not(.product-box.reverse .text-content)');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                // Optionally, stop observing the element if you only want the animation to happen once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    elements.forEach(element => {
        observer.observe(element);
    });
});
//RIGHT TO LEFT
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with class="text-content", excluding the one with id="home" and those inside .product-box.reverse
    const elements = document.querySelectorAll('.product-box.reverse .text-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-inverse');
                // Optionally, stop observing the element if you only want the animation to happen once
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    elements.forEach(element => {
        observer.observe(element);
    });
});

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
