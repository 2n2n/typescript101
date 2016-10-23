import { Component } from '@angular/core';
import { AuthorService } from '../authors.service';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent {
  authors;
  title : string = "Authors";

  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

}
