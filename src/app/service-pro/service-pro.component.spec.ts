import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProComponent } from './service-pro.component';

describe('ServiceProComponent', () => {
  let component: ServiceProComponent;
  let fixture: ComponentFixture<ServiceProComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
