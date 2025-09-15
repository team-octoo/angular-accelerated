import { Repair } from "./repairs.entity";

export const REPAIRS: Repair[] = [
    ...Array.from({ length: 40 }, (_, i) => ({
        id: `${i + 1}`,
        name: `Repair Task ${i + 1}`,
        description: `Description for repair task ${i + 1}.`,
        date: new Date(`2024-05-${(i % 30) + 1}`),
        location: i % 2 === 0 ? 'De Kien' : 'De Kade',
        status: i % 3 === 0 ? 'pending' : i % 3 === 1 ? 'in-progress' : 'completed' as 'pending' | 'in-progress' | 'completed',
        assignedTo: `Technician ${((i % 5) + 1)}`,
        notes: `Notes for repair task ${i + 1}.`,
        price: Math.round(Math.random() * 1000 + 100),
    })),
];

