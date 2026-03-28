// ========================================
// LUXURY TRAVEL MARKETPLACE - JAVASCRIPT
// ========================================

// Data
const destinations = [
    {
        id: 1,
        name: 'Paris',
        country: 'France',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        description: 'Experience the romance and elegance of the City of Light with its iconic landmarks and exquisite cuisine.',
        category: 'city',
        price: 2500,
        duration: '7 days',
        activities: ['Eiffel Tower', 'Louvre Museum', 'Seine Cruise']
    },
    {
        id: 2,
        name: 'Dubai',
        country: 'United Arab Emirates',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        description: 'Discover luxury and innovation in this modern desert paradise with world-class attractions.',
        category: 'city',
        price: 3200,
        duration: '6 days',
        activities: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall']
    },
    {
        id: 3,
        name: 'Maldives',
        country: 'Maldives',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        description: 'Escape to pristine island paradise with crystal-clear waters and luxurious overwater villas.',
        category: 'beach',
        price: 4500,
        duration: '5 days',
        activities: ['Snorkeling', 'Beach Relaxation', 'Spa']
    },
    {
        id: 4,
        name: 'Bali',
        country: 'Indonesia',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        description: 'Immerse yourself in spiritual beauty, lush landscapes, and vibrant cultural experiences.',
        category: 'cultural',
        price: 1800,
        duration: '8 days',
        activities: ['Temple Tours', 'Rice Terraces', 'Yoga Retreats']
    },
    {
        id: 5,
        name: 'Tokyo',
        country: 'Japan',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
        description: 'Explore where ancient traditions seamlessly blend with cutting-edge technology.',
        category: 'city',
        price: 2800,
        duration: '7 days',
        activities: ['Shibuya Crossing', 'Mount Fuji', 'Traditional Tea']
    },
    {
        id: 6,
        name: 'New York',
        country: 'United States',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        description: 'The city that never sleeps offers endless entertainment and iconic landmarks.',
        category: 'city',
        price: 2600,
        duration: '6 days',
        activities: ['Statue of Liberty', 'Times Square', 'Central Park']
    },
    {
        id: 7,
        name: 'Switzerland',
        country: 'Switzerland',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800',
        description: 'Marvel at breathtaking Alpine scenery and charming mountain villages.',
        category: 'adventure',
        price: 3500,
        duration: '7 days',
        activities: ['Skiing', 'Mountain Hiking', 'Lake Cruises']
    },
    {
        id: 8,
        name: 'Santorini',
        country: 'Greece',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        description: 'Famous for stunning sunsets, white-washed buildings, and romantic atmosphere.',
        category: 'beach',
        price: 2200,
        duration: '5 days',
        activities: ['Sunset Views', 'Wine Tasting', 'Beach Clubs']
    },
    {
        id: 9,
        name: 'Barcelona',
        country: 'Spain',
        image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800',
        description: 'Enjoy vibrant culture, stunning architecture, and beautiful Mediterranean beaches.',
        category: 'city',
        price: 2100,
        duration: '6 days',
        activities: ['Sagrada Familia', 'Park Güell', 'Beach Life']
    },
    {
        id: 10,
        name: 'Iceland',
        country: 'Iceland',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
        description: 'Witness otherworldly landscapes with glaciers, geysers, and Northern Lights.',
        category: 'adventure',
        price: 3000,
        duration: '6 days',
        activities: ['Northern Lights', 'Blue Lagoon', 'Glacier Hiking']
    },
    {
        id: 11,
        name: 'Rome',
        country: 'Italy',
        image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800',
        description: 'Walk through history in the Eternal City with ancient ruins and Renaissance art.',
        category: 'cultural',
        price: 2300,
        duration: '7 days',
        activities: ['Colosseum', 'Vatican', 'Trevi Fountain']
    },
    {
        id: 12,
        name: 'Bangkok',
        country: 'Thailand',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
        description: 'Experience vibrant street life, ornate temples, and incredible cuisine.',
        category: 'cultural',
        price: 1500,
        duration: '6 days',
        activities: ['Grand Palace', 'Floating Markets', 'Street Food']
    },
    {
        id: 13,
        name: 'Sydney',
        country: 'Australia',
        image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800',
        description: 'Iconic harbor city with stunning beaches and world-famous landmarks.',
        category: 'city',
        price: 3800,
        duration: '8 days',
        activities: ['Opera House', 'Bondi Beach', 'Harbor Bridge']
    },
    {
        id: 14,
        name: 'Prague',
        country: 'Czech Republic',
        image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800',
        description: 'Medieval charm meets modern vitality in this fairy-tale European capital.',
        category: 'cultural',
        price: 1700,
        duration: '5 days',
        activities: ['Prague Castle', 'Charles Bridge', 'Old Town']
    },
    {
        id: 15,
        name: 'Singapore',
        country: 'Singapore',
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800',
        description: 'Futuristic city-state blending diverse cultures with stunning modern architecture.',
        category: 'city',
        price: 2400,
        duration: '5 days',
        activities: ['Marina Bay', 'Gardens by Bay', 'Hawker Centers']
    },
    {
        id: 16,
        name: 'Morocco',
        country: 'Morocco',
        image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800',
        description: 'Exotic markets, desert adventures, and rich cultural heritage await.',
        category: 'cultural',
        price: 2000,
        duration: '7 days',
        activities: ['Marrakech Souks', 'Sahara Desert', 'Riads']
    },
    {
        id: 17,
        name: 'London',
        country: 'United Kingdom',
        image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800',
        description: 'Historic monuments, royal palaces, and world-class museums in this global city.',
        category: 'city',
        price: 2700,
        duration: '6 days',
        activities: ['Big Ben', 'British Museum', 'Thames Cruise']
    },
    {
        id: 18,
        name: 'Machu Picchu',
        country: 'Peru',
        image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800',
        description: 'Ancient Incan citadel set high in the Andes Mountains.',
        category: 'adventure',
        price: 2900,
        duration: '6 days',
        activities: ['Inca Trail', 'Sacred Valley', 'Cusco']
    },
    {
        id: 19,
        name: 'Amsterdam',
        country: 'Netherlands',
        image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800',
        description: 'Charming canals, world-class museums, and vibrant cycling culture.',
        category: 'city',
        price: 2200,
        duration: '5 days',
        activities: ['Canal Tours', 'Van Gogh Museum', 'Tulip Fields']
    },
    {
        id: 20,
        name: 'Seychelles',
        country: 'Seychelles',
        image: 'https://images.unsplash.com/photo-1589197331516-e4d9e9c68d45?w=800',
        description: 'Tropical paradise with pristine beaches and unique wildlife.',
        category: 'beach',
        price: 4200,
        duration: '7 days',
        activities: ['Island Hopping', 'Snorkeling', 'Beach Relaxation']
    },
    {
        id: 21,
        name: 'Vienna',
        country: 'Austria',
        image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800',
        description: 'Imperial palaces, classical music, and elegant coffee houses.',
        category: 'cultural',
        price: 2100,
        duration: '5 days',
        activities: ['Schönbrunn Palace', 'Opera Houses', 'Cafés']
    },
    {
        id: 22,
        name: 'Cape Town',
        country: 'South Africa',
        image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800',
        description: 'Stunning landscapes, diverse wildlife, and vibrant culture.',
        category: 'adventure',
        price: 2600,
        duration: '7 days',
        activities: ['Table Mountain', 'Safari', 'Wine Tours']
    }
];

