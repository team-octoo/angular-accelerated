import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InspectionTask } from '../../../data/inspection.entity';

@Component({
    selector: 'app-inspection-task-list',
    templateUrl: './inspection-task-list.component.html',
    imports: [CommonModule, FormsModule],
})
export class InspectionTaskListComponent {
    @Input() tasks: InspectionTask[] = [];
    @Output() add = new EventEmitter<string>();

    newTaskName: string = '';

    calculateTaskDuraction(task: InspectionTask): number {
        return this.complicatedDuractionCalculation(task.taskDuration);
    }

    submitNewTaskOnEnter(event: any) {
        if (event.keyCode === 13) {
            this.add.emit(this.newTaskName);
            this.newTaskName = '';
        }
    }

    private complicatedDuractionCalculation(number: number): number {
        if (number === 1 || number === 2) {
            return 1;
        }
        
        return this.complicatedDuractionCalculation(number - 1) + this.complicatedDuractionCalculation(number - 2);
    }
}
