const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/send-enquiry', async (req, res) => {
  const {
    name,
    email,
    phone,
    message,
    propertyId,
    viewingTime,
    enquiryType
  } = req.body;

  if (!name || !email || !phone || !message || !enquiryType) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // groups@gmail.com
      pass: process.env.EMAIL_PASS        // app-specific password
    }
  });

  const extraInfo =
    enquiryType === 'property'
      ? `Property ID: ${propertyId || 'N/A'}`
      : enquiryType === 'viewing'
      ? `Preferred Viewing Time: ${viewingTime || 'N/A'}`
      : '';

  const mailOptions = {
    from: `"DSP Enquiries" <${process.env.EMAIL_USER}>`,
    to: process.env.TARGET_EMAIL,         // deepakcoc@gmail.com
    subject: `New ${enquiryType} Enquiry from ${name}`,
    text: `
You received a new enquiry:

Name: ${name}
Email: ${email}
Phone: ${phone}
Type: ${enquiryType}

${extraInfo}

Message:
${message}

Submitted At: ${new Date().toLocaleString()}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Failed to send email:', error);
    res.status(500).json({ error: 'Email failed to send.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
