document.addEventListener("DOMContentLoaded", function () {
    const windowTintImages = [
        "./images/windowTint/windowTint1.PNG", "./images/windowTint/windowTint2.PNG",
        "./images/windowTint/windowTint3.PNG", "./images/windowTint/windowTint4.png",
        "./images/windowTint/windowTint5.PNG", "./images/windowTint/windowTint6.PNG",
        "./images/windowTint/windowTint7.PNG", "./images/windowTint/windowTint8.PNG"
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