import axios from 'axios';
import 'dotenv/config';

const BREVO_API_URL = 'https://api.brevo.com/v3/smtp/email';

console.log("BREVO_API_KEY loaded:", process.env.BREVO_API_KEY ? "Yes ✓" : "No ✗ (missing!)");
console.log("SENDER_EMAIL:", process.env.SENDER_EMAIL);

const sendMail = async ({ to, subject, htmlContent, textContent }) => {
    try {
        const response = await axios.post(
            BREVO_API_URL,
            {
                sender: { email: process.env.SENDER_EMAIL, name: "Next" },
                to: [{ email: to }],
                subject: subject,
                htmlContent: htmlContent || undefined,
                textContent: textContent || undefined,
            },
            {
                headers: {
                    'api-key': process.env.BREVO_API_KEY,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );
        console.log(`Email sent to ${to} ✓`);
        return response.data;
    } catch (error) {
        console.error("Brevo API Error:", error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to send email');
    }
}

export default sendMail;
