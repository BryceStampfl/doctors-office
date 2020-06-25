import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-tab-header',
  templateUrl: './tab-header.component.html',
  styleUrls: ['./tab-header.component.css']
})
export class TabHeaderComponent {
  @Output() outputToParent = new EventEmitter<string>();
  selectedTab = 'appointment';

  constructor() {
  }

  tabSelected(tab: string) {
    this.selectedTab = tab;
    this.outputToParent.emit(this.selectedTab);
  }

}
