import { delay, Observable, of } from "rxjs";
import { Planning } from "./planning.entity";

export class PlanningService {
    getPlanning(): Observable<Planning> {
        return of({
            id: '1',
            name: 'Schedule 1',
            description: 'Description for Schedule 1',
            date: new Date(),
            status: 'pending' as 'pending' | 'in-progress' | 'completed',
            assignedTo: 'User 1',
            location: 'Location 1',
            notes: 'Notes for Schedule 1',
            availableTaskNames: ['Task 1', 'Task 2'],
            plannedTasks: [
                ...Array.from({ length: 40 }, (_, i) => ({
                    id: self.crypto.randomUUID(),
                    taskName: `Planned Task ${i + 1}`,
                    taskDescription: `Description for planned task ${i + 1}.`,
                    taskDuration: 10 + i,
                    completed: i % 2 === 0,
                }))
            ],
            executedTasks: [
                ...Array.from({ length: 10 }, (_, i) => ({
                    id: self.crypto.randomUUID(),
                    taskName: `Executed Task ${i + 1}`,
                    taskDescription: `Description for executed task ${i + 1}.`,
                    taskDuration: 10 + i,
                    completed: i % 2 === 0,
                }))
            ]
        }).pipe(delay(300));
    }
}