import { Component } from '@angular/core';
import { TodoItemBaseComponent } from '../todo-item-base/todo-item.base.component';

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [],
  templateUrl: './item-in-progress.component.html',
  styleUrl: './item-in-progress.component.scss'
})
export class ItemInProgressComponent extends TodoItemBaseComponent {

}
