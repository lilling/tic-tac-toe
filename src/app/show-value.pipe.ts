import { Pipe, PipeTransform } from '@angular/core';
import {CheckedState} from './models/checked-state.enum';

@Pipe({
  name: 'showValue'
})
export class ShowValue implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === CheckedState.None ? '' : CheckedState[value];
  }
}
