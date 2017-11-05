import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {

  constructor() { }

  sendMail(sujet: string, contenu: string): Promise<string>{

    console.log('in sendMailService');
    return Promise.resolve('ok');

  }

}
