import {Component, HostListener} from '@angular/core';
import {AppService} from "./app.service";
import {catchError, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data!: any;
  posts = 0;
  loading = true;
  hasError = false;
  errorText = '';

  constructor(private appService: AppService) {
    this.getMorePosts();
  }

  getMorePosts(): void {
    this.loading = true
    this.posts += 25
    this.appService.getPage(this.posts).pipe(
      tap(() => this.loading = false),
      catchError(e => {
        this.hasError = true;
        this.errorText = e;
        return e;
      })
    ).subscribe(data => {
      this.data = data;
    });
  }

  navigate(url: string) {
    window.open(url, '_blank')?.focus();
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if(pos > max - 1 && !this.loading) {
        this.getMorePosts();
    }
  }
}
