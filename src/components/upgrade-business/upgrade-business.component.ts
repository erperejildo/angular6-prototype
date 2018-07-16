import { Component, ViewChild, ElementRef } from '@angular/core';
import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({
  selector: 'app-upgrade-business',
  templateUrl: './upgrade-business.component.html',
  styleUrls: ['./upgrade-business.component.scss']
})
export class UpgradeBusinessComponent {
  @ViewChild('imgModeElem') imgModeElem: ElementRef;
  animator: AnimationBuilder;

  constructor(animationService: AnimationService) {
    this.animator = animationService.builder();
    this.animator.pin = false;
    this.animator.reject = false;
  }

  animate() {
    this.animator.setType('bounce').animate(this.imgModeElem.nativeElement).then(() => {
      // Animation finished
    });
  }
}
