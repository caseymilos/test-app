import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { takeUntil } from 'rxjs/operators';
import { CoreComponent } from '../../components/core.component';
import { UserAnswer } from '../../interfaces/user.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent extends CoreComponent implements OnInit {
  answers!: UserAnswer[];
  totalUsersAnswers!: UserAnswer[];
  constructor(private appService: AppService) {
    super();
  }

  ngOnInit(): void {
    this.getIphoneUsersTravelByCar();
  }

  getIphoneUsersTravelByCar() {
    this.appService.answers
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (data) => ((this.answers = data), (this.totalUsersAnswers = data))
      );

    this.answers = this.answers.filter(
      (answer) => answer.smartphone === '2' && answer.transport === '1'
    );
  }
}
