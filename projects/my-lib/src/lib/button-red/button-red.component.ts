import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-button-red',
  templateUrl: './button-red.component.html',
  styleUrls: ['./button-red.component.scss']
})
export class ButtonRedComponent {
  @Input() name:string | undefined
}
