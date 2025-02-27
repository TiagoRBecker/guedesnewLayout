import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'emory.grimes@ethereal.email',
      pass: 'gwz6K9z16JEMnR1Trv'
  }
});
const domain = "http://localhost:3000"
export async function sendEmail(token?: String) {
   const confirmationLink = `${domain}/verify-email?token=${token}`
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: "admin@gmail.com",
    to: "emory.grimes@ethereal.email", 
    subject: "Verifique seu endereço de e-mail",
    text: `
    Olá Tiago Becker,
   Obrigado por se cadastrar em [Nome do Serviço]! Para ativar sua conta e confirmar que você é o proprietário deste e-mail, clique no link abaixo:
   <a href="${confirmationLink}">
   Este link é válido por [duração, como 24 horas]. Se o link expirar, você poderá solicitar uma nova verificação em sua conta.
   Se você não solicitou esta verificação, por favor ignore este e-mail.
   Obrigado,
   Equipe Ficha de Anamnese `,
  });

  console.log("Message sent: %s", info.messageId);
  
}
