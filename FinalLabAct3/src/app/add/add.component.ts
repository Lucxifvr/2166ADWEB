import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";
  

  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    this.http.get(this.APIUrl+'GetBooks').subscribe(data=>{
      this.books=data;
    })
  }
  ngOnInit(){
    this.refreshBooks();
  }

  addBook(){
    var newTitle=(<HTMLInputElement>document.getElementById("newTitle")).value;
    var newDesc=(<HTMLInputElement>document.getElementById("newDesc")).value;
    var newUrl=(<HTMLInputElement>document.getElementById("newUrl")).value;
    var newPrice=(<HTMLInputElement>document.getElementById("newPrice")).value;
    var formData=new FormData();
    formData.append("title", newTitle);
    formData.append("description", newDesc);
    formData.append("url", newUrl.toString());
    formData.append("price", newPrice.toString());
    this.http.post(this.APIUrl+'AddBook', formData).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
  
  deleteBook(id:any){
      this.http.delete(this.APIUrl+'DeleteBook?id='+id).subscribe(data=>{
      alert(data);
      this.refreshBooks()
    })
  }
}