import React, { useState } from 'react';
import './Pages.css';

const Main_Enq = () => {
  const [enquiryType, setEnquiryType] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyId: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your enquiry! We will respond within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      propertyId: ''
    });
  };

  return (
    <div className="page-container enquiry-container">
      <div className="enquiry-header">
        <h2>Contact Us</h2>
        <p>Have questions? Our team is ready to help with any inquiries about our properties or services.</p>
      </div>

      <div className="enquiry-tabs">
        <button 
          className={enquiryType === 'general' ? 'active' : ''}
          onClick={() => setEnquiryType('general')}
        >
          General Inquiry
        </button>
        <button 
          className={enquiryType === 'property' ? 'active' : ''}
          onClick={() => setEnquiryType('property')}
        >
          Property Inquiry
        </button>
        <button 
          className={enquiryType === 'viewing' ? 'active' : ''}
          onClick={() => setEnquiryType('viewing')}
        >
          Schedule Viewing
        </button>
      </div>

      <form onSubmit={handleSubmit} className="enquiry-form">
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
          <label>Phone Number</label>
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            required 
          />
        </div>

        {enquiryType === 'property' && (
          <div className="form-group">
            <label>Property ID (if known)</label>
            <input 
              type="text" 
              name="propertyId" 
              value={formData.propertyId}
              onChange={handleChange}
            />
          </div>
        )}

        {enquiryType === 'viewing' && (
          <div className="form-group">
            <label>Preferred Viewing Date/Time</label>
            <input 
              type="datetime-local" 
              name="viewingTime" 
              onChange={handleChange}
            />
          </div>
        )}

        <div className="form-group">
          <label>Your Message</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {enquiryType === 'viewing' ? 'Request Viewing' : 'Submit Enquiry'}
        </button>
      </form>

      <div className="contact-info">
        <h3>Other Ways to Reach Us</h3>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> enquiries@dsphomerental.com</p>
        <p><strong>Office Hours:</strong> Mon-Fri 9am-5pm, Sat 10am-2pm</p>
      </div>
    </div>
  );
};

export default Main_Enq;