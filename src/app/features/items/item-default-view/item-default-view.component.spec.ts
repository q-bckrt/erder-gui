import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDefaultViewComponent } from './item-default-view.component';

describe('ItemDefaultViewComponent', () => {
  let component: ItemDefaultViewComponent;
  let fixture: ComponentFixture<ItemDefaultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemDefaultViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
