import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import { HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';






describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ], 
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule, FormsModule], 
      providers: [HttpClient]
    })
    .compileComponents();

  });


  it('should create', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  //testing if the mattoolbar is orange
  it('navbar should be colored orange' , () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    component.DarkToggle(); 
    
    
    const colorEl: HTMLElement = fixture.debugElement.query(By.css('mat-toolbar')).nativeElement;
    console.log(colorEl);
    console.log(colorEl.style.backgroundColor);
    expect(colorEl.style.backgroundColor).toBe('rgb(243, 106, 38)');
    document.body.classList.remove('darkmode');
  
    });

  it('button should call DarkToggle function between light and dark', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    component.DarkToggle();
    expect(document.body.classList.contains('darkmode')).toBeTruthy();
    component.DarkToggle();
    expect(document.body.classList.contains('darkmode')).toBe(false);
  })  


   });
