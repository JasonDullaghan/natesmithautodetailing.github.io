document.addEventListener("DOMContentLoaded", function () {
    const imageData = {
        sedans: [
            "images/blurryLogo.png", "images/blurryLogo.png", "images/blurryLogo.png", "images/blurryLogo.png",
            "images/blurryLogo.png", "images/blurryLogo.png", 
        ],
        trucks: [
            "images/goodCarPhoto.jpg", "images/goodCarPhoto.jpg", "images/goodCarPhoto.jpg", "images/goodCarPhoto.jpg",
        ],
        boats: [
            "images/pricing/boat1.jpg", "images/pricing/boat2.jpg"
        ]
    };

    populateGallery("car-gallery", imageData.sedans);
    populateGallery("truck-gallery", imageData.trucks);
    populateGallery("boat-gallery", imageData.boats);
});

const script = document.createElement("script");
script.src = "js/galleryLib.js";
document.head.appendChild(script);
