import {Component, Input, OnInit} from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() numberOfSteps: number;

  stepsArray: number[];

  constructor(public wizardService: WizardService) {
  }

  ngOnInit(): void {
    this.stepsArray = this.getNumberOfSteps();
  }

  private getNumberOfSteps(): number[] {
    const array = new Array(this.numberOfSteps);

    for (let i = 0; i < array.length; i++) {
      array[i] = i + 1;
    }
    return array;
  }
}
