const { Router } = require('express')
const nodemailer = require('nodemailer')
const router = Router()

const { MAIL_USER, MAIL_PASS } = process.env; 
  
router.post('/', async (req,res)=>{
    console.log(req.body)
    const { name, email, message } = req.body;
    const transport = nodemailer.createTransport({
        host: 'smtp.hostinger.com',
        port: 465,   //con ssl o 25 sin ssl
        secure: true,
        auth: {
            user: MAIL_USER,
            pass: MAIL_PASS
        },
        tls: {
            rejectUnauthorized: false   //permite mandar mails desde otro lado q no sea el localhost
        }
    })

    const info = await transport.sendMail({
        from: MAIL_USER,
        to: 'dukintosh@gmail.com',     //
        subject: `Mensaje de ${name} desde dnkdnrd.com`,
        text: `Hola! \n\n${email} te mandó este mensaje:\n\n${message}`
    })

    console.log('Message sent', info.messageId)

    res.status(200).send('received')
})

module.exports = router;