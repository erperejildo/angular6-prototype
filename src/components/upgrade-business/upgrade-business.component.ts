import { Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({
  selector: 'app-upgrade-business',
  templateUrl: './upgrade-business.component.html',
  styleUrls: ['./upgrade-business.component.scss']
})
export class UpgradeBusinessComponent {
  @ViewChild('step1') step1: ElementRef;
  @ViewChild('step2') step2: ElementRef;
  animator1: AnimationBuilder;
  animator2: AnimationBuilder;

  constructor(animationService: AnimationService) {
    this.animator1 = animationService.builder();
    this.animator1.pin = false;
    this.animator1.reject = false;
    // we created 2 cause we need 2 different animations at the same time
    this.animator2 = animationService.builder();
    this.animator2.pin = false;
    this.animator2.reject = false;
  }

  animate() {
    this.animator1.setType('slideOutLeft').hide(this.step1.nativeElement).then(() => {
      // Animation finished
    });
    this.animator2.setType('slideInRight').show(this.step2.nativeElement);
  }
}
