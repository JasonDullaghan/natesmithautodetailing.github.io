// function initializeSection(containerId, title, prices, included, additional, images) {
//     fetch("html/templates/reusableSplitView.html")
//         .then(response => response.text())
//         .then(html => {
//             const container = document.getElementById(containerId);
//             container.innerHTML = html;

//             // Set title and text
//             container.querySelector(".reusable-section-title").textContent = title;
//             container.querySelector(".reusable-section-prices").textContent = prices;
//             container.querySelector(".reusable-section-included").textContent = included;
//             container.querySelector(".reusable-section-additional").textContent = additional;

//             // Add images to slideshow
//             const slideshowContainer = container.querySelector(".reusable-slideshow-container");
//             images.forEach((src, index) => {
//                 let img = document.createElement("img");
//                 img.src = src;
//                 if (index === 0) img.classList.add("active");
//                 slideshowContainer.appendChild(img);
//             });

//             // Start Slideshow
//             startSlideshow(slideshowContainer);
//         });
// }

// function startSlideshow(container) {
//     let images = container.getElementsByTagName("img");
//     let currentIndex = 0;

//     setInterval(() => {
//         images[currentIndex].classList.remove("active");
//         currentIndex = (currentIndex + 1) % images.length;
//         images[currentIndex].classList.add("active");
//     }, 3000);
// }

function initializeSection(containerId, title, prices, included, additional, images) {
    fetch("html/templates/reusableSplitView.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch template: ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            const container = document.getElementById(containerId);
            if (!container) {
                throw new Error(`Container with id ${containerId} not found`);
            }
            container.innerHTML = html;

            // Set title
            const titleElement = container.querySelector(".reusable-section-title");
            if (titleElement) {
                titleElement.textContent = title;
            } else {
                console.error("Title element not found");
            }

            // Set prices
            const pricesList = container.querySelector(".reusable-section-prices-list");
            if (pricesList) {
                prices.forEach(price => {
                    let li = document.createElement("li");
                    li.textContent = price;
                    pricesList.appendChild(li);
                });
            } else {
                console.error("Prices list element not found");
            }

            // Set included items
            const includedElement = container.querySelector(".reusable-section-included-list");
            if (includedElement) {
                includedElement.textContent = included.join(", ");
            } else {
                console.error("Included list element not found");
            }

            // Set additional text
            const additionalElement = container.querySelector(".reusable-section-additional");
            if (additionalElement) {
                additionalElement.textContent = additional;
            } else {
                console.error("Additional text element not found");
            }

            // Add images to slideshow
            const slideshowContainer = container.querySelector(".reusable-slideshow-container");
            if (slideshowContainer) {
                images.forEach((src, index) => {
                    let img = document.createElement("img");
                    img.src = src;
                    if (index === 0) img.classList.add("active");
                    slideshowContainer.appendChild(img);
                });

                // Start Slideshow
                startSlideshow(slideshowContainer);
            } else {
                console.error("Slideshow container element not found");
            }
        })
        .catch(error => {
            console.error("Error initializing section:", error);
        });
}

function startSlideshow(container) {
    let images = container.getElementsByTagName("img");
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }, 3000);
}