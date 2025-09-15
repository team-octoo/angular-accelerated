import { Component, EventEmitter, input, Output } from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-action-item',
    imports: [],
    templateUrl: './action-item.component.html',
    styleUrls: ['./action-item.component.css'],
})
export class ActionItem {
    type = input<string>('button');

    @Output() onClick: EventEmitter<Event> = new EventEmitter();

    onButtonClick(event: Event) {
        this.onClick.emit(event);
    }
}
