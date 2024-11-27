import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryCComponent } from './my-library-c.component';

describe('MyLibraryCComponent', () => {
  let component: MyLibraryCComponent;
  let fixture: ComponentFixture<MyLibraryCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibraryCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibraryCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
