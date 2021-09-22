import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../app.service';
import { UserAnswer } from '../../interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  form!: FormGroup;

  smartphoneQuestions = [
    { id: `1`, question: 'Android' },
    { id: `2`, question: 'IPhone' },
    { id: `3`, question: 'Windows' },
    { id: `4`, question: 'Other' },
  ];

  transportQuestions = [
    { id: `1`, question: 'By car' },
    { id: `2`, question: 'By public transport' },
    { id: `3`, question: 'By bicycle' },
    { id: `4`, question: 'Other' },
  ];

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.createForm();
  }

  ngOnInit(): void {}
  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      smartphone: ['', Validators.required],
      transport: ['', Validators.required],
    });
  }

  saveAnswer() {
    const body: UserAnswer = {
      id: Math.floor(Math.random() * 100).toString(),
      email: this.form.get('email')?.value,
      smartphone: this.form.get('smartphone')?.value,
      transport: this.form.get('transport')?.value,
    };

    this.appService.storeAnswers(body);

    this.form.reset('');
  }
}
