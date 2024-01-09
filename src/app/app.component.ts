import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoGroupComponent } from './components/todo-group/todo-group/todo-group.component';
import { ToDoStatus, TodoGroup, TodoItem } from './interfaces/todo-group.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public todoGroups: TodoGroup[];

  constructor() {
    this.todoGroups = [{
      title: 'ToDo',
      items: [{
        title: 'Сделать ToDo',
        description: 'Делаем ToDO Anular стрим',
        status: ToDoStatus.IN_PROGRESS
      },
      {
        title: 'Сделать вторую часть',
        description: 'Делаем ещё что-то',
        status: ToDoStatus.NOT_STARTED
      },
      {
        title: 'Смонтировать и выложить на канал',
        description: 'sdfghjkl;SDFJKL',
        status: ToDoStatus.DONE
      }
      ]
    }]
  }

  public addGroup(): void {
    let tempGroup: TodoGroup = {
      title: '',
      items: []
    }

    this.todoGroups.push(tempGroup)
  }

  public handleChangeTitle(value: { value: string, index: number }): void {
    this.todoGroups[value.index].title = value.value;
  }

  public handleDeleteGroup(value: number) {
    this.todoGroups.splice(value, 1)
  }

  public handleNewItem(value: { item: TodoItem, index: number }) {
    this.todoGroups[value.index].items.push(value.item);
  }

  public handleChangeDescription(value: { description: string, indexGroup: number, indexItem: number }) {
    this.todoGroups[value.indexGroup].items[value.indexItem].description = value.description;
  }

  public handleChangeStatus(value: { status: ToDoStatus, indexItem: number, groupIndex: number }): void {
    this.todoGroups[value.groupIndex].items[value.indexItem].status = value.status;
  }

  public handleDeleteItem(value: { indexItem: number, indexGroup: number }): void {
    this.todoGroups[value.indexGroup].items.splice(value.indexItem, 1);
  }

}
