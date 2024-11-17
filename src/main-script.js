const headerSection = document.querySelector(".nave-bar");
const activeBtn = document.getElementById("active-btn");
const naveBarItems = document.querySelectorAll(".nav-bar-item");
const contactButtons = document.querySelectorAll(".buttonForContact");
const downloadButtons = document.querySelectorAll(".buttonForDownload");
const topMove = document.querySelector(".for-top-move");


let isClicked = false;
let activeElement = null; // Track the active element

naveBarItems.forEach((x) => {
    x.addEventListener("click", () => {
        if (x.firstChild != activeBtn) {
            isClicked = true;
        } else {
            isClicked = false;
        }


        // Remove the "active" class from the previously active element
        if (activeElement) {
            activeElement.firstChild.classList.remove("active");
        }

        // Add the "active" class to the newly clicked element
        x.firstChild.classList.add("active");

        // Update the active element to the newly clicked one
        activeElement = x;
    });

});

headerSection.addEventListener("mouseover", () => {
    activeBtn.classList.remove("active");
    activeElement.firstChild.classList.remove("active");
});


headerSection.addEventListener("mouseout", () => {
    if (isClicked) {
        activeBtn.classList.remove("active");
    } else {
        activeBtn.classList.add("active");
    }
    activeElement.firstChild.classList.add("active");
});


contactButtons.forEach((element) => {
    element.addEventListener("click", () => {
        const contactSection = document.getElementById("c");
        const contactSectionOffset = contactSection.offsetTop;

        window.scrollTo({
            top: contactSectionOffset,
            behavior: 'smooth'
        });
    })
})


topMove.addEventListener("click", () => {
    const contactSection = document.getElementById("ha");
    const contactSectionOffset = contactSection.offsetTop;

    window.scrollTo({
        top: contactSectionOffset,
        behavior: 'smooth'
    });
})




downloadButtons.forEach((element) => {
    element.addEventListener("click", function () {
        // Replace 'your_pdf_file.pdf' with the actual path to your PDF file
        const pdfUrl = "ItHelpline.pdf";

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'ItHelpline.pdf'; // Set the desired filename

        // Simulate a click on the link to trigger the download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })
});
