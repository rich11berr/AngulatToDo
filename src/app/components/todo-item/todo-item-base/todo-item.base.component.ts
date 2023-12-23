import { Directive, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../../../interfaces/todo-group.interface';

@Directive({
  standalone: true,
})
export class TodoItemBaseComponent {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;
}
