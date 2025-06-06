import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDocumentComponent } from './add-documents.component';

describe('AddDocumentComponent', () => {
  let component: AddDocumentComponent;
  let fixture: ComponentFixture<AddDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDocumentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
