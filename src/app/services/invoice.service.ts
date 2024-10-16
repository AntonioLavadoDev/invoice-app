import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

//Aquí se podría implementar una llamada a un servicio REST para obtener la factura. 
@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = invoiceData;
  constructor() { }
 
  //Necesarion para que el componente pueda obtener la factura.
  getInvoice(): Invoice{
    return this.invoice;
  }
}
