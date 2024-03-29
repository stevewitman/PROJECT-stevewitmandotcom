import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAddComponent } from './link-add.component';

describe('LinkAddComponent', () => {
  let component: LinkAddComponent;
  let fixture: ComponentFixture<LinkAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
