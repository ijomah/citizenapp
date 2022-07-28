import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { AppComponent } from '../app.component';
import { RemoveParagraphTagPipe } from '../remove-paragraph-tag.pipe';
// import { BlogDataService } from '../blogapi/blogdata.service';
import { BlogApiService } from '../blog-api.service';
import { data } from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [BlogApiService]
})
export class HomePage {
  pack1 = {
    color: 'brown',
    content: 'bread',
    nature: 'soft',
    heat: 'hot',
    label: false,
    factory: {
      location: {
        nuumber: '11',
        street: 'JOGUN street',
        area: 'oreyo',
        lga: 'ikorodu'
      }
    }
  }
  movieList
  postTitle
  postBody
  private _homeService;
  private blogApiService;
  constructor(private http: HttpClient, blogApiService: BlogApiService) {}
  
  adminAccess: any = {
    username: 'ijomahifinwa@gmail.com',
    password: 'digits1985'
  }
  
  doLog() {
    this.http.post('http://jacobwordpressapi.atwebpages.com/wp-json/jwt-auth/v1/token', this.adminAccess).subscribe((data: any) => {
      
      this.tokenCase = JSON.stringify(data);
      console.log('feedback:', this.tokenCase);
    });
    console.log('I am logging out something here');
    setTimeout(() => this.bringBlog(), 5000);
    
    //FOR TESTING PURPOSES
    // this.http.get('https://swapi.dev/api/films/').subscribe((data: any) => {
      
    //   this.tokenCase = data;
    //   console.log('feedback:', this.tokenCase);
    // });
    
  }
  postingForm(postForm) {
    console.log(postForm);
  }
  public tokenCase;
  // bringBlog(tokenCase) {
  //   this.blogApiService.get('http://jacobwordpressapi.atwebpages.com/wp-json/wp/v2/post').subscribe( (res) => {
  //     console.log(JSON.stringify(res));
  //   })
  // }
  
  public resMessage;
  bringBlog() {
    this.http.get('http://jacobwordpressapi.atwebpages.com/wp-json/wp/v2/posts').subscribe( (res) => {
      
    this.resMessage = res;
    console.log(JSON.stringify(this.resMessage));
    //let apiRes = JSON.stringify(this.resMessage);
   
    // Looping through the content.rendered of the data from wordpress Api
    this.resMessage.forEach(element => {
      console.log('check:', `${element.content.rendered}`)
    });
    // let resTitle = this.resMessage.title.rendered;
    // let resBody = this.resMessage.content.rendered;
    })
  }

  // bringBlog(adminAccess) {
  //   this.http.post('http://jacobwordpressapi.atwebpages.com/wp-json/wp/v2/posts', this.adminAccess).subscribe( (res) => {
  //     console.log(JSON.stringify(res));
  //   })
  // }
}