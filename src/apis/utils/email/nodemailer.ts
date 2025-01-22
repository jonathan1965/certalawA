import nodemailer from 'nodemailer';

const sendEmail = (mailOptions: {
  fromName: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_SERVICE,
    port: 465,
    auth: {
      user: process.env.SERVICE_USERNAME,
      pass: process.env.SERVICE_PASSWORD,
    },
    secure: true,
    logger: false,
    debug: true,
  });
  const Options = {
    from: `${mailOptions.fromName} <${process.env.SERVICE_USERNAME}>`,
    to: mailOptions.email,
    subject: mailOptions.subject,
    html: mailOptions.message,
  };
  return transporter.sendMail(Options, (error: any) => {
    if (error) {
      console.log(error.message);
    }
  });
};

export default sendEmail;
