import { Injectable } from '@angular/core';
import { invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private invoice: invoice = invoiceData;
  constructor() { }

  getInvoice(): invoice{
    return this.invoice;
  }
}
