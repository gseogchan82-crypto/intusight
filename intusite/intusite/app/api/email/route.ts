import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { category, detailCategory, companyName, name, phone, email, message, privacyAgreed } = body;

        // Validating environment variables
        if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS || process.env.GMAIL_PASS.includes('xxxx')) {
            console.log('---------------------------------------------------');
            console.log('🚧 [DEV MODE] Email Simulation (No Password Set) 🚧');
            console.log('To: sails@intusight.net');
            console.log('Subject:', `[웹사이트 문의] ${companyName} - ${name}님의 새로운 문의사항입니다.`);
            console.log(`Category: ${category} > ${detailCategory}`);
            console.log('From:', email);
            console.log('Message:', message);
            console.log('Privacy Agreed:', privacyAgreed);
            console.log('---------------------------------------------------');

            // Return success to frontend to simulate behavior
            return NextResponse.json({ success: true, message: 'Email simulated successfully' }, { status: 200 });
        }

        // Create Transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS, // This must be an App Password, not login password
            },
        });

        // Email Content
        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'sails@intusight.net', // The recipient address requested by user
            replyTo: email, // Allow replying directly to the sender
            subject: `[웹사이트 문의] ${companyName} - ${name}님의 새로운 문의사항입니다.`,
            html: `
                <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
                    <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #2563eb; margin-bottom: 20px;">
                         <h2 style="color: #2563eb; margin: 0;">새로운 문의가 접수되었습니다.</h2>
                         <p style="color: #666; font-size: 14px; margin-top: 5px;">인투사이트 웹플레이지 고객지원 폼</p>
                    </div>
                    
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">문의 분야</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; color: #2563eb; font-weight: bold;">${category} > ${detailCategory}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">회사명</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${companyName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">담당자</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">연락처</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">이메일</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${email}</td>
                        </tr>
                         <tr>
                            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">개인정보 동의</td>
                            <td style="padding: 10px; border-bottom: 1px solid #eee;">${privacyAgreed ? '동의함' : '동의안함'}</td>
                        </tr>
                    </table>

                    <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        <strong style="display: block; margin-bottom: 10px; color: #4b5563;">문의 내용:</strong>
                        <p style="white-space: pre-wrap; margin: 0; line-height: 1.6; color: #1f2937;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; text-align: center; color: #9ca3af; font-size: 12px;">
                        <p>본 메일은 발신전용 메일입니다. 회신을 원하시면 메일 내용을 확인 후 직접 연락해주시기 바랍니다.</p>
                    </div>
                </div>
            `,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
