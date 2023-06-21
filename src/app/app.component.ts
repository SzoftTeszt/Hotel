import { Component } from '@angular/core';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'humHotel';
  userName="";
  userNameReal="";
  constructor(public modalService:ModalService){}
  
  saveData(){
    this.userNameReal=this.userName;
    this.modalService.close();
  }
}
