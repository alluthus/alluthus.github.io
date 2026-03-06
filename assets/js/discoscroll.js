// Lazy loading for discography entries
(function() {
    const ENTRIES_PER_LOAD = 9;
    let currentlyVisible = 0;
    let allEntries = [];
    let isLoading = false;

    function initLazyLoad() {
        // Get all disco entries
        allEntries = Array.from(document.querySelectorAll('.disco-entry'));
        
        if (allEntries.length === 0) return;

        // Hide all entries initially
        allEntries.forEach(entry => {
            entry.style.display = 'none';
        });

        // Show first batch
        showMoreEntries();

        // Add scroll listener
        window.addEventListener('scroll', handleScroll);
        // Also check on resize in case viewport changes
        window.addEventListener('resize', handleScroll);
    }

    function showMoreEntries() {
        if (isLoading) return;
        
        isLoading = true;
        const endIndex = Math.min(currentlyVisible + ENTRIES_PER_LOAD, allEntries.length);
        
        // Show next batch of entries
        for (let i = currentlyVisible; i < endIndex; i++) {
            allEntries[i].style.display = '';
        }
        
        currentlyVisible = endIndex;
        isLoading = false;
    }

    function handleScroll() {
        // If all entries are already visible, remove listener
        if (currentlyVisible >= allEntries.length) {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
            return;
        }

        // Check if user has scrolled near the bottom
        const scrollPosition = window.innerHeight + window.scrollY;
        const threshold = document.documentElement.scrollHeight - 500; // Load 500px before bottom

        if (scrollPosition >= threshold) {
            showMoreEntries();
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLazyLoad);
    } else {
        initLazyLoad();
    }
})();
