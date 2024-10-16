import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice} from '../../models/invoice';
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [],
  templateUrl: './invoice.component.html'
  
})
export class InvoiceComponent implements OnInit {

  invoice!: Invoice;

  //Esto es para que se inyecte el servicio, en angular se hace asi.
  constructor(private service : InvoiceService) {}

  //Se inicializa el componente, en este caso se obtiene la factura del servicio.
  ngOnInit(): void {
    this.invoice = this.service.getInvoice();
  }
}
