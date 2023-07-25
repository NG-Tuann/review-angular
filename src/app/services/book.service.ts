import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private books: Book[] = [
    new Book(
      'B0001',
      'Đắc nhân tâm',
      20,
      'Đắc nhân tâm, tên tiếng Anh là How to Win Friends and Influence People là một quyển sách nhằm tự giúp bản thân bán chạy nhất từ trước đến nay. Quyển sách này do Dale Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được bán 15 triệu bản trên khắp thế giới.'
    ),
    new Book(
      'B0002',
      'Nhà giả kim',
      30,
      'Nhà giả kim là tiểu thuyết được xuất bản lần đầu ở Brasil năm 1988, và là cuốn sách nổi tiếng nhất của nhà văn Paulo Coelho. Tác phẩm đã được dịch ra 67 ngôn ngữ và bán ra tới 95 triệu bản, trở thành một trong những cuốn sách bán chạy nhất mọi thời đại'
    ),
    new Book(
      'B0003',
      'Tội ác và hình phạt',
      50,
      'Tội ác và hình phạt là một tiểu thuyết của nhà văn Nga Fyodor Mikhailovich Dostoyevsky. Tiểu thuyết này cùng với Anh em nhà Karamazov là hai tác phẩm nổi tiếng nhất của Dostoevsky. Tạp chí Times đã bình chọn Tội ác và hình phạt là một trong số những cuốn sách vĩ đại nhất mọi thời đại.'
    )
  ];

  // Lay tat ca sach
  getBooks() {
    return this.books; //Return copy array instead of real array
  }

  // Lay sach theo index
  getBook(index:number) {
    return this.books[index]; //Return copy array instead of real array
  }

  // Ham xoa 
  deleteBook(index:number) {
    this.books.splice(index, 1);
  }

  // Ham cap nhat 
  updateBook(index: number, newBook: Book) {
    this.books[index] = newBook;
  }

  // Ham them
  addBook(book: Book) {
    this.books.push(book);
  }

}
