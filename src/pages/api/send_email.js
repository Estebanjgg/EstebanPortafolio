import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'
dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const content = {
      to: process.env.TO_EMAIL,
      from: process.env.FROM_EMAIL, 
      subject: `Nueva sugerencia de ${name}`,
      text: message,
      html: `<p>${message}</p>`
    };

    try {
      await sgMail.send(content);
      res.status(200).send('Message sent successfully');
    } catch (error) {
      console.error("Error sending mail:", error);
      console.error("Detailed error:", error.response.body.errors);
      res.status(500).json({ status: "Error sending mail" });
    }
  } else {
    res.status(400).send('Method not allowed');
  }
}
