import { delay, Observable, of } from "rxjs";
import { REPAIRS } from "./repairs.mock";
import { Repair } from "./repairs.entity";

export class RepairsService {
    getAll(): Observable<Repair[]> {
        return of(REPAIRS).pipe(delay(250));
    }
}