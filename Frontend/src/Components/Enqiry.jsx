import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Enquiry.css';

const Enquiry = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: '',
    preferredContact: 'email'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const propertyTypes = [
    'Residential - Apartment',
    'Residential - House',
    'Commercial - Office',
    'Commercial - Retail',
    'Land/Plot',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.propertyType) newErrors.propertyType = 'Please select a property type';
    if (!formData.message.trim()) newErrors.message = 'Please enter your enquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', formData);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            phone: '',
            propertyType: '',
            message: '',
            preferredContact: 'email'
          });
          setSubmitSuccess(false);
        }, 3000);
      } catch (error) {
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="enquiry-page">
      <div className="enquiry-container">
        <div className="enquiry-header">
          <h1>Property Enquiry</h1>
          <p>Fill out the form below and our team will get back to you within 24 hours</p>
        </div>

        {submitSuccess && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Thank you for your enquiry!</h3>
            <p>We've received your message and will contact you shortly.</p>
          </div>
        )}

        {!submitSuccess && (
          <form onSubmit={handleSubmit} className="enquiry-form">
            <div className="form-group">
              <label htmlFor="name">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="John Doe"
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="john@example.com"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="1234567890"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="propertyType">Property Type*</label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={errors.propertyType ? 'error' : ''}
              >
                <option value="">Select property type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.propertyType && <span className="error-message">{errors.propertyType}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Enquiry*</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'error' : ''}
                placeholder="Tell us about the property you're interested in..."
                rows="5"
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>

            <div className="form-group">
              <label>Preferred Contact Method</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Email
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  Phone Call
                </label>
                <label className="radio-option">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="whatsapp"
                    checked={formData.preferredContact === 'whatsapp'}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  WhatsApp
                </label>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => navigate('/')}
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Enquiry;