import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-item.component.html',
})
export class FormItemComponent {

  @Output() addItemEventEmitter = new EventEmitter();
  
  //Esto es un contador que se incrementa cada vez que se crea un nuevo item, parte de 4 porque ya hay 3 items en el data
  private counterId = 4;

  item : any = {
    product: '',
    price: '',
    quantity: ''
  }

  onSubmit(): void {
    this.addItemEventEmitter.emit({id: this.counterId,...this.item});
    this.counterId++;
    
    this.item = {
      product: '',
      price: '',
      quantity: ''}}

}
