import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-button-dark',
  templateUrl: './button-dark.component.html',
  styleUrls: ['./button-dark.component.scss']
})
export class ButtonDarkComponent {
  @Input() name:string | undefined
}
