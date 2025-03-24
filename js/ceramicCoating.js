document.addEventListener("DOMContentLoaded", function () {
    const ceramicCoatingImgs = [
        "./images/CeramicCoating/ceramicCoatingJ1.jpg", "./images/CeramicCoating/ceramicCoatingJ2.jpg",
        "./images/CeramicCoating/ceramicCoatingJ3.jpg", "./images/CeramicCoating/ceramicCoatingJ4.jpg",
        "./images/CeramicCoating/ceramicCoatingJ5.jpg", "./images/CeramicCoating/ceramicCoatingJ6.jpg",
        "./images/CeramicCoating/ceramicCoatingJ7.jpg", "./images/CeramicCoating/ceramicCoating1.PNG",
        "./images/CeramicCoating/ceramicCoating2.PNG", "./images/CeramicCoating/ceramicCoating3.PNG",
        "./images/CeramicCoating/ceramicCoating4.PNG", "./images/CeramicCoating/ceramicCoating5.PNG",
        "./images/CeramicCoating/ceramicCoating6.PNG", "./images/CeramicCoating/ceramicCoating7.PNG",
        "./images/CeramicCoating/ceramicCoating8.PNG", "./images/pricing/platinumExteriorCorvette.PNG"
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