const stays = [
    { id: 1, name: 'Hotel Plaza Athénée', location: 'Paris, France', type: 'Hotel', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800', price: 850, rating: 5, rooms: 154, amenities: ['Spa', 'Pool', 'Restaurant'] },
    { id: 2, name: 'Burj Al Arab', location: 'Dubai, UAE', type: 'Hotel', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', price: 1200, rating: 5, rooms: 202, amenities: ['Beach', 'Spa', 'Fine Dining'] },
    { id: 3, name: 'Soneva Jani', location: 'Maldives', type: 'Resort', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800', price: 2000, rating: 5, rooms: 51, amenities: ['Overwater Villas', 'Private Pool', 'Spa'] },
    { id: 4, name: 'Alila Ubud', location: 'Bali, Indonesia', type: 'Resort', image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800', price: 450, rating: 5, rooms: 56, amenities: ['Valley View', 'Infinity Pool', 'Yoga'] },
    { id: 5, name: 'Aman Tokyo', location: 'Tokyo, Japan', type: 'Hotel', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800', price: 950, rating: 5, rooms: 84, amenities: ['City View', 'Spa', 'Zen Garden'] },
    { id: 6, name: 'The Plaza', location: 'New York, USA', type: 'Hotel', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', price: 700, rating: 5, rooms: 282, amenities: ['Central Park View', 'Spa', 'Champagne Bar'] },
    { id: 7, name: 'The Chedi Andermatt', location: 'Switzerland', type: 'Resort', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800', price: 880, rating: 5, rooms: 123, amenities: ['Mountain View', 'Ski Access', 'Spa'] },
    { id: 8, name: 'Canaves Oia Suites', location: 'Santorini, Greece', type: 'Villa', image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800', price: 650, rating: 5, rooms: 24, amenities: ['Caldera View', 'Private Pool', 'Sunset'] },
    { id: 9, name: 'W Barcelona', location: 'Barcelona, Spain', type: 'Hotel', image: 'https://images.unsplash.com/photo-1587985064135-0366536eab42?w=800', price: 420, rating: 4, rooms: 473, amenities: ['Beach Front', 'Rooftop Bar', 'Pool'] },
    { id: 10, name: 'ION Adventure Hotel', location: 'Iceland', type: 'Hotel', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800', price: 550, rating: 5, rooms: 46, amenities: ['Northern Lights', 'Spa', 'Adventure'] },
    { id: 11, name: 'Hotel de Russie', location: 'Rome, Italy', type: 'Hotel', image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800', price: 600, rating: 5, rooms: 122, amenities: ['Garden Terrace', 'Spa', 'Restaurant'] },
    { id: 12, name: 'The Siam', location: 'Bangkok, Thailand', type: 'Hotel', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800', price: 380, rating: 5, rooms: 39, amenities: ['Riverside', 'Spa', 'Pool'] },
    { id: 13, name: 'Park Hyatt Sydney', location: 'Sydney, Australia', type: 'Hotel', image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800', price: 680, rating: 5, rooms: 155, amenities: ['Harbor View', 'Rooftop Pool', 'Spa'] },
    { id: 14, name: 'Four Seasons Prague', location: 'Prague, Czech Republic', type: 'Hotel', image: 'https://images.unsplash.com/photo-1551918120-9739cb430c6d?w=800', price: 480, rating: 5, rooms: 161, amenities: ['River View', 'Spa', 'Restaurant'] },
    { id: 15, name: 'Marina Bay Sands', location: 'Singapore', type: 'Hotel', image: 'https://images.unsplash.com/photo-1525624286412-4099c83c1bc8?w=800', price: 520, rating: 5, rooms: 2561, amenities: ['Infinity Pool', 'Casino', 'Skybar'] }
];

const cars = [
    { id: 1, model: 'Mercedes S-Class', type: 'Luxury', category: 'luxury', image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800', price: 180, seats: 5, transmission: 'Automatic', features: ['GPS', 'Leather Seats', 'Sunroof', 'Premium Audio'] },
    { id: 2, model: 'BMW 7 Series', type: 'Luxury', category: 'luxury', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800', price: 170, seats: 5, transmission: 'Automatic', features: ['GPS', 'Massage Seats', 'Wi-Fi', 'Premium Sound'] },
    { id: 3, model: 'Range Rover Sport', type: 'SUV', category: 'suv', image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800', price: 200, seats: 7, transmission: 'Automatic', features: ['GPS', '4WD', 'Leather', 'Panoramic Roof'] },
    { id: 4, model: 'Audi A8', type: 'Luxury', category: 'luxury', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f8ac8?w=800', price: 160, seats: 5, transmission: 'Automatic', features: ['GPS', 'Matrix LED', 'Virtual Cockpit', 'Massage'] },
    { id: 5, model: 'Tesla Model S', type: 'Luxury', category: 'luxury', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', price: 150, seats: 5, transmission: 'Automatic', features: ['Electric', 'Autopilot', 'Premium Interior', 'Supercharger'] },
    { id: 6, model: 'Porsche Cayenne', type: 'SUV', category: 'suv', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800', price: 220, seats: 5, transmission: 'Automatic', features: ['GPS', 'Sport Mode', 'Premium Sound', 'Panoramic Roof'] },
    { id: 7, model: 'Toyota Camry', type: 'Sedan', category: 'sedan', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800', price: 60, seats: 5, transmission: 'Automatic', features: ['GPS', 'Bluetooth', 'Backup Camera', 'Climate Control'] },
    { id: 8, model: 'Honda Accord', type: 'Sedan', category: 'sedan', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800', price: 55, seats: 5, transmission: 'Automatic', features: ['GPS', 'Apple CarPlay', 'Lane Assist', 'Adaptive Cruise'] },
    { id: 9, model: 'Lamborghini Huracán', type: 'Sports', category: 'sports', image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800', price: 800, seats: 2, transmission: 'Automatic', features: ['V10 Engine', 'Carbon Fiber', 'Sport Exhaust', 'Racing Seats'] },
    { id: 10, model: 'Ferrari 488', type: 'Sports', category: 'sports', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800', price: 900, seats: 2, transmission: 'Automatic', features: ['Twin Turbo V8', 'Racing Mode', 'Premium Interior', 'Carbon Fiber'] },
    { id: 11, model: 'Lexus RX', type: 'SUV', category: 'suv', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800', price: 120, seats: 7, transmission: 'Automatic', features: ['GPS', 'Hybrid', 'Premium Sound', 'Safety+'] }
];

const packages = [
    {
        id: 1,
        title: 'Romantic Paris Getaway',
        destination: 'Paris, France',
        type: 'honeymoon',
        category: 'honeymoon',
        image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
        price: 3500,
        duration: '7 Days / 6 Nights',
        description: 'Experience the magic of Paris with your loved one. Includes luxury hotel, romantic dinners, and exclusive tours.',
        inclusions: ['5-Star Hotel', 'Daily Breakfast', 'Seine River Cruise', 'Eiffel Tower Dinner', 'Airport Transfers', 'City Tours']
    },
    {
        id: 2,
        title: 'Dubai Luxury Experience',
        destination: 'Dubai, UAE',
        type: 'luxury',
        category: 'luxury',
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800',
        price: 4200,
        duration: '6 Days / 5 Nights',
        description: 'Indulge in ultimate luxury with 5-star accommodations, private tours, and exclusive experiences.',
        inclusions: ['5-Star Hotel', 'All Meals', 'Desert Safari', 'Burj Khalifa Tickets', 'Shopping Tour', 'Private Car']
    },
    {
        id: 3,
        title: 'Maldives Paradise Escape',
        destination: 'Maldives',
        type: 'honeymoon',
        category: 'honeymoon',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800',
        price: 5500,
        duration: '5 Days / 4 Nights',
        description: 'Overwater villa experience with spa treatments, water sports, and gourmet dining.',
        inclusions: ['Overwater Villa', 'All-Inclusive Meals', 'Spa Package', 'Water Sports', 'Speedboat Transfer', 'Sunset Cruise']
    },
    {
        id: 4,
        title: 'Bali Cultural Adventure',
        destination: 'Bali, Indonesia',
        type: 'family',
        category: 'family',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
        price: 2400,
        duration: '8 Days / 7 Nights',
        description: 'Explore temples, rice terraces, and beaches. Perfect for families seeking culture and adventure.',
        inclusions: ['4-Star Resort', 'Breakfast Daily', 'Temple Tours', 'Rice Terrace Visit', 'Beach Activities', 'Cultural Shows']
    },
    {
        id: 5,
        title: 'Tokyo Modern Explorer',
        destination: 'Tokyo, Japan',
        type: 'family',
        category: 'family',
        image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
        price: 3800,
        duration: '7 Days / 6 Nights',
        description: 'Discover ancient traditions and modern marvels in Japan's vibrant capital city.',
        inclusions: ['4-Star Hotel', 'Daily Breakfast', 'Mount Fuji Tour', 'Tokyo Disneyland', 'Sushi Making Class', 'JR Pass']
    },
    {
        id: 6,
        title: 'Swiss Alps Adventure',
        destination: 'Switzerland',
        type: 'adventure',
        category: 'adventure',
        image: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800',
        price: 4500,
        duration: '7 Days / 6 Nights',
        description: 'Mountain adventures with skiing, hiking, and breathtaking Alpine scenery.',
        inclusions: ['Mountain Resort', 'Half Board', 'Ski Pass', 'Mountain Excursions', 'Cable Car Rides', 'Swiss Travel Pass']
    },
    {
        id: 7,
        title: 'New York City Lights',
        destination: 'New York, USA',
        type: 'family',
        category: 'family',
        image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
        price: 3200,
        duration: '6 Days / 5 Nights',
        description: 'Experience the Big Apple with Broadway shows, iconic landmarks, and world-class dining.',
        inclusions: ['4-Star Hotel', 'Daily Breakfast', 'Broadway Show', 'City Tour', 'Statue of Liberty', 'Museum Passes']
    },
    {
        id: 8,
        title: 'Iceland Northern Lights',
        destination: 'Iceland',
        type: 'adventure',
        category: 'adventure',
        image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800',
        price: 3900,
        duration: '6 Days / 5 Nights',
        description: 'Chase the Northern Lights and explore glaciers, geysers, and volcanic landscapes.',
        inclusions: ['Hotel', 'Breakfast Daily', 'Northern Lights Tour', 'Blue Lagoon', 'Golden Circle', 'Glacier Hike']
    },
    {
        id: 9,
        title: 'Greek Island Hopping',
        destination: 'Santorini, Greece',
        type: 'honeymoon',
        category: 'honeymoon',
        image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
        price: 3100,
        duration: '8 Days / 7 Nights',
        description: 'Visit multiple Greek islands with stunning sunsets, white-washed villages, and azure waters.',
        inclusions: ['Boutique Hotels', 'Breakfast', 'Ferry Passes', 'Wine Tasting', 'Sunset Cruise', 'Island Tours']
    },
    {
        id: 10,
        title: 'Thailand Explorer',
        destination: 'Bangkok, Thailand',
        type: 'family',
        category: 'family',
        image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800',
        price: 2100,
        duration: '8 Days / 7 Nights',
        description: 'Temples, beaches, and street food adventures across Thailand's best destinations.',
        inclusions: ['3-Star Hotels', 'Daily Breakfast', 'Temple Tours', 'Beach Resort', 'Cooking Class', 'Island Excursion']
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const modal = document.getElementById('bookingModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const bookingSummary = document.getElementById('bookingSummary');
const bookingForm = document.getElementById('bookingForm');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Tab Switching
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.dataset.tab;
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Filter Functionality
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (window.location.pathname.includes('destination.html')) {
            filterDestinations(filter);
        } else if (window.location.pathname.includes('carrental.html')) {
            filterCars(filter);
        } else if (window.location.pathname.includes('packages.html')) {
            filterPackages(filter);
        }
    });
});

// Render Functions
function renderStays() {
    const staysGrid = document.getElementById('staysGrid');
    if (!staysGrid) return;
    
    staysGrid.innerHTML = stays.slice(0, 6).map(stay => `
        <div class="stay-card" data-id="${stay.id}">
            <div class="stay-image-wrapper">
                <img src="${stay.image}" alt="${stay.name}" class="stay-image">
                <span class="stay-badge">${stay.type}</span>
            </div>
            <div class="stay-content">
                <div class="stay-location">
                    <i class="fas fa-location-dot"></i>
                    ${stay.location}
                </div>
                <h3 class="stay-name">${stay.name}</h3>
                <div class="stay-features">
                    <div class="stay-feature">
                        <i class="fas fa-star"></i>
                        ${stay.rating} Rating
                    </div>
                    <div class="stay-feature">
                        <i class="fas fa-door-open"></i>
                        ${stay.rooms} Rooms
                    </div>
                </div>
                <div class="stay-footer">
                    <div class="stay-price">
                        $${stay.price}<span>/night</span>
                    </div>
                    <button class="book-btn" onclick="openBookingModal('${stay.name}', ${stay.price})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderDestinations(filter = 'all') {
    const destinationsGrid = document.getElementById('destinationsGrid');
    const allDestinations = document.getElementById('allDestinations');
    const targetGrid = destinationsGrid || allDestinations;
    
    if (!targetGrid) return;
    
    const filtered = filter === 'all' 
        ? destinations 
        : destinations.filter(d => d.category === filter);
    
    targetGrid.innerHTML = filtered.map(dest => `
        <div class="destination-card" data-id="${dest.id}">
            <img src="${dest.image}" alt="${dest.name}" class="destination-image">
            <div class="destination-overlay">
                <h3 class="destination-name">${dest.name}</h3>
                <div class="destination-country">${dest.country}</div>
                <div class="destination-info">
                    <p class="destination-description">${dest.description}</p>
                    <div class="destination-stats">
                        <div class="destination-stat">
                            <i class="fas fa-clock"></i>
                            ${dest.duration}
                        </div>
                        <div class="destination-stat">
                            <i class="fas fa-dollar-sign"></i>
                            From $${dest.price}
                        </div>
                    </div>
                    <button class="book-btn" onclick="openBookingModal('${dest.name}, ${dest.country}', ${dest.price})" style="margin-top: 16px;">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderCars(filter = 'all') {
    const carsGrid = document.getElementById('allCars');
    if (!carsGrid) return;
    
    const filtered = filter === 'all' 
        ? cars 
        : cars.filter(c => c.category === filter);
    
    carsGrid.innerHTML = filtered.map(car => `
        <div class="car-card" data-id="${car.id}">
            <div class="car-image-wrapper">
                <img src="${car.image}" alt="${car.model}" class="car-image">
                <span class="car-badge">${car.type}</span>
            </div>
            <div class="car-content">
                <h3 class="car-model">${car.model}</h3>
                <div class="car-type">${car.transmission}</div>
                <div class="car-features">
                    <div class="car-feature">
                        <i class="fas fa-users"></i>
                        ${car.seats} Seats
                    </div>
                    <div class="car-feature">
                        <i class="fas fa-cog"></i>
                        ${car.transmission}
                    </div>
                    ${car.features.slice(0, 2).map(f => `
                        <div class="car-feature">
                            <i class="fas fa-check"></i>
                            ${f}
                        </div>
                    `).join('')}
                </div>
                <div class="car-footer">
                    <div class="car-price">
                        $${car.price}<span>/day</span>
                    </div>
                    <button class="book-btn" onclick="openBookingModal('${car.model}', ${car.price})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function renderPackages(filter = 'all') {
    const packagesGrid = document.getElementById('allPackages');
    if (!packagesGrid) return;
    
    const filtered = filter === 'all' 
        ? packages 
        : packages.filter(p => p.category === filter);
    
    packagesGrid.innerHTML = filtered.map(pkg => `
        <div class="package-card" data-id="${pkg.id}">
            <div class="package-image-wrapper">
                <img src="${pkg.image}" alt="${pkg.title}" class="package-image">
                <span class="package-badge">${pkg.type}</span>
            </div>
            <div class="package-content">
                <h3 class="package-title">${pkg.title}</h3>
                <div class="package-destination">
                    <i class="fas fa-location-dot"></i>
                    ${pkg.destination}
                </div>
                <p class="package-description">${pkg.description}</p>
                <div class="package-details">
                    <div class="package-detail">
                        <i class="fas fa-clock"></i>
                        ${pkg.duration}
                    </div>
                </div>
                <div class="package-inclusions">
                    <h4>Package Includes:</h4>
                    <ul>
                        ${pkg.inclusions.slice(0, 4).map(inc => `
                            <li><i class="fas fa-check-circle"></i> ${inc}</li>
                        `).join('')}
                    </ul>
                </div>
                <div class="package-footer">
                    <div class="package-price">
                        $${pkg.price}<span>/person</span>
                    </div>
                    <button class="book-btn" onclick="openBookingModal('${pkg.title}', ${pkg.price})">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Functions
function filterDestinations(filter) {
    renderDestinations(filter);
}

function filterCars(filter) {
    renderCars(filter);
}

function filterPackages(filter) {
    renderPackages(filter);
}

// Modal Functions
function openBookingModal(itemName, price) {
    modalTitle.textContent = `Book: ${itemName}`;
    bookingSummary.innerHTML = `
        <h4 style="margin-bottom: 12px; color: var(--text-dark);">Booking Summary</h4>
        <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span style="color: var(--text-gray);">Item:</span>
            <strong style="color: var(--text-dark);">${itemName}</strong>
        </div>
        <div style="display: flex; justify-content: space-between;">
            <span style="color: var(--text-gray);">Price:</span>
            <strong style="color: var(--primary-blue); font-size: 20px;">$${price}</strong>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

if (modalClose) {
    modalClose.addEventListener('click', closeBookingModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeBookingModal();
        }
    });
}

// Form Submission
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Booking submitted successfully! We will contact you shortly.');
        closeBookingModal();
        bookingForm.reset();
    });
}

// Search Functionality
const heroSearchBtn = document.getElementById('heroSearchBtn');
const heroSearchInput = document.getElementById('heroSearchInput');
const searchResults = document.getElementById('searchResults');
const resultsGrid = document.getElementById('resultsGrid');
const clearResults = document.getElementById('clearResults');

if (heroSearchBtn) {
    heroSearchBtn.addEventListener('click', performSearch);
}

if (heroSearchInput) {
    heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const query = heroSearchInput.value.toLowerCase().trim();
    if (!query) return;
    
    const results = destinations.filter(d => 
        d.name.toLowerCase().includes(query) ||
        d.country.toLowerCase().includes(query) ||
        d.description.toLowerCase().includes(query)
    );
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    if (results.length === 0) {
        resultsGrid.innerHTML = '<p style="text-align: center; color: var(--text-gray); grid-column: 1/-1;">No results found. Try another search.</p>';
    } else {
        resultsGrid.innerHTML = results.map(dest => `
            <div class="destination-card" data-id="${dest.id}">
                <img src="${dest.image}" alt="${dest.name}" class="destination-image">
                <div class="destination-overlay">
                    <h3 class="destination-name">${dest.name}</h3>
                    <div class="destination-country">${dest.country}</div>
                    <div class="destination-info">
                        <p class="destination-description">${dest.description}</p>
                        <button class="book-btn" onclick="openBookingModal('${dest.name}', ${dest.price})" style="margin-top: 16px;">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    searchResults.style.display = 'block';
    searchResults.scrollIntoView({ behavior: 'smooth' });
}

if (clearResults) {
    clearResults.addEventListener('click', () => {
        searchResults.style.display = 'none';
        heroSearchInput.value = '';
    });
}

// Advanced Search Filters
const applyFilters = document.getElementById('applyFilters');
if (applyFilters) {
    applyFilters.addEventListener('click', () => {
        const dest = document.getElementById('destSelect').value;
        const price = document.getElementById('priceRange').value;
        const category = document.getElementById('category').value;
        
        let filtered = [...destinations];
        
        if (dest) {
            filtered = filtered.filter(d => d.name.toLowerCase().includes(dest));
        }
        
        if (price === 'budget') {
            filtered = filtered.filter(d => d.price < 1000);
        } else if (price === 'mid') {
            filtered = filtered.filter(d => d.price >= 1000 && d.price < 3000);
        } else if (price === 'luxury') {
            filtered = filtered.filter(d => d.price >= 3000);
        }
        
        if (category) {
            filtered = filtered.filter(d => d.category === category);
        }
        
        displaySearchResults(filtered);
    });
}

// Smooth Scroll
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

// Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    renderStays();
    renderDestinations();
    renderCars();
    renderPackages();
    
    // Animate elements
    document.querySelectorAll('.stay-card, .destination-card, .car-card, .package-card, .feature-card, .offer-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});
