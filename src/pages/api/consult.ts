import EmailMocks from 'apis/utils/email/emailMocks';
import sendEmail from 'apis/utils/email/nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'method is not allowed' });
  }
  const { email, consultCase, name } = req.body;
  const message = EmailMocks.certaMessage(email, consultCase);
  try {
    sendEmail({
      fromName: name,
      email,
      subject: 'New case',
      message,
    });
    return res.status(200).json({
      status: 200,
      messge: 'Email has been sent successfully',
    });
  } catch (error: any) {
    return res.status(500).json({
      status: 500,
      message: 'Something went wrong, try again',
      reason: error?.message,
    });
  }
}
