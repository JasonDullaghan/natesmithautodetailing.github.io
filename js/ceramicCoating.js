document.addEventListener("DOMContentLoaded", function () {
    const ceramicCoatingImgs = [
        "./images/ceramicCoating/ceramicCoatingJ1.jpg", "./images/ceramicCoating/ceramicCoatingJ2.jpg",
        "./images/ceramicCoating/ceramicCoatingJ3.jpg", "./images/ceramicCoating/ceramicCoatingJ4.jpg",
        "./images/ceramicCoating/ceramicCoatingJ5.jpg", "./images/ceramicCoating/ceramicCoatingJ6.jpg",
        "./images/ceramicCoating/ceramicCoatingJ7.jpg", "./images/ceramicCoating/ceramicCoating1.PNG",
        "./images/ceramicCoating/ceramicCoating2.PNG", "./images/ceramicCoating/ceramicCoating3.PNG",
        "./images/ceramicCoating/ceramicCoating4.PNG", "./images/ceramicCoating/ceramicCoating5.PNG",
        "./images/ceramicCoating/ceramicCoating6.PNG", "./images/ceramicCoating/ceramicCoating7.PNG",
        "./images/ceramicCoating/ceramicCoating8.PNG", "./images/pricing/platinumExteriorCorvette.PNG"
    ];
    function populateGallery(sectionId, images) {
        const gallery = document.getElementById(sectionId);
        if (!gallery) return;

        images.forEach(imgSrc => {
            const img = document.createElement("img");
            img.src = imgSrc;
            img.alt = "Ceramic Coating Image";
            gallery.appendChild(img);
        });

        gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
    }

    populateGallery("ceramic-coating-gallery", ceramicCoatingImgs);
});