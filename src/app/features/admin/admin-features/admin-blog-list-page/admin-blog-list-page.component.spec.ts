import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBlogListPageComponent } from './admin-blog-list-page.component';

describe('AdminBlogListPageComponent', () => {
  let component: AdminBlogListPageComponent;
  let fixture: ComponentFixture<AdminBlogListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminBlogListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBlogListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
