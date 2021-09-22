import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ResultsComponent],
  imports: [CommonModule, ResultsRoutingModule, MatCardModule],
})
export class ResultsModule {}
