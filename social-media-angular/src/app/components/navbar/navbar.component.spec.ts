import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import { HttpClient} from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDatepickerToggle } from '@angular/material/datepicker';






describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ], 
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule], 
      providers: [HttpClient]
      
     
      
    })
    .compileComponents();
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //testing if the mattoolbar is orange
  it('navbar should be colored orange' , () => {
    
    component.DarkToggle(); 
    
    const colorEl: HTMLElement = fixture.debugElement.query(By.css('mat-toolbar')).nativeElement;
    console.log(colorEl);
    console.log(colorEl.style.backgroundColor);
    expect(colorEl.style.backgroundColor).toBe('rgb(243, 106, 38)');

  
    });

  it('button should call DarkToggle function between light and dark', () => {
    
    component.DarkToggle();
    expect(document.body.classList.contains('darkmode')).toBeTruthy();
    component.DarkToggle();
    expect(document.body.classList.contains('darkmode')).toBe(false);
  })  


   });
