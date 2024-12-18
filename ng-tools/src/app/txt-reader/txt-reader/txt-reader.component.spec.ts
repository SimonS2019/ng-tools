import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtReaderComponent } from './txt-reader.component';

describe('TxtReaderComponent', () => {
  let component: TxtReaderComponent;
  let fixture: ComponentFixture<TxtReaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TxtReaderComponent]
    });
    fixture = TestBed.createComponent(TxtReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
