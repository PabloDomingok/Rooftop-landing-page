document.addEventListener('DOMContentLoaded', () => {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();

            const parent = toggle.closest('.dropdown');
            const icon = toggle.querySelector('i');

            
            document.querySelectorAll('.dropdown').forEach(drop => {
                if (drop !== parent) {
                    drop.classList.remove('open');
                    const icon = drop.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                }
            });

            
            parent.classList.toggle('open');
            icon.classList.toggle('fa-chevron-down');
            icon.classList.toggle('fa-chevron-up');
        });
    });

    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown').forEach(drop => {
                drop.classList.remove('open');
                const icon = drop.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });
        }
    });
});
