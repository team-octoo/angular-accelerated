import { Component, inject, input, Signal, signal } from '@angular/core';
import { INSPECTIONS } from '../data/inspections.mock';
import { CommonModule } from '@angular/common';

import { Inspection, InspectionTask } from '../data/inspection.entity';
import { Router, RouterModule } from '@angular/router';
import { ActionItem } from "src/app/shared/ui-components";

@Component({
    selector: 'app-inspections-detail',
    templateUrl: './inspections-detail.component.html',
    styleUrls: ['./inspections-detail.component.css'],
    imports: [CommonModule, RouterModule, ActionItem],
})
export class InspectionsDetailComponent {
    private readonly _router = inject(Router);

    inspectionOverallScore: number | null = null;
    
    inspection: Inspection = INSPECTIONS[0];
    showDebugInfo = signal(false);

    id = input.required<string>();
    
    ngOnInit() {
        this.calculateOverallScore();
    }

    calculateTotalCompletedTasks(list: InspectionTask[]) {
        return list.filter(task => task.completed).length;
    }

    calculatePercentage(number: number): string {
        return `${Math.round(number * 100)}%`;
    }

    toggleDebugInfo(): void {
        this.showDebugInfo.update((shouldShow) => !shouldShow);
    }

    navigateToNextInspection(): void {
        let nextInspectionId = parseInt(this.id()) + 1;
        if (nextInspectionId > INSPECTIONS.length) nextInspectionId = 1;

        this._router.navigate(['/maintenance/inspections/detail', nextInspectionId]);
    }

    private calculateOverallScore() {
        const totalTasks = this.inspection.plannedTasks.length + this.inspection.executedTasks.length;
        const completedTasks = this.calculateTotalCompletedTasks(this.inspection.plannedTasks) + this.calculateTotalCompletedTasks(this.inspection.executedTasks);

        this.inspectionOverallScore = this.complicatedOverallScoreCalculation(completedTasks) / this.complicatedOverallScoreCalculation(totalTasks) * 100;
    }

    private complicatedOverallScoreCalculation(number: number): number {
        if (number === 1 || number === 2) {
            return 1;
        }
        
        return this.complicatedOverallScoreCalculation(number - 1) + this.complicatedOverallScoreCalculation(number - 2);
    }
}
