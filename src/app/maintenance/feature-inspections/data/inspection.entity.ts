export interface Inspection {
    id: string;
    name: string;
    description: string;
    date: Date;
    status: 'pending' | 'in-progress' | 'completed';
    assignedTo: string;
    location: string;
    notes: string;
    availableTaskNames: string[];
    plannedTasks: InspectionTask[];
    executedTasks: InspectionTask[];
}

export interface InspectionTask {
    id: string;
    taskName: string;
    taskDescription: string;
    taskDuration: number;
    completed: boolean;
}