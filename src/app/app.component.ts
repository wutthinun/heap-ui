import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  img;

  constructor(
    private http: HttpClient,
  ) { }

  onSubmit(f: NgForm) {
    const url = `/api/upload`;
    const { category } = f.value;
    const fd = new FormData();
    fd.append('category', category);
    fd.append('image', this.img);

    this.http.post(url, fd).subscribe(
      r => console.warn(r)
    );
  }

  onFileChange(event) {
    this.img = event.target.files[0];
  }
}
