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
  loading = false;

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.loading = true;
    this.http.post<any>('http://localhost:3001/register', this.formData).subscribe({
      next: () => {
        this.message = 'Email sent successfully!';
        this.formData = { name: '', email: '' };
        this.loading = false;
      },
      error: () => {
        this.message = 'Failed to send email.';
        this.loading = false;
      },
    });
  }
}
