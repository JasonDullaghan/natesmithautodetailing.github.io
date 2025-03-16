document.addEventListener("DOMContentLoaded", function () {
    const trucks = [
        "images/goodCarPhoto.jpg", "images/goodCarPhoto.jpg", "images/goodCarPhoto.jpg", "images/goodCarPhoto.jpg",
    ];
    function populateGallery(sectionId, images) {
        const gallery = document.getElementById(sectionId);
        if (!gallery) return;

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Truck Image";
            gallery.appendChild(img);
        });

        gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
    }

    populateGallery("truck-gallery", trucks);
});