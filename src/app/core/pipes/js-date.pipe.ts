import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'jsDate',
})
export class JsDatePipe implements PipeTransform {
  transform(jsDate: any): string | null {
    const date = jsDate.toDate().toDateString();
    return new DatePipe('en-US').transform(date, 'yyyy-MM-dd');
  }
}
