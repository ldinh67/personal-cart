document.addEventListener("DOMContentLoaded", function () {
    /* --- TOGGLE MENU --- */
    function toggleMenu() {
        const menu = document.getElementById("menu");
        menu.classList.toggle("active");
    }
    document.querySelector(".menu-icon").addEventListener("click", toggleMenu);

    /* --- DRAGGABLE FLOATING NOTES --- */
    function makeDraggable(noteId) {
        const note = document.getElementById(noteId);
        let isDragging = false;
        let offsetX, offsetY;

        note.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - note.getBoundingClientRect().left;
            offsetY = e.clientY - note.getBoundingClientRect().top;
            note.style.cursor = "grabbing";

            document.querySelector(".image-container").style.pointerEvents = "none";
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            let maxX = window.innerWidth - note.offsetWidth;
            let maxY = window.innerHeight - note.offsetHeight;
            note.style.left = `${Math.max(0, Math.min(newX, maxX))}px`;
            note.style.top = `${Math.max(0, Math.min(newY, maxY))}px`;
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
            note.style.cursor = "grab";

            document.querySelector(".image-container").style.pointerEvents = "auto";
        });
    }

    makeDraggable("floating-note");
    makeDraggable("floating-note-instructions");
    makeDraggable("drawing1");
    makeDraggable("drawing2");
    makeDraggable("drawing3");

    /* --- SPINNING CD --- */
    const cd = document.querySelector(".cd");
    const songInfo = document.querySelector(".song-info");
    let isSpinning = true;

    cd.classList.add("spinning");

    cd.addEventListener("click", function () {
        if (isSpinning) {
            cd.classList.remove("spinning");
            songInfo.classList.add("visible");
        } else {
            cd.classList.add("spinning");
            songInfo.classList.remove("visible");
        }
        isSpinning = !isSpinning;
    });

    cd.classList.add("spinning");

});
