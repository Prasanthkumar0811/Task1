import { Component } from '@angular/core';
import { Amount } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  statistics:Amount[]=[
    {  icon: 'assets/img2.jpg',label: 'Total Orders', value: 1200 },
    {  icon: 'assets/img11.jpg' ,label: 'Pending Orders', value: 300},
    {  icon: 'assets/img12.jpg', label: 'Completed Orders', value: 800},
    { icon: 'assets/img13.jpg',  label: 'Cancelled Orders', value: 100}

  ]
}
