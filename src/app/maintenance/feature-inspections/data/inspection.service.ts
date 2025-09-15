import { delay, Observable, of } from "rxjs";
import { INSPECTIONS } from "./inspections.mock";
import { Inspection } from "./inspection.entity";

export class InspectionService {
    getInspectionById(id: string): Observable<Inspection | null> {
        return of(INSPECTIONS.find(inspection => inspection.id === id) || null).pipe(delay(250));
    }
}