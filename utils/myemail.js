const nodemailer= require('nodemailer')

const html= `
        <h1>Hello World</h1>
        <p>Isnt nodemailer useful?</p>
`

async function main(){
    const transporter= nodemailer.createTransport({
        host: 'sandbox.smtp.mailtrap.io',
        port: 25,
        secure:true,
         auth:{
             user: 'dayo@mailtrap.com',
             pass: 'test1111'
         }

        })

        const info= await transporter.sendMail({
            from: 'Temidayo Shittu <dayo@mailtrap.com>',
            to: 'temidayo@gmail.com',
            subject: 'Attendee notification',
            html:html

        })
        console.log(`Message sent: ${info.messageId}`)
}
main().catch(e=>console.log(e))