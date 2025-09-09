  // Simple smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    console.log('Navigating to:', this.getAttribute('href'));
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Add some interactivity to product cards
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function() {
                console.log('Product clicked:', this.querySelector('.product-title').textContent);

                // Here you could add functionality to open a product detail modal
            });
        });

        // Add interactivity to category cards
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Category clicked:', this.querySelector('h3').textContent);
                // Here you could add functionality to filter products by category
            });
        });