import { Component, inject } from '@angular/core';
import { RepairsService } from './data/repairs.service';
import { CommonModule } from '@angular/common';
import { RepairsListComponent } from "./ui-components/repairs-list/repairs-list.component";
import { RepairsSearchComponent } from './ui-components/repairs-search/repairs-search.component';

@Component({
    selector: 'app-repairs',    
    templateUrl: './repairs.component.html',
    styleUrls: ['./repairs.component.css'],
    imports: [CommonModule, RepairsListComponent, RepairsSearchComponent],
    providers: [RepairsService],
})
export class RepairsComponent {
    private readonly _repairsService = inject(RepairsService);

    repairs$ = this._repairsService.getAll();
}
