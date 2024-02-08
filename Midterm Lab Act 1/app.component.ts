import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'Midterms';
  presentDate = new Date(); 
  time$: Observable<Date>;
  price: number = 12345.6789;
  currentDate: Date = new Date();
  myNumber: number = 0.15; 
  myString: string = 'Adweb Midterms';
  myArray: any[] = ['rabbit', 'penguin', 'cat', 'dog', 'shark'];
  String: string = 'This is a group of animals';
  Array: any[] = ['milk', 'cookie', 'cheesecake', 'tart', 'french toast'];
  pi: number = 3.14159265359;
  data: object = {
    myname: "Kiana", age: "20", Hobbies:[
    {name: "Baking", type: "Pastries"},
    {name: "Listening to music", type: "Pop"},
    {name: "Online Game", type: "MLBB"}
    ]
    }
  
  constructor(){
    this.time$ = interval(1000).pipe(map(()=> new Date()))
    
    
  }
}



