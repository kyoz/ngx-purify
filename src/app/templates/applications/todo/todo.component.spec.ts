import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo } from './todo.component';

describe('Todo', () => {
  let component: Todo;
  let fixture: ComponentFixture<Todo>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todo ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
