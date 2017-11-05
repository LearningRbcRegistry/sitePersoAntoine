import { Component, OnInit } from '@angular/core';
import { EmailService} from '../services/email-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private contenu: string;
  private raison: string;
  private message: string;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
  }

  changeMessage(){
    this.message = 'Votre message a été envoyé avec succès!'
  }

  onSubmit() {

    let result: boolean;

    console.log('submit of form');
    console.log(this.contenu);
    console.log(this.raison);
    this.emailService.sendMail(this.contenu,this.raison);
    this.changeMessage();



    //  to do: pristine / validation / ..... tests.....
    //  this.sendMail(this.raison, this.contenu);
    // contact the service asynchronously  and display info if ok / Nok
    //  from here do a service
    //  from the service do a http call
    //  to a java rest service


  }

}
