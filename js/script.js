const products = [
    {
        id: 1,
        name: "Galaxy Glitter Slime",
        price: "$9.99",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Ocean Breeze Slime",
        price: "$12.99",
        image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Sunset Swirl Slime",
        price: "$10.99",
        image: "https://images.unsplash.com/photo-1618531544265-f4938363858c?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Minty Fresh Slime",
        price: "$8.99",
        image: "https://images.unsplash.com/photo-1516533075015-a3838414c3cb?auto=format&fit=crop&w=500&q=80"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const contactForm = document.getElementById('contact-form');

    // Inject products
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <button class="btn" onclick="alert('Added ${product.name} to cart!')">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Handle contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = e.target.querySelectorAll('input')[0].value;
        alert(`Thank you, ${name}! Your message has been sent.`);
        contactForm.reset();
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});