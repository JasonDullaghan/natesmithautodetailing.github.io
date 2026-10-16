document.addEventListener("DOMContentLoaded", function () {
    const imageData = {
        ceramicCoatings: [
            "./images/ceramicCoating/ceramicCoatingJ1.jpg", "./images/ceramicCoating/ceramicCoatingJ2.jpg",
            "./images/ceramicCoating/ceramicCoatingJ3.jpg", "./images/ceramicCoating/ceramicCoatingJ3.jpg",
        ],
        windowTints: [
            "./images/windowTint/windowTint1.jpg", "./images/windowTint/windowTint2.jpg",
            "./images/windowTint/windowTint3.PNG", "./images/windowTint/windowTint4.jpg",
        ],
        detailings: [
            "./images/detailing/detailing7.PNG", "./images/detailing/detailing2.jpg",
            "./images/detailing/detailing3.jpg", "./images/detailing/detailing4.PNG",
        ]
    };

    populateGallery("ceramic-gallery", imageData.ceramicCoatings);
    populateGallery("window-gallery", imageData.windowTints);
    populateGallery("detailing-gallery", imageData.detailings);
});

const script = document.createElement("script");
script.src = "js/galleryLib.js";
document.head.appendChild(script);
