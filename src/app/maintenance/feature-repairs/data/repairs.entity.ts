export interface Repair {
    id: string;
    name: string;
    description: string;
    date: Date;
    status: 'pending' | 'in-progress' | 'completed';
    assignedTo: string;
    location: string;
    notes: string;
    price: number;
}