// Theme Toggle Functionality
(function() {
    const THEME_KEY = 'quiz-theme';

    // Get saved theme or default to light
    function getSavedTheme() {
        return localStorage.getItem(THEME_KEY) || 'light';
    }

    // Apply theme to document
    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        updateToggleButton(theme);
    }

    // Update toggle button text/icon
    function updateToggleButton(theme) {
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            const icon = toggleBtn.querySelector('.icon');
            const text = toggleBtn.querySelector('.text');
            if (theme === 'dark') {
                if (icon) icon.textContent = '☀';
                if (text) text.textContent = 'Light';
            } else {
                if (icon) icon.textContent = '☾';
                if (text) text.textContent = 'Dark';
            }
        }
    }

    // Toggle between themes
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(THEME_KEY, newTheme);
        applyTheme(newTheme);
    }

    // Initialize theme on page load
    function initTheme() {
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);

        // Add click listener to toggle button
        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleTheme);
        }
    }

    // Apply saved theme immediately (before DOM ready) to prevent flash
    const savedTheme = getSavedTheme();
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
