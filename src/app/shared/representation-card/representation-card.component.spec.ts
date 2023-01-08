import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationCardComponent } from './representation-card.component';

describe('RepresentationCardComponent', () => {
  let component: RepresentationCardComponent;
  let fixture: ComponentFixture<RepresentationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepresentationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepresentationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
