import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WizardService {
  private currentStep = 1;

  private readonly currentStepSubject = new BehaviorSubject(this.currentStep);

  public readonly currentStep$
    = this.currentStepSubject.asObservable();

  public next(): void {
    this.currentStep++;
    this.currentStepSubject.next(this.currentStep);
  }

  public back(): void {
    this.currentStep--;
    this.currentStepSubject.next( this.currentStep);
  }
}
