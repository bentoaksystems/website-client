import {TestBed, inject} from '@angular/core/testing';

import {WINDOW, WINDOW_PROVIDERS} from './window.service';

describe('WindowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WINDOW_PROVIDERS]
    });
  });

  it('should be created', inject([WINDOW], (service: Window) => {
    expect(service).toBeTruthy();
  }));
});
