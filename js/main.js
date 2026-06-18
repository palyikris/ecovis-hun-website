
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed.');

    // --- Mobile menu ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Expandable expert descriptions ---
    console.log('Setting up expandable sections...');
    setTimeout(() => {
        console.log('Timeout fired. Searching for expandable sections.');
        const expandableSections = document.querySelectorAll('.expandable-section');
        console.log(`Found ${expandableSections.length} expandable sections.`);

        expandableSections.forEach((section, index) => {
            const content = section.querySelector('.expandable-content');
            const button = section.querySelector('.expand-button');
            console.log(`Processing section ${index + 1}`);

            if (content && button) {
                console.log(`  - Section ${index + 1}: Found content and button.`);
                
                // Always attach the event listener
                button.addEventListener('click', () => {
                    console.log(`Button clicked for section ${index + 1}`);
                    const isExpanded = section.getAttribute('data-expanded') === 'true';

                    if (isExpanded) {
                        section.setAttribute('data-expanded', 'false');
                        content.classList.add('line-clamp-3');
                        button.innerHTML = 'Bővebben <span class="material-icons-outlined text-sm">expand_more</span>';
                    } else {
                        section.setAttribute('data-expanded', 'true');
                        content.classList.remove('line-clamp-3');
                        button.innerHTML = 'Kevesebb <span class="material-icons-outlined text-sm">expand_less</span>';
                    }
                });
                console.log(`  - Section ${index + 1}: Click listener attached.`);

                // Then, check if the button should be visible
                const isOverflowing = content.scrollHeight > content.clientHeight;
                console.log(`  - Section ${index + 1}: scrollHeight=${content.scrollHeight}, clientHeight=${content.clientHeight}, isOverflowing=${isOverflowing}`);

                if (isOverflowing) {
                    button.classList.remove('hidden');
                    console.log(`  - Section ${index + 1}: Button is overflowing, showing it.`);
                } else {
                    button.classList.add('hidden');
                    console.log(`  - Section ${index + 1}: Button is NOT overflowing, hiding it.`);
                }
            } else {
                console.log(`  - Section ${index + 1}: Missing content or button.`);
            }
        });
    }, 150); // Increased delay slightly to be safer
});
