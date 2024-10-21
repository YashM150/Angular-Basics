import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string ="Angular 18";

  inputType="checkBox";

  rollNo:Number=123;

  isIndian: boolean = false;

  currentDate: Date = new Date();

  constructor(){
    
  }
  
  showMessage(message: string){
    alert(message);
  }

}
