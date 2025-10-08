// Travel Recommendation Data
const travelData = {
    beaches: [
        {
            name: "Maldives - Paradise Island",
            description: "Crystal clear turquoise waters, white sandy beaches, and overwater bungalows make this a perfect tropical getaway. Experience luxury resorts, world-class diving, and pristine coral reefs.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1540202403-b7abd6747c5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Maldives",
            timezone: "Indian/Maldives"
        },
        {
            name: "Bora Bora - French Polynesia",
            description: "An island paradise surrounded by a lagoon and coral reefs. Famous for its luxury resorts, aqua-colored waters, and Mount Otemanu, an extinct volcano at the center of the island.",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Bora Bora",
            timezone: "Pacific/Tahiti"
        },
        {
            name: "Santorini Beaches - Greece",
            description: "Unique volcanic beaches with dramatic cliffs, whitewashed buildings, and stunning sunsets. Experience the famous red and black sand beaches while enjoying Mediterranean cuisine and local wines.",
            image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Santorini",
            timezone: "Europe/Athens"
        }
    ],
    temples: [
        {
            name: "Angkor Wat - Cambodia",
            description: "The world's largest religious monument and a UNESCO World Heritage Site. This ancient Hindu temple complex showcases incredible Khmer architecture and intricate stone carvings dating back to the 12th century.",
            image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1541580331943-1e36c3fa751e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Siem Reap",
            timezone: "Asia/Phnom_Penh"
        },
        {
            name: "Kiyomizu-dera Temple - Japan",
            description: "A historic Buddhist temple in Kyoto, famous for its wooden stage that juts out 13 meters above the hillside. Offers breathtaking views of the city and is particularly stunning during cherry blossom season.",
            image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Kyoto",
            timezone: "Asia/Tokyo"
        },
        {
            name: "Borobudur Temple - Indonesia",
            description: "A magnificent 9th-century Mahayana Buddhist temple and the world's largest Buddhist monument. This pyramid-like structure features over 2,600 relief panels and 504 Buddha statues.",
            image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1555016875-c7e6fdb1c7cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Yogyakarta",
            timezone: "Asia/Jakarta"
        }
    ],
    countries: [
        {
            name: "Tokyo, Japan",
            description: "A vibrant metropolis where ancient traditions meet cutting-edge technology. Experience bustling street markets, serene temples, world-class cuisine, and the famous Shibuya crossing.",
            image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Tokyo",
            timezone: "Asia/Tokyo"
        },
        {
            name: "Paris, France",
            description: "The City of Light, renowned for its art, fashion, gastronomy, and culture. Visit the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and stroll along the Seine River.",
            image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Paris",
            timezone: "Europe/Paris"
        },
        {
            name: "Sydney, Australia",
            description: "A stunning harbor city famous for its Opera House and Harbour Bridge. Enjoy beautiful beaches, world-class dining, and unique wildlife experiences in this cosmopolitan destination.",
            image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            secondImage: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            location: "Sydney",
            timezone: "Australia/Sydney"
        }
    ]
};

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const searchResults = document.getElementById('searchResults');
const resultsTitle = document.getElementById('resultsTitle');
const resultsContainer = document.getElementById('resultsContainer');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeSearch();
    initializeContactForm();
    addSmoothScrolling();
});

// Navigation functionality
function initializeNavigation() {
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Update active navigation link
    updateActiveNavLink();
}

function updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Search functionality
function initializeSearch() {
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener('click', clearSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
}

function handleSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        showNotification('Please enter a search term', 'warning');
        return;
    }

    const results = searchRecommendations(query);
    displaySearchResults(results, query);
}

function searchRecommendations(query) {
    let results = [];
    let category = '';

    // Determine search category
    if (query.includes('beach') || query.includes('beaches') || query.includes('tropical') || query.includes('ocean') || query.includes('sea')) {
        results = travelData.beaches;
        category = 'beaches';
    } else if (query.includes('temple') || query.includes('temples') || query.includes('spiritual') || query.includes('religious') || query.includes('buddhist') || query.includes('hindu')) {
        results = travelData.temples;
        category = 'temples';
    } else if (query.includes('city') || query.includes('cities') || query.includes('country') || query.includes('countries') || query.includes('urban')) {
        results = travelData.countries;
        category = 'countries';
    } else {
        // Search all categories for specific location names
        const allData = [...travelData.beaches, ...travelData.temples, ...travelData.countries];
        results = allData.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.location.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );
        category = 'mixed';
    }

    return { results, category, query };
}

