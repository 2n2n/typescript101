interface author {
  name: string;
}
export class AuthorService {
   getAuthors(): author[] {
     return [{name: 'Author 1'}, {name: 'Author 2'}, {name: 'Author 3'}];
   }

}
