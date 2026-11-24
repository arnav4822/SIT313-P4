require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS so the React frontend can send requests here
app.use(cors());
// Parse incoming JSON data
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD
    }
});

app.post('/subscribe', async (req, res) => {
    const { email } = req.body;

    // Validate data
    if (!email) {
        return res.status(400).json({ message: 'Email address is required.' });
    }

    const mailOptions = {
        from: `"DEV@Deakin Insider" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: 'Welcome to DEV@Deakin!',
        text: 'Thank you for subscribing to our Daily Insider!',
        html: '<strong>Thank you for subscribing to our Daily Insider! We are excited to have you on board.</strong>',
    };

    try {
        await transporter.sendMail(mailOptions);
        // Required for Task P5 demo video/screenshots[cite: 21]
        console.log(`Status 200: Welcome email successfully sent to ${email}`); 
        res.status(200).json({ message: 'Subscription successful! Check your inbox.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'There was an error sending the welcome email. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Backend API running at http://localhost:${PORT}`);
});