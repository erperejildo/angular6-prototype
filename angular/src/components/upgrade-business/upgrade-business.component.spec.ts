import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeBusinessComponent } from './upgrade-business.component';

describe('UpgradeBusinessComponent', () => {
  let component: UpgradeBusinessComponent;
  let fixture: ComponentFixture<UpgradeBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