function displaySearchResults(searchData, originalQuery) {
    const { results, category, query } = searchData;
    
    if (results.length === 0) {
        resultsTitle.textContent = `No results found for "${originalQuery}"`;
        resultsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No destinations found</h3>
                <p>Try searching for "beaches", "temples", or "countries" for better results.</p>
                <div class="search-suggestions">
                    <h4>Popular searches:</h4>
                    <button onclick="searchRecommendations('beaches')" class="suggestion-btn">Beaches</button>
                    <button onclick="searchRecommendations('temples')" class="suggestion-btn">Temples</button>
                    <button onclick="searchRecommendations('countries')" class="suggestion-btn">Cities</button>
                </div>
            </div>
        `;
    } else {
        const categoryName = category === 'mixed' ? 'destinations' : category;
        resultsTitle.textContent = `${results.length} ${categoryName} found for "${originalQuery}"`;
        
        resultsContainer.innerHTML = results.map(item => `
            <div class="result-card">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="result-card-content">
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <div class="card-images">
                        <img src="${item.secondImage}" alt="${item.name} - Additional view" class="secondary-image" loading="lazy">
                    </div>
                    <div class="local-time" id="time-${item.location.replace(/\s+/g, '-').toLowerCase()}">
                        <i class="fas fa-clock"></i> Loading local time...
                    </div>
                    <button class="btn-book" onclick="bookDestination('${item.name}')">
                        <i class="fas fa-calendar-plus"></i> Book Now
                    </button>
                </div>
            </div>
        `).join('');
        
        // Update local times
        results.forEach(item => {
            updateLocalTime(item.location, item.timezone);
        });
    }
    
    searchResults.classList.add('active');
    searchResults.scrollIntoView({ behavior: 'smooth' });
}

function updateLocalTime(location, timezone) {
    try {
        const now = new Date();
        const localTime = now.toLocaleString('en-US', {
            timeZone: timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
        
        const timeElement = document.getElementById(`time-${location.replace(/\s+/g, '-').toLowerCase()}`);
        if (timeElement) {
            timeElement.innerHTML = `<i class="fas fa-clock"></i> Local time: ${localTime}`;
        }
    } catch (error) {
        console.error('Error updating local time:', error);
        const timeElement = document.getElementById(`time-${location.replace(/\s+/g, '-').toLowerCase()}`);
        if (timeElement) {
            timeElement.innerHTML = `<i class="fas fa-clock"></i> Time zone: ${timezone}`;
        }
    }
}

function clearSearch() {
    if (searchInput) {
        searchInput.value = '';
    }
    if (searchResults) {
        searchResults.classList.remove('active');
    }
    if (resultsContainer) {
        resultsContainer.innerHTML = '';
    }
    showNotification('Search cleared', 'success');
}

// Global function for featured destination exploration
window.searchRecommendations = function(category) {
    if (searchInput) {
        searchInput.value = category;
    }
    const results = searchRecommendations(category);
    displaySearchResults(results, category);
};

// Booking functionality
function bookDestination(destinationName) {
    showNotification(`Booking initiated for ${destinationName}! Redirecting to booking page...`, 'success');
    
    // Simulate booking process
    setTimeout(() => {
        alert(`Thank you for your interest in ${destinationName}! In a real application, this would redirect to a booking page with available packages, dates, and pricing information.`);
    }, 1500);
}

// Contact form functionality
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactFormSubmission);
    }
}

function handleContactFormSubmission(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        newsletter: formData.get('newsletter') === 'on'
    };
    
    // Validate form data
    if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification('Please fill in all required fields', 'error');
        return;
    }
    
    if (!isValidEmail(data.email)) {
        showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate form submission
    showLoadingState(true);
    
    setTimeout(() => {
        showLoadingState(false);
        contactForm.style.display = 'none';
        if (formMessage) {
            formMessage.style.display = 'block';
        }
        
        // Log form submission (in a real app, this would send data to a server)
        console.log('Contact form submitted:', data);
        
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form after 3 seconds
        setTimeout(() => {
            contactForm.reset();
            contactForm.style.display = 'block';
            if (formMessage) {
                formMessage.style.display = 'none';
            }
        }, 3000);
    }, 2000);
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingState(isLoading) {
    const submitBtn = document.querySelector('.btn-submit');
    if (submitBtn) {
        if (isLoading) {
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
        } else {
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
            submitBtn.disabled = false;
        }
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Add notification styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success {
            background: #d4edda;
            color: #155724;
            border-left: 4px solid #28a745;
        }
        
        .notification-error {
            background: #f8d7da;
            color: #721c24;
            border-left: 4px solid #dc3545;
        }
        
        .notification-warning {
            background: #fff3cd;
            color: #856404;
            border-left: 4px solid #ffc107;
        }
        
        .notification-info {
            background: #d1ecf1;
            color: #0c5460;
            border-left: 4px solid #17a2b8;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            margin-left: auto;
            opacity: 0.7;
            transition: opacity 0.3s ease;
        }
        
        .notification-close:hover {
            opacity: 1;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    if (!document.querySelector('#notification-styles')) {
        style.id = 'notification-styles';
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto-remove notification after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// Smooth scrolling for anchor links
function addSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
    `;
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    document.body.appendChild(scrollToTopBtn);
}

// Initialize scroll-to-top when page loads
document.addEventListener('DOMContentLoaded', addScrollToTop);

// Animation on scroll functionality
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate
    document.querySelectorAll('.destination-card, .team-member, .timeline-item, .faq-item, .office-card').forEach(el => {
        observer.observe(el);
    });
    
    // Add animation styles
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .destination-card,
        .team-member,
        .timeline-item,
        .faq-item,
        .office-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animationStyle);
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', addScrollAnimations);

// Global booking function for external access
window.bookDestination = bookDestination;

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        searchRecommendations,
        displaySearchResults,
        updateLocalTime,
        clearSearch,
        bookDestination,
        showNotification
    };
}