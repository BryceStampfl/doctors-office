import {Link} from './link.model';

export class FooterLinks{
  constructor(
    public header: string,
    public links: Array<Link>
  ) {
  }
}
