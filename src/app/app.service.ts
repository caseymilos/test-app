import { Injectable } from '@angular/core';
import { UserAnswer } from './interfaces/user.interface';
import { Observable, of } from 'rxjs';

export const ANSWER = 'answer';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  get answersFromStorage(): Array<UserAnswer> {
    return localStorage.getItem(ANSWER)
      ? JSON.parse(localStorage.getItem(ANSWER) as string)
      : null;
  }

  get answers(): Observable<UserAnswer[]> {
    return of(this.answersFromStorage);
  }

  storeAnswers(body: UserAnswer): void {
    if (this.answersFromStorage) {
      const data: Array<UserAnswer> = this.answersFromStorage;

      if (data.some((user) => user.email !== body.email)) {
        data.push(body);
        localStorage.setItem(ANSWER, JSON.stringify(data));
      }
    } else {
      localStorage.setItem(ANSWER, JSON.stringify([body]));
    }
  }
}
