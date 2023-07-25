import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
    ) {}
  
  ngOnInit(): void {
    this.books = this.bookService.getBooks();
  }

  onNewBook() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
