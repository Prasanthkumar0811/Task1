import { Component, Input } from '@angular/core';
import { Amount } from '../app.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.css'
})
export class WidgetComponent {
@Input({required:true}) stats:Amount;
}
