document.addEventListener("DOMContentLoaded", function () {
    const detailingImages = [
        "images/detailing/detailing7.png", "images/detailing/detailing2.png",
        "images/detailing/detailing3.png", "images/detailing/detailing4.png",
        "images/detailing/detailing5.png", "images/detailing/detailing6.png",
        "images/detailing/detailing1.png", "images/detailing/detailing8.png",
        "images/detailing/detailing9.png", "images/detailing/detailing10.png",
        "images/detailing/detailing11.png", "images/detailing/detailing12.png",
        "images/detailing/detailing13.png", "images/detailing/detailing14.png",
        "images/detailing/detailing15.png", "images/detailing/detailing16.png"
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