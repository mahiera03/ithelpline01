const instagram = document.querySelector(".instagram");
instagram.addEventListener("click", function () {
    const pdfUrl = "https://www.instagram.com/ithelpline?igsh=djdkM3R0Yzc1Yjdy";
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = "blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});