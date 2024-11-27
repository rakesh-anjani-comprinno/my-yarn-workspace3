import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLibraryAComponent } from './my-library-a.component';

describe('MyLibraryAComponent', () => {
  let component: MyLibraryAComponent;
  let fixture: ComponentFixture<MyLibraryAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyLibraryAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyLibraryAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
