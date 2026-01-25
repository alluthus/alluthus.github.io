window.onload = function () {
    const openNavDialogButton = document.getElementById('mobileMenu');
    const NavDialog = document.getElementById('navDialog');
    const closeNavDialogButton = document.getElementById('closeNavDialog');

    openNavDialogButton.addEventListener('click', () => {
        NavDialog.showModal(); // Opens mobile nav menu
        document.body.style.overflow = 'hidden';
    });

    closeNavDialogButton.addEventListener('click', () => {
        NavDialog.close(); // Closes mobile nav menu
        document.body.style.overflow = 'visible';
    });
}