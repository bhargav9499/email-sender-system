const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const db = require('./db');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json());

app.post('/register', async (req, res) => {
  const { name, email } = req.body;
  const query = 'INSERT INTO users (name, email) VALUES (?, ?)';

  db.query(query, [name, email], async (err) => {
    if (err) return res.status(500).json({ success: false, error: err });

    try {
      const testAccount = await nodemailer.createTestAccount();

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });

      const mailOptions = {
        from: '"Email Sender App" <no-reply@example.com>',
        to: email,
        subject: 'Confirmation Email',
        text: `Hello ${name}, your registration is confirmed!\n\nWe’ve sent this confirmation to your email: ${email}`,
      };

      const info = await transporter.sendMail(mailOptions);

      res.json({
        success: true,
        message: 'Email sent!',
        previewURL: nodemailer.getTestMessageUrl(info)
      });

    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Backend running on port ${process.env.PORT}`);
});
