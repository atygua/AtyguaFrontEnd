document.addEventListener('DOMContentLoaded', function () {
    console.log('Script cargado correctamente');

    const scrollContainer = document.querySelector('.team-scroll');
    let scrollSpeed = 2; 
    let resizing = false;
    function appendClones() {
        const existingClones = Array.from(scrollContainer.children).filter((child) => child.classList.contains('clone'));
        existingClones.forEach((clone) => clone.remove());
        const children = [...scrollContainer.children];
        children.forEach(child => {
            const clone = child.cloneNode(true);
            clone.classList.add('clone'); 
            scrollContainer.appendChild(clone);
        });
    }
    function adjustScroll() {
        if (window.innerWidth <= 768) { 
            scrollSpeed = 1;
            scrollContainer.style.gap = "10px";
        } else {
            scrollSpeed = 2; 
            scrollContainer.style.gap = "20px"; 
        }
    }
    function autoScroll() {
        if (!resizing) {
            scrollContainer.scrollLeft += scrollSpeed;
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollContainer.scrollLeft = 0; 
            }
        }
        requestAnimationFrame(autoScroll);
    }
    window.addEventListener('resize', () => {
        resizing = true;
        adjustScroll();
        appendClones(); 
        resizing = false;
    });
    adjustScroll();
    appendClones();
    autoScroll();
});
