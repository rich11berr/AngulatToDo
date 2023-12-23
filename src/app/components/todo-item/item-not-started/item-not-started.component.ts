import { Component } from '@angular/core';
import { TodoItemBaseComponent } from '../todo-item-base/todo-item.base.component';

@Component({
  selector: 'app-item-not-started',
  standalone: true,
  imports: [],
  templateUrl: './item-not-started.component.html',
  styleUrl: './item-not-started.component.scss'
})
export class ItemNotStartedComponent extends TodoItemBaseComponent {

}
