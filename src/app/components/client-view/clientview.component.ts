import { Component, Input } from '@angular/core';
import { Client } from '../../models/client';

@Component({
  selector: 'clientview',
  standalone: true,
  imports: [],
  templateUrl: './clientview.component.html',
})
export class ClientViewComponent {

  @Input() client: Client = new Client();
}
