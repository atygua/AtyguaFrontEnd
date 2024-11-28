document.addEventListener('DOMContentLoaded', function () {
    console.log('Script cargado correctamente');

    const scrollContainer = document.querySelector('.team-scroll');
    const scrollSpeed = 2; 

    function appendClones() {
        const children = [...scrollContainer.children];
        children.forEach(child => {
            const clone = child.cloneNode(true);
            scrollContainer.appendChild(clone);
        });
    }
    appendClones();

    function autoScroll() {
        scrollContainer.scrollLeft += scrollSpeed;

        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
            appendClones(); 
        }

        requestAnimationFrame(autoScroll);
    }

    autoScroll();
});
