import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    NgForOf,
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent{
  // receive data from parent
  @Input() dataFromParent!: string[];
  // send data to parent
  @Output() addOptionEvent = new EventEmitter<string>();
  @Output() deleteOptionEvent = new EventEmitter<void>();

  // add option => use event emitter to send data to parent
  addOption() {
    const newOption = `option${this.dataFromParent.length + 1}`
    this.addOptionEvent.emit(newOption);
  }

  // delete option => use event emitter to send action to parent
  deleteOption() {
    this.deleteOptionEvent.emit();
  }
}
