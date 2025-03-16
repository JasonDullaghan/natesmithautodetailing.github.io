document.addEventListener("DOMContentLoaded", function () {
    const sedans = [
        "images/blurryLogo.png", "images/blurryLogo.png", "images/blurryLogo.png", "images/blurryLogo.png",
        "images/blurryLogo.png", "images/blurryLogo.png", 
    ];
    function populateGallery(sectionId, images) {
        const gallery = document.getElementById(sectionId);
        if (!gallery) return;

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Sedan Image";
            gallery.appendChild(img);
        });

        gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
    }

    populateGallery("sedan-gallery", sedans);
});