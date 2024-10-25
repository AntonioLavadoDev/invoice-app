import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';

//Aquí se podría implementar una llamada a un servicio REST para obtener la factura. 
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;
  constructor() { }
 
  //Necesarion para que el componente pueda obtener la factura.
  getInvoice(): Invoice{
    const total = this.totalCalculation();
    return {... this.invoice, total};
  }

  remove(id:number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
    const total = this.totalCalculation();

    return {... this.invoice, total};
  }

  totalCalculation() {
    let total= 0;

    this.invoice.items.forEach(item => {total +=  (item.price * item.quantity);
    });
    return total;
  }

  add(item : Item): Invoice{
    this.invoice.items = [...this.invoice.items, item];
    const total = this.totalCalculation();
    return {... this.invoice, total};

  }
}
