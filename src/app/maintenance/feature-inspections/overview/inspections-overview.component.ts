import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-inspections-overview',
    imports: [RouterModule],
    templateUrl: './inspections-overview.component.html',
    styleUrls: ['./inspections-overview.component.css'],
})
export class InspectionsOverviewComponent {
    public activatedRoute = inject(ActivatedRoute);
}
