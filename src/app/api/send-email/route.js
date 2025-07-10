import nodemailer from 'nodemailer';
import { success } from 'zod';


export async function POST(req) {
   
  const body = await req.json();
  const { name, email, inquiry } = body;


  if (!name || !email || !inquiry) {
    return Response.json({
      success: false,
      message: 'Either name, email or inquiry is missing',
    },
    {status : 400}
  );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL, 
        pass: process.env.PASSWORD, 
      },
        secure: true,
        port: 465,
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: process.env.RECEIVERSEMAIL,
      subject: `Inquiry from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${inquiry.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This email was sent from your website contact form.</small></p>
      `,
      text: `
        New Contact Form Submission

        Name: ${name}
        Email: ${email}
        Message: ${inquiry}

        This email was sent from your website contact form.
      `,
      replyTo: email,
    };

    const info = await transporter.sendMail(mailOptions);

    return Response.json({
      success : true,
      message: "Your message has been sent successfully! I'll get back to you soon.",
      messageId: info.messageId,
     },
     {status : 200}
  );

  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.',
    },
   {status : 500}
  );
  }
}
