import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-generator',
  templateUrl: './list-generator.component.html',
  styleUrls: ['./list-generator.component.css']
})
export class ListGeneratorComponent {
@Input()
items: any[] = []
@Input() direction: string = 'row';
style: string=""
@Output()
select = new EventEmitter<string>();
}
