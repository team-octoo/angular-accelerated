import { Component, input } from '@angular/core';
import { PlanningTask } from '../../data/planning.entity';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-planning-task-item',
    templateUrl: './planning-task-item.component.html',
    imports: [],
})
export class PlanningTaskItemComponent {
    task = input<PlanningTask | null>(null);

    reloadTask$ = new Subject<void>();

    ngOnInit() {
        // Simulate a task reload after 5 seconds
        setTimeout(() => {
            this.reloadTask$.next();
        }, 100);
    }
}
