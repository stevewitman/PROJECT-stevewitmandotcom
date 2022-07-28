import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoringPageComponent } from './mentoring-page.component';

describe('MentoringPageComponent', () => {
  let component: MentoringPageComponent;
  let fixture: ComponentFixture<MentoringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentoringPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentoringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
