import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  Task,
  TaskService
} from '../../task.barrel';
import {
  Timekeeper
} from '../../../shared/shared.barrel';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {
  public loading: boolean;
  @Timekeeper() public now: number;
  @Input() public disabled: boolean;
  @Input() public task: Task;
  @Output() public onError = new EventEmitter();
  @Output() public onDelete = new EventEmitter<Task>();

  public constructor(private _taskService: TaskService, public _taranslateService: TranslateService) {
    //
  }

  public ngOnInit() {
    //
  }

  public updateTask(task: Task) {
    this.loading = true;
    this._taskService.update(
      task,
      {
        success: updatedTask => task = updatedTask,
        error: error => this.onError.emit(),
        finally: () => this.loading = false
      }
    )
  }

  public deleteTask(task: Task) {
    const param = task.name;
    this._taranslateService.get('task.confirm', {value: task.name}).subscribe((res: string) => {
      if (!window.confirm(res)) {
        return;
      }
      this.loading = true;
      this._taskService.delete(
        task,
        {
          success: response => this.onDelete.emit(task),
          error: error => this.onError.emit(),
          finally: () => this.loading = false
        }
      );
    });
  }

}
