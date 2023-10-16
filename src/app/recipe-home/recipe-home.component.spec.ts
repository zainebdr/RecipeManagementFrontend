import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeHomeComponent } from './recipe-home.component';

describe('RecipeHomeComponent', () => {
  let component: RecipeHomeComponent;
  let fixture: ComponentFixture<RecipeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeHomeComponent]
    });
    fixture = TestBed.createComponent(RecipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
