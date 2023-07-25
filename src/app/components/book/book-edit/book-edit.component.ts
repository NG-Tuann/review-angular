import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  id: number;
  editMode = false;
  bookForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let bookId = '';
    let bookName = '';
    let price = 0;
    let des = '';
    let books = new FormArray([]);

    if (this.editMode) {
      const book = this.bookService.getBook(this.id);
      bookId = book.id;
      bookName = book.name;
      price = book.price;
      des = book.des;
      
    }
    this.bookForm = new FormGroup({
      id: new FormControl(bookId, Validators.required),
      name: new FormControl(bookName, Validators.required),
      price: new FormControl(price, Validators.required),
      des: new FormControl(des, Validators.required),
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }
  }
}
