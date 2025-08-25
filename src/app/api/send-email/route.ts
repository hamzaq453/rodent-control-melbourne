import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, suburb } = body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'qhamza4532@gmail.com',
        pass: 'zufc ffzz idak ixef'
      }
    });

    // Email content
    const mailOptions = {
      from: 'qhamza4532@gmail.com',
      to: 'qhamza4532@gmail.com',
      subject: `New ${service ? service : 'Contact'} Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2C6EA5; border-bottom: 2px solid #FFA500; padding-bottom: 10px;">
            New ${service ? service : 'Contact'} Request
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #2C6EA5; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${suburb ? `<p><strong>Suburb/Postcode:</strong> ${suburb}</p>` : ''}
            ${service ? `<p><strong>Service Required:</strong> ${service}</p>` : ''}
          </div>
          
          <div style="background-color: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #FFA500;">
            <h3 style="color: #2C6EA5; margin-top: 0;">Message</h3>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
            <p style="margin: 0; color: #2C6EA5; font-size: 14px;">
              <strong>Sent from:</strong> Rodent Control Melbourne Website<br>
              <strong>Date:</strong> ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Melbourne' })}
            </p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again.' 
      },
      { status: 500 }
    );
  }
}
