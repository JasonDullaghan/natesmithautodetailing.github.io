document.addEventListener("DOMContentLoaded", function () {
    const imageData = {
        ceramicCoatings: [
            "images/CeramicCoating/ceramicCoatingJ1.jpg", "images/CeramicCoating/ceramicCoatingJ2.jpg",
            "images/CeramicCoating/ceramicCoatingJ3.jpg", "images/CeramicCoating/ceramicCoatingJ4.jpg",
        ],
        windowTints: [
            "images/windowTint/windowTint1.png", "images/windowTint/windowTint2.png",
            "images/windowTint/windowTint3.png", "images/windowTint/windowTint4.png",
        ],
        detailings: [
            "images/detailing/detailing7.png", "images/detailing/detailing2.png",
            "images/detailing/detailing3.png", "images/detailing/detailing4.png",
        ]
    };

    populateGallery("ceramic-gallery", imageData.ceramicCoatings);
    populateGallery("window-gallery", imageData.windowTints);
    populateGallery("detailing-gallery", imageData.detailings);
});

const script = document.createElement("script");
script.src = "js/galleryLib.js";
document.head.appendChild(script);
