import { Injectable } from '@angular/core';
import {DataLoaderService} from './data-loader.service';
import {FooterLinks} from '../models/footer-links.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  footers: FooterLinks[];

  constructor(private dataLoader: DataLoaderService) {
    this.footers = dataLoader.loadFooters();
  }

  getFooters(){
    return this.footers.slice();
  }
}
