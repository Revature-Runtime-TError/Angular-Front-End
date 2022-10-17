import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ViewprofileComponent } from './viewprofile.component';

describe('ViewprofileComponent', () => {
  let component: ViewprofileComponent;
  let fixture: ComponentFixture<ViewprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewprofileComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    const fixture = TestBed.createComponent(ViewprofileComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.main')?.textContent).toContain('Revature Social Media');
  });

  it(`should have a user`, () => {
    const fixture = TestBed.createComponent(ViewprofileComponent);
    const component = fixture.componentInstance;
    expect(component.user).toBeTruthy();
  });
});
