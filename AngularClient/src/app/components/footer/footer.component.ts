import { Component, OnInit } from '@angular/core';
import {FooterService} from '../../services/footer.service';
import {FooterLinks} from '../../models/footer-links.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  footers: FooterLinks[];

  constructor(private footerService: FooterService) { }

  ngOnInit(): void {
    this.footers = this.footerService.getFooters();
  }

}
