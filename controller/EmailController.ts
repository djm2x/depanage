import { Response } from 'express';
import Container from 'typedi';
import { JsonController, Get, Res, Post, Body, Param, Put, Delete } from 'routing-controllers';
import { ContactRepository } from '../repositories/ContactRepository';
import * as nodeMailer from 'nodemailer';
import * as nodeoutlook from 'nodejs-nodemailer-outlook';
@JsonController('/email')
export class EmailController {

  private service = null; // Container.get(ContactRepository);

  constructor() { }

  // @Post()
  // async post(@Body() model: Email, @Res() response: Response) {

  //   nodeoutlook.sendEmail({
  //     auth: {
  //       user: 'no-reply-io@outlook.com',
  //       pass: 'azerty@1'
  //     },
  //     from: model.email,
  //     to: 'dj-m2x@hotmail.com',
  //     subject: model.subject,
  //     html: model.html,
  //     text: model.message,
  //     attachments: [],
  //     onError: (e) => {
  //       console.log(e);
  //       return response.json(e);
  //     },
  //     onSuccess: (i) => {
  //       console.log(i);
  //       return response.send(i);
  //     }
  //   });
  // }

  @Post()
  async post2(@Body() model: Email, @Res() response: Response) {

    const transporter = nodeMailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false,  // true for 465 port, false for other ports
      auth: {
        // user: 'no-reply-io@outlook.com',
        // pass: 'azerty@1'
        user: 'dj-m2x@hotmail.com',
        pass: 'nina01'
      }
    });

    const mailOptions = {
      from: '',
      to: 'dj-m2x@hotmail.com', // list of receivers
      subject: '', // Subject line
      text: '', // plain text body
      html: '', // html body
      // priority: 'normal',
      date: new Date(),
    };
    mailOptions.from = model.email;
    mailOptions.subject = model.subject;
    mailOptions.text = `${model.message}`;
    mailOptions.html = model.html;
    try {
      return response.json(await transporter.sendMail(mailOptions as any));
    } catch (error) {
      return response.json(error);
    }
  }
}


interface Email {
  email: string;
  subject: string;
  message: string;
  html: string;
}

