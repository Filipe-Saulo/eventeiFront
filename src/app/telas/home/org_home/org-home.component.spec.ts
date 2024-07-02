import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgHomeComponent } from './org-home.component';

describe('OrgHomeComponent', () => {
  let component: OrgHomeComponent;
  let fixture: ComponentFixture<OrgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
