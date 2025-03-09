document.addEventListener("DOMContentLoaded", function () {
    // --- Toggle Menu ---
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("active");
    }
    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

    // --- Draggable Floating Notes ---
    function makeDraggable(noteId) {
        const note = document.getElementById(noteId);
        let isDragging = false;
        let offsetX, offsetY;

        note.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - note.getBoundingClientRect().left;
            offsetY = e.clientY - note.getBoundingClientRect().top;
            note.style.cursor = "grabbing";

            // Prevent interference with cart items while dragging
            document.querySelector(".image-container").style.pointerEvents = "none";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            // Keep note within viewport boundaries
            let maxX = window.innerWidth - note.offsetWidth;
            let maxY = window.innerHeight - note.offsetHeight;
            note.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
            note.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            note.style.cursor = "grab";

            // Re-enable pointer events on the cart after dragging
            document.querySelector(".image-container").style.pointerEvents = "auto";
        });
    }

    // Apply dragging to both notes
    makeDraggable("floating-note");
    makeDraggable("floating-note-instructions");

    // --- Spinning CD Logic ---
    const cd = document.querySelector(".cd");
    const songInfo = document.querySelector(".song-info");
    let isSpinning = true;

    cd.classList.add("spinning");

    cd.addEventListener("click", function () {
        if (isSpinning) {
            cd.classList.remove("spinning"); // Stop spinning
            songInfo.classList.add("visible"); // Show song info
        } else {
            cd.classList.add("spinning"); // Start spinning
            songInfo.classList.remove("visible"); // Hide song info
        }
        isSpinning = !isSpinning;
    });

    // Force CD spinning animation on load
    cd.classList.add("spinning");

    
});
