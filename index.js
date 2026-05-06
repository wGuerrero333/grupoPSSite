document.addEventListener('click', function(e) {
    const navLink = e.target.closest('a[href^="#"]');
    if (navLink) {
        e.preventDefault();
        const href = navLink.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        return;
    }

    const productCard = e.target.closest('.product-card');
    if (productCard) {
        const title = productCard.querySelector('.product-title')?.textContent;
        if (title) {
            // Navigate to product detail page
        }
        return;
    }

    const categoryCard = e.target.closest('.category-card');
    if (categoryCard) {
        e.preventDefault();
        const category = categoryCard.querySelector('h3')?.textContent;
        if (category) {
            // Filter products by category
        }
    }
});
