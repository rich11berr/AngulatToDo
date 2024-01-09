import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDoStatus, TodoItem } from '../../../interfaces/todo-group.interface';

@Directive({
  standalone: true,
})
export class TodoItemBaseComponent implements OnInit {
  @Input() todoItem!: TodoItem;
  @Input() index!: number;

  @Output() eventChangeDescription = new EventEmitter<{ description: string, index: number }>();

  @Output() changeStatus = new EventEmitter<{ status: ToDoStatus, index: number }>()

  @Output() deleteItem = new EventEmitter<number>()

  public todoStatus = ToDoStatus;

  public isShowDescriptions = false;

  public description?: string;

  ngOnInit(): void {
    this.description = this.todoItem.description;
  }

  public emitChangeDescription(value: string): void {
    this.eventChangeDescription.emit({ description: value, index: this.index });
  }

  public emitChangeStatus(value: ToDoStatus): void {
    this.changeStatus.emit({ status: value, index: this.index })
  }

  public emitDeleteItem(): void {
    this.deleteItem.emit(this.index)
  }

}
