import { NgModule } from '@angular/core';
import {
  NgbAccordionModule,
  NgbDatepickerModule,
  NgbModalModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbToastModule,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  exports: [
    NgbAccordionModule,
    NgbDatepickerModule,
    NgbModalModule,
    NgbNavModule,
    NgbPaginationModule,
    NgbToastModule,
    NgbTooltipModule,
    NgSelectModule,
  ],
})
export class NgBootstrapModule {}
