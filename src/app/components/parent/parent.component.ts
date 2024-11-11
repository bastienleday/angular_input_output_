import { Component } from '@angular/core';
import {ChildComponent} from "../child/child.component";

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    ChildComponent
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  // Initial state
  state = [
    'option1',
    'option2',
    'option3',
  ]

  // Add option from child => react to the emitter in the child component
  addOptionFromChild(event: string) {
    this.state.push(event);
  }

  // Delete option from child => react to the emitter in the child component
  deleteOption() {
    this.state.pop();
  }

}
