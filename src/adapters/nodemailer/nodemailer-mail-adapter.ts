import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d2b3ad47b00668",
    pass: "88f07a3a5f5c78"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Juscélia de Souza <jusceliadesousa@gmail.com>',
      subject,
      html: body,
    })
  }
}