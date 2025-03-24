document.addEventListener("DOMContentLoaded", function () {
    const detailingImages = [
        "./images/detailing/detailing7.PNG", "./images/detailing/detailing2.PNG",
        "./images/detailing/detailing3.PNG", "./images/detailing/detailing4.PNG",
        "./images/detailing/detailing5.PNG", "./images/detailing/detailing6.PNG",
        "./images/detailing/detailing1.PNG", "./images/detailing/detailing8.PNG",
        "./images/detailing/detailing9.PNG", "./images/detailing/detailing10.PNG",
        "./images/detailing/detailing11.PNG", "./images/detailing/detailing12.PNG",
        "./images/detailing/detailing13.PNG", "./images/detailing/detailing14.PNG",
        "./images/detailing/detailing15.PNG", "./images/detailing/detailing16.PNG"
    ];
    function populateGallery(sectionId, images) {
        const gallery = document.getElementById(sectionId);
        if (!gallery) return;

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Detailing Image";
            gallery.appendChild(img);
        });

        gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
    }

    populateGallery("detailing-gallery", detailingImages);
});