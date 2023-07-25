import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit{
  book: Book;
  id: number;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Lay ra index tu URL
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.book = this.bookService.getBook(this.id);
    });
  }

  onEditBook() {
    // Chuyen huong toi component edit
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  // Xoa book va chuyen huong lai books
  onDeleteBook(){
    this.bookService.deleteBook(this.id);
    this.router.navigate(['/books']);
  }
}
