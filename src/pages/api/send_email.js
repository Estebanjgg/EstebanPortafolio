import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'
dotenv.config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const content = {
      to: 'esteban030990@gmail.com', // Reemplaza con tu correo electrónico
      from: 'esteban030990@hotmail.com', // Utiliza la dirección de correo electrónico verificada
      subject: `Nueva sugerencia de ${name}`,
      text: message,
      html: `<p>${message}</p>`
    };

    try {
      await sgMail.send(content);
      res.status(200).send('Mensaje enviado correctamente');
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      console.error("Error detallado:", error.response.body.errors);
      res.status(500).json({ status: "Error al enviar el correo" });
    }
  } else {
    res.status(400).send('Método no permitido');
  }
}
