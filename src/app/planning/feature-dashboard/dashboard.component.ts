import { Component, inject } from '@angular/core';
import { PlanningService } from '../data/planning.service';
import { shareReplay } from 'rxjs';
import Plotly from 'plotly.js-dist-min';

import { Planning } from '../data/planning.entity';

@Component({
    selector: 'app-planning-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [PlanningService],
})
export class PlanningDashboardComponent {
    private readonly _planningService = inject(PlanningService);

    planningLoaded = false;
    totalPlannedTasks = 0;
    totalExecutedTasks = 0
    status = 'loading';

    planning$ = this._planningService.getPlanning().pipe(shareReplay());

    ngOnInit() {
        this.planning$.subscribe((planning) => {
            if (planning) {
                this.planningLoaded = true;
                this.totalPlannedTasks = planning.plannedTasks.length;
                this.totalExecutedTasks = planning.executedTasks.length;
                this.status = planning.status;

                this.createGraph(planning);
            }
        });
    }

    private createGraph(planning: Planning) {
        const data = [
            {
                x: ['planned', 'executed'],
                y: [planning.plannedTasks.length, planning.executedTasks.length],
                type: 'bar'
            }
        ];
        
        Plotly.newPlot('planning-graph', data as any);
    }
}
