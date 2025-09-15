export interface Planning {
    id: string;
    name: string;
    description: string;
    date: Date;
    status: 'pending' | 'in-progress' | 'completed';
    assignedTo: string;
    location: string;
    notes: string;
    availableTaskNames: string[];
    plannedTasks: PlanningTask[];
    executedTasks: PlanningTask[];
}

export interface PlanningTask {
    id: string;
    taskName: string;
    taskDescription: string;
    taskDuration: number;
    completed: boolean;
}