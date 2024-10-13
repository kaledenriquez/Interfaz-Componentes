import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmbCustomTextInputComponent } from './bmb-custom-text-input.component';

describe('BmbCustomTextInputComponent', () => {
  let component: BmbCustomTextInputComponent;
  let fixture: ComponentFixture<BmbCustomTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmbCustomTextInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmbCustomTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
