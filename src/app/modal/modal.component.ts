import { Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ModalComponent {
 @Input() id?:string;
 isOpen:boolean=false;
 private element:any;
 constructor(private modalService:ModalService, private elementRef:ElementRef){
    this.element=elementRef.nativeElement;
    this.modalService.add(this);
    document.body.appendChild(this.element);
    this.element.addEventListener('click', (el:any)=>{
      // console.log(el.target.className);
      if (el.target.className=='modal')
        this.close();
    });
 }

 open(){
      console.log("openModal")
      this.element.style.display="block";
      // document.body.classList.add('modal-open')
      this.isOpen=true;
 }
 close(){
  this.element.style.display="none";
  this.isOpen=false;
 }

 ngOnDestroy(){
    this.modalService.remove(this)
 }
}
