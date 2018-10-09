import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CICDComponent } from './cicd.component';

describe('CICDComponent', () => {
  let component: CICDComponent;
  let fixture: ComponentFixture<CICDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CICDComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CICDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
