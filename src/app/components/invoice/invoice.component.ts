import { Component, OnInit } from '@angular/core';
import { InvoiceService } from '../../services/invoice.service';
import { Invoice} from '../../models/invoice';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ClientViewComponent } from '../client-view/clientview.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { RowItemComponent } from '../row-item/row-item.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [InvoiceViewComponent, ClientViewComponent, ListItemsComponent, RowItemComponent,CompanyViewComponent],
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
