function populateGallery(sectionId, images) {
    const gallery = document.getElementById(sectionId);
    if (!gallery) return;

    images.forEach(imgSrc => {
        const img = document.createElement("img");
        img.src = imgSrc;
        img.alt = "Gallery Image";
        gallery.appendChild(img);
    });

    adjustGridLayout(gallery, images.length);
}

function adjustGridLayout(gallery, imageCount) {
    let columns = 4;

    if (imageCount < 4) {
        gallery.style.justifyContent = "center";
    }

    gallery.style.gridTemplateColumns = `repeat(4, 1fr)`;
}
