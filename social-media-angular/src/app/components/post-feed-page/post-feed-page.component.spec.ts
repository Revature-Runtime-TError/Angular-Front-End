import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { PostService } from 'src/app/services/post.service';

import { PostFeedPageComponent } from './post-feed-page.component';

describe('PostFeedPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostFeedPageComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule, FormsModule], 
      providers: [HttpClient, PostService, AuthService]
    })
    .compileComponents();
  
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(PostFeedPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have a User of 'author'`), () => {
    const fixture = TestBed.createComponent(PostFeedPageComponent);
    const component = fixture.componentInstance;
    expect(component.author).toEqual({id: 0,email: "",firstName: "",lastName: ""});
  };

  it('should render filter question', () => {
      const fixture = TestBed.createComponent(PostFeedPageComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.form-label')?.textContent).toContain("Which user's posts do you want to prioritize?");
    });
});