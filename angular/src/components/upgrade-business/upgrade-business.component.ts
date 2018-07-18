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
  @ViewChild('step3') step3: ElementRef;
  @ViewChild('checkIcon') checkIcon: ElementRef;
  @ViewChild('updatedMessage') updatedMessage: ElementRef;
  animator1: AnimationBuilder;
  animator2: AnimationBuilder;
  upgradeOptions: Array<object>;
  selectedUpgradeOption: number;

  constructor(animationService: AnimationService) {
    this.animator1 = animationService.builder();
    this.animator1.pin = false;
    this.animator1.reject = false;
    // we created 2 cause we need 2 different animations at the same time
    this.animator2 = animationService.builder();
    this.animator2.pin = false;
    this.animator2.reject = false;

    // getting data "dinamically"
    this.upgradeOptions = [
      {
        description: 'Outbound flight',
        price: 1082
      },
      {
        description: 'Inbound flight',
        price: 1172
      },
      {
        description: 'Both ways',
        price: 1742
      }
    ];
  }

  animate() {
    this.animator1.setType('slideOutLeft').hide(this.step1.nativeElement);
    this.animator2.setType('slideInRight').show(this.step2.nativeElement);
  }

  selectUpgradeOption(index) {
    this.selectedUpgradeOption = index;
    console.log('option selected: ', this.upgradeOptions[index]);
  }

  finishUpgrade() {
    this.animator1.setType('slideOutLeft').hide(this.step2.nativeElement);
    this.animator2.setType('slideInRight').show(this.step3.nativeElement).then(() => {
      this.animator1.setType('rotateIn').show(this.checkIcon.nativeElement).then(() => {
        this.animator1.setType('bounceIn').show(this.updatedMessage.nativeElement);
      });
    });
  }
}
