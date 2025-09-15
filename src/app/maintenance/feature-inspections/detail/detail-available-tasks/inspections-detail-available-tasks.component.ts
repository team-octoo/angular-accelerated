import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Inspection } from '../../data/inspection.entity';
import { INSPECTIONS } from '../../data/inspections.mock';

@Component({
    selector: 'app-inspections-detail-available-tasks',
    templateUrl: './inspections-detail-available-tasks.component.html',
    styleUrls: ['./inspections-detail-available-tasks.component.css'],
    imports: [CommonModule],
})
export class InspectionsDetailAvailableTasksComponent {
    inspection: Inspection = INSPECTIONS[0];
    showDebugInfo: boolean = false;
}
