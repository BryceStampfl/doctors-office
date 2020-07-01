import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Output() hideWasPressed = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  hidePressed() {
    this.hideWasPressed.emit();
  }

}
