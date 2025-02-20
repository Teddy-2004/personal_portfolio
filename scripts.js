
// Toggles the visibility of the menu when called
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// Smooth scroll to a section by its ID
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    toggleMenu(); // Close menu after clicking a link
}

// Handle contact form submission
document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    const formData = new FormData(this); // Collect form data
    formData.append("access_key", "d4050112-57c9-42c0-963d-ae000c9f3fa1"); // API access key for Web3Forms

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
    }).then(res => res.json());

    if (response.success) {
        Swal.fire("Success!", "Message sent successfully", "success"); // Show success alert
        this.reset();
    } else {
        Swal.fire("Error!", "Something went wrong", "error"); // Show error alert
    } try {error}  catch {
        console.error("Error submitting form:", error);
        Swal.fire("Error!", "Failed to send message", "error"); // Handle network errors
    }
});


// Set the footer year dynamically
document.getElementById("year").textContent = new Date().getFullYear();
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    }

    document.addEventListener("DOMContentLoaded", function () {
        const sections = document.querySelectorAll(".section");
    
        const observer = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("show"); // Add 'show' class when visible
                    }
                });
            },
            {
                root: null, // viewport
                threshold: 0.2, // Trigger when 20% of the section is visible
            }
        );
    
        sections.forEach((section) => observer.observe(section));
    });
    