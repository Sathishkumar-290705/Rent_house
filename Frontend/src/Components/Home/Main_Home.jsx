import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Home/Main_Home.css';
// import BuyCard from '../Buy/Main_Buy';
// import RentCard from '../Rent/Main_Rent';
// import LeaseCard from '../Lease/Main_Lease';
import HomeCard from '../HomeCard';

const Main_Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const navigate = useNavigate();

  const listings = [
    {
      category: 'buy',
      image: 'src/assets/home-bg.jpg',
      title: 'Santorini Villa',
      description: 'Luxury villa overlooking the Aegean Sea...',
      rating: '4.5',
      stayType: '3 Night Stay',
    },
    {
      category: 'buy',
      image: 'https://example.com/swiss.jpg',
      title: 'Swiss Chalet',
      description: 'Cozy chalet in the Swiss Alps...',
      rating: '4.8',
      stayType: '4 Night Stay',
    },
    {
      category: 'rent',
      image: 'https://example.com/paris.jpg',
      title: 'Paris Apartment',
      description: 'Modern apartment in central Paris...',
      rating: '4.3',
      stayType: '2 Night Stay',
    },
    {
      category: 'lease',
      image: 'https://example.com/ny.jpg',
      title: 'NY Office Space',
      description: 'Commercial space available for lease...',
      rating: '4.6',
      stayType: 'Monthly Lease',
    },
  ];

  // Filter logic for search
  const filteredListings = listings.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTriggered(true);
    document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="main-home">
      {/* ===== Hero Section ===== */}
      <div className="hero-container">
        <div className="overlay">
          <h1 className="quote-text">"Find your next home with comfort and ease!"</h1>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by location, type, etc..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>

      {/* ===== Search Results Section ===== */}
      {searchTriggered && (
        <div className="results-section">
          <h3>Searched Results:</h3>

          <div className="flex justify-center gap-6 flex-wrap p-8 bg-gray-100 min-h-screen">
            {filteredListings.length > 0 ? (
              filteredListings.map((item, index) => (
                <HomeCard key={index} {...item} />
              ))
            ) : (
              <p>No listings found for your search.</p>
            )}
          </div>
        </div>
      )}

      {/* ===== About Section ===== */}
      <div className="about-section" id="about-section" >
  <div class="container">
    <h1>About Us</h1>
    <p><strong>Welcome to DSP Elite Homes Ltd – Your Trusted Real Estate Partner</strong></p>

    <p>At <strong>DSP Elite Homes Ltd</strong>, we believe finding your dream property should be an exciting, hassle-free experience. Whether you're looking to buy, sell, rent, or invest, we are here to guide you every step of the way with honesty, transparency, and professionalism.</p>

    <h2>Who We Are</h2>
    <p>Founded in 2025 with a passion for property and people, <strong>DSP Elite Homes Ltd</strong> is a dynamic real estate agency based in Rugby. Our team is made up of experienced professionals who understand the local market inside out. With a deep commitment to client satisfaction, we have helped hundreds of families and investors find the right property solutions.</p>

    <h2>What We Do</h2>
    <ul>
      <li>Residential Sales & Rentals – Apartments, villas, and independent houses.</li>
      <li>Commercial Properties – Office spaces, retail shops, and warehouses.</li>
      <li>Plot and Land Deals – Verified and ready-to-build land parcels.</li>
      <li>Property Management – End-to-end solutions for landlords and tenants.</li>
      <li>Investment Advisory – Expert advice on real estate investment opportunities.</li>
    </ul>

    <h2>Our Mission</h2>
    <p>Our mission is simple: <strong>to make real estate simple and accessible</strong>. We aim to offer exceptional service through market expertise, ethical practices, and cutting-edge technology.</p>

    <h2>Why Choose Us?</h2>
    <ul>
      <li>Local Knowledge: We know the neighborhoods, the trends, and the opportunities.</li>
      <li>Personalized Service: We listen to your needs and tailor solutions accordingly.</li>
      <li>Verified Listings: We deal only in genuine, verified properties.</li>
      <li>Transparent Process: No hidden costs, no false promises.</li>
      <li>Customer First: Your satisfaction is our top priority.</li>
    </ul>

    <p><strong>Let's find your next property together.</strong>
    Contact us today and take the first step toward your real estate journey with confidence.</p>
  </div>
      </div>
    </div>
  );
};

export default Main_Home;
