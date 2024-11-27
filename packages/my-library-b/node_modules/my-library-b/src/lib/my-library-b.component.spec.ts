import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryBComponent } from './my-library-b.component';

describe('MyLibraryBComponent', () => {
  let component: MyLibraryBComponent;
  let fixture: ComponentFixture<MyLibraryBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibraryBComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibraryBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
