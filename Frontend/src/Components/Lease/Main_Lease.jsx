import React, { useState } from 'react';
import './Pages.css';

const Main_Lease = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    leaseDuration: '12 months',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Lease inquiry submitted! We will contact you shortly.');
  };

  return (
    <div className="page-container lease-container">
      <div className="lease-info">
        <h2>Commercial & Long-Term Leasing</h2>
        <p>Looking for long-term leasing options or commercial properties? Our leasing specialists can help you find the perfect space for your needs.</p>
        
        <div className="benefits">
          <h3>Why Lease With Us?</h3>
          <ul>
            <li>Flexible lease terms from 6-36 months</li>
            <li>Commercial properties available</li>
            <li>Professional property management</li>
            <li>Competitive rates</li>
          </ul>
        </div>
      </div>

      <div className="lease-form-container">
        <form onSubmit={handleSubmit} className="lease-form">
          <h3>Lease Inquiry Form</h3>
          
          <div className="form-group">
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label>Property Type</label>
            <select 
              name="propertyType" 
              value={formData.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
          </div>

          <div className="form-group">
            <label>Lease Duration</label>
            <select 
              name="leaseDuration" 
              value={formData.leaseDuration}
              onChange={handleChange}
            >
              <option value="6 months">6 Months</option>
              <option value="12 months">12 Months</option>
              <option value="24 months">24 Months</option>
              <option value="36 months">36 Months</option>
            </select>
          </div>

          <div className="form-group">
            <label>Additional Requirements</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="submit-btn">Submit Inquiry</button>
        </form>
      </div>
    </div>
  );
};

export default Main_Lease;