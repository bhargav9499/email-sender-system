import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend'
  formData = {
    name: '',
    email: '',
  };
  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post<any>('http://localhost:3001/register', this.formData).subscribe({
      next: () => {
        this.message = 'Email sent successfully!';
        this.formData = { name: '', email: '' };
      },
      error: () => {
        this.message = 'Failed to send email.';
      },
    });
  }
}
