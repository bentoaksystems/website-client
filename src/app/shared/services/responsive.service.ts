import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ResponsiveService {

  curWidth: number;
  curHeight: number;
  isMobile: boolean;
  resize$: Subject<number[]> = new Subject<number[]>();
  switch$: Subject<boolean> = new Subject<boolean>();
  constructor() { }
}
