document.addEventListener("DOMContentLoaded", function () {
    const windowTintImages = [
        "images/windowTint/windowTint1.png", "images/windowTint/windowTint2.png",
        "images/windowTint/windowTint3.png", "images/windowTint/windowTint4.png",
        "images/windowTint/windowTint5.png", "images/windowTint/windowTint6.png",
        "images/windowTint/windowTint7.png", "images/windowTint/windowTint8.png"
    ];
    function populateGallery(sectionId, images) {
        const gallery = document.getElementById(sectionId);
        if (!gallery) return;

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Window Tint Image";
            gallery.appendChild(img);
        });

        gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
    }

    populateGallery("window-gallery", windowTintImages);
});