import nodemailer from 'nodemailer';
import 'dotenv/config';

console.log("SMTP_HOST:", process.env.SMTP_HOST);
console.log("SMTP_PORT:", process.env.SMTP_PORT);
console.log("SMTP_USER:", process.env.SMTP_USER);

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    }
});

// Test connection on startup
transporter.verify((error, success) => {
    if (error) {
        console.log("SMTP Error:", error.message);
    } else {
        console.log("SMTP Connected ✓ Ready to send emails");
    }
});

export default transporter;