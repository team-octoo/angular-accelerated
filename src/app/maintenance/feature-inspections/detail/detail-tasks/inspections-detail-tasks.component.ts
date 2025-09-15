import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inspection, InspectionTask } from '../../data/inspection.entity';
import { InspectionTaskListComponent } from '../ui-components/inspection-task-list/inspection-task-list.component';
import { InspectionGraphComponent  } from "../ui-components/inspection-graph/inspection-graph.component";
import { INSPECTIONS } from '../../data/inspections.mock';

@Component({
    selector: 'app-inspections-detail-tasks',
    templateUrl: './inspections-detail-tasks.component.html',
    styleUrls: ['./inspections-detail-tasks.component.css'],
    imports: [CommonModule, InspectionTaskListComponent, InspectionGraphComponent],
})
export class InspectionsDetailTasksComponent {
    inspection: Inspection = INSPECTIONS[0];
    showDebugInfo: boolean = false;

    addNewTaskToList(list: InspectionTask[], newTaskName: string) {
        list.push({
            id: self.crypto.randomUUID(),
            taskName: newTaskName,
            taskDescription: 'Newly added task',
            taskDuration: 5,
            completed: false,
        });
    }

    calculateTotalCompletedTasks(list: InspectionTask[]) {
        return list.filter(task => task.completed).length;
    }
}
