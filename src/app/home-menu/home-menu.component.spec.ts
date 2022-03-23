import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMenuComponent } from './home-menu.component';

describe('HomeMenuComponent', () => {
  let component: HomeMenuComponent;
  let fixture: ComponentFixture<HomeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
