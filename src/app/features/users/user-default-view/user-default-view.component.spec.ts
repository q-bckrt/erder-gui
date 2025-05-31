import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefaultViewComponent } from './user-default-view.component';

describe('UserDefaultViewComponent', () => {
  let component: UserDefaultViewComponent;
  let fixture: ComponentFixture<UserDefaultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDefaultViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
