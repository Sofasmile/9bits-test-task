import { Component, Input } from '@angular/core';
import { WizardService } from '../wizard.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() numberOfSteps: number;

  constructor(private wizardService: WizardService) {
  }

  public goNext(): void {
    this.wizardService.next();
  }

  public goBack(): void {
    this.wizardService.back();
  }

  public shouldShowBackButton(): Observable<boolean> {
    return this.wizardService.currentStep$.pipe(
      map(current => current > 1)
    );
  }

  public shouldShowNextButton(): Observable<boolean> {
    return this.wizardService.currentStep$.pipe(
      map(current => current < this.numberOfSteps)
    );
  }
}
