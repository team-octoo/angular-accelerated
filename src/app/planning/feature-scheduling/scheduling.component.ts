import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { PlanningService } from '../data/planning.service';
import { BehaviorSubject, map, Subject, takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

import { PlanningTaskItemComponent } from "../ui-components/planning-task-item/planning-task-item.component";

@Component({
    standalone: true,
    selector: 'app-planning-scheduling',
    imports: [CommonModule, PlanningTaskItemComponent],
    providers: [PlanningService],
    templateUrl: './scheduling.component.html',
    styleUrls: ['./scheduling.component.css'],
})
export class PlanningSchedulingComponent implements OnInit, OnDestroy {
    private readonly _planningService = inject(PlanningService);

    destroy$ = new Subject<void>();
    isLoading$ = new BehaviorSubject<boolean>(true);

    planning$ = this._planningService.getPlanning();
    status$ = this.planning$.pipe(map(planning => planning.status));

    ngOnInit() {
        this.planning$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.isLoading$.next(false);
        });
    }

    ngOnDestroy() {
        this.destroy$.next();
    }
}
