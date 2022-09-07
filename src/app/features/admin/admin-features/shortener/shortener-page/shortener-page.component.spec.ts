import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerPageComponent } from './shortener-page.component';

describe('ShortenerPageComponent', () => {
  let component: ShortenerPageComponent;
  let fixture: ComponentFixture<ShortenerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShortenerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortenerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
