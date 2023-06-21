import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-foglalas',
  templateUrl: './foglalas.component.html',
  styleUrls: ['./foglalas.component.css']
})
export class FoglalasComponent {
  foglalasok:any=[];
  
  foglalas:any={};

  oszlopok=["id","vendeg_neve","szoba_szama","erkezes", "tavozas"];
  constructor(private base:BaseService, private modalService:ModalService){
    this.foglalasok=this.base.get().subscribe(
      (a)=>{this.foglalasok=a; 
        console.log(typeof(this.foglalasok))
        }
    )
  }

  refresh()
  {
    this.foglalasok=this.base.get().subscribe(
      (a)=>{this.foglalasok=a; console.log(this.foglalasok)}
    )
  }
  delete(body:any){
    this.base.delete(body).subscribe( ()=>this.refresh()     
    );
  }
  ujFoglalas(){
    this.foglalas={};
    this.modalService.open('modal-1')
  }
  close(){
    this.foglalas={};
    this.modalService.close();
    this.refresh();
  }

  modositas(foglalas:any){
    this.foglalas=Object.assign({}, foglalas);
    this.modalService.open('modal-1');
  }

  ment(){
    if (!this.foglalas.id)
            this.base.create(this.foglalas).subscribe(
            ()=>this.close()
        )
        else{
            this.base.update(this.foglalas).subscribe(
              ()=>this.close()
            )

        }
  }


}
