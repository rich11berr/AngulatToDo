import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoItemBaseComponent } from '../todo-item-base/todo-item.base.component';

@Component({
  selector: 'app-item-in-progress',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './item-in-progress.component.html',
  styleUrl: './item-in-progress.component.scss'
})
export class ItemInProgressComponent extends TodoItemBaseComponent {

}
