import { getAbsoluteUrl } from '../helpers/utils';
export class UrlService {
    static get dashboard() {
      return getAbsoluteUrl('transparency');
    }

    static get kgupPage() {
      return getAbsoluteUrl('transparency/uretim/planlama/kgup.xhtml');
    }
}