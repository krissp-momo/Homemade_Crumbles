document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight the current active navigation link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active-link');
        }
    });

    // 2. Add interaction to Cookie Cards on the Menu page
    const cookieCards = document.querySelectorAll('.cookie-card');

    cookieCards.forEach(card => {
        const cookieName = card.querySelector('h3')?.textContent;
        const price = card.querySelector('.price')?.textContent;

        if (cookieName) {
            // Create an "Add to Order" button dynamically
            const orderBtn = document.createElement('button');
            orderBtn.textContent = 'Add to Order';
            orderBtn.classList.add('add-order-btn');
            
            orderBtn.addEventListener('click', () => {
                alert(`Added ${cookieName} (₹${price}) to your order! 🍪`);
            });

            card.appendChild(orderBtn);
        }
    });
});