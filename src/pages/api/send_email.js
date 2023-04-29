// Importa las dependencias necesarias
import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv'
dotenv.config();

// Configura la API key de SendGrid usando la variable de entorno
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Función asíncrona que maneja el envío de correos electrónicos
export default async function sendEmail(req, res) {
  // Verifica si el método de la solicitud es POST
  if (req.method === 'POST') {
    // Extrae las propiedades name, email y message del cuerpo de la solicitud
    const { name, email, message } = req.body;

    // Prepara el contenido del correo electrónico
    const content = {
      to: process.env.TO_EMAIL, // Dirección de correo electrónico del destinatario
      from: process.env.FROM_EMAIL, // Dirección de correo electrónico del remitente aqui tiene que ser con que esta activada la cuenta en sendgrid 
      subject: `Hay una nueva sugerencia Portafolio`, // Asunto del correo electrónico
      text: message, // Contenido del mensaje en texto sin formato
      html: ` // Contenido del mensaje en formato HTML
        <p>La sugerencia es de:</p>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p>${message}</p>
      `,
    };
    
    // Intenta enviar el correo electrónico utilizando la librería SendGrid
    try {
      await sgMail.send(content);
      // Si tiene éxito, devuelve un código de estado 200 y un mensaje de éxito
      res.status(200).send('Message sent successfully');
    } catch (error) {
      // Si hay un error, registra el error en la consola y devuelve un código de estado 500 y un mensaje de error
      console.error("Error sending mail:", error);
      console.error("Detailed error:", error.response.body.errors);
      res.status(500).json({ status: "Error sending mail" });
    }
  } else {
    // Si el método de la solicitud no es POST, devuelve un código de estado 400 y un mensaje de error
    res.status(400).send('Method not allowed');
  }
}
