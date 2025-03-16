document.addEventListener("DOMContentLoaded", function () {
    const boats = [
        "images/pricing/boat1.jpg", "images/pricing/boat2.jpg"
    ];
    function populateGallery(sectionId, images) {
        const gallery = document.getElementById(sectionId);
        if (!gallery) return;

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Boat Image";
            gallery.appendChild(img);
        });

        gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
    }

    populateGallery("boat-gallery", boats);
});