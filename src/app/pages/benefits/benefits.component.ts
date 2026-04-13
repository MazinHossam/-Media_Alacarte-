import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  imports: [NgClass],
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.css'
})
export class BenefitsComponent {
activeTab = 'access';

activeClass =
  'px-6 py-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white';

defaultClass =
  'px-6 py-2 rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition';

setTab(tab: string) {
  this.activeTab = tab;
}
}
