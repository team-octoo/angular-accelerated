import { Component, input, } from '@angular/core';

import { Inspection } from '../../../data/inspection.entity';
import Plotly from 'plotly.js-dist-min';

@Component({
    selector: 'app-inspection-graph',
    templateUrl: './inspection-graph.component.html',
    styleUrls: ['./inspection-graph.component.css'],
    imports: [],
})
export class InspectionGraphComponent {
    inspection = input.required<Inspection>();

    ngOnInit() {
        this.setupGraph();
    }

    private setupGraph() {
        const currentInspection = this.inspection();
        if (!currentInspection) {
            return;
        }

        const data = [
            {
                x: ['planned', 'executed'],
                y: [currentInspection.plannedTasks.length, currentInspection.executedTasks.length],
                type: 'bar'
            }
        ];

        Plotly.newPlot('inspection-graph', data as any);
    }
}
