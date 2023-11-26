import { Component } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  constructor(public wizardService: WizardService) {
  }
}
