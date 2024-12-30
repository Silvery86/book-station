import { startStimulusApp } from '@symfony/stimulus-bundle';
import { Controller } from './vendor/@hotwired/stimulus/stimulus.index';

const app = startStimulusApp();

/**
 * App initialization.
 */
app.register(
  'init',
  class extends Controller {
    initialize() {
      const module = this.element.getAttribute('data-x-module');
      const head = this.element.querySelector('head');

      if (head) {
        let favicon = document.createElement('link');

        favicon.setAttribute('rel', 'icon');
        favicon.setAttribute('type', 'image/x-icon');

        if (module === 'app') {
          favicon.href = 'assets/images/favicon.ico';
        } else {
          favicon.href = 'assets/' + module + '/images/favicon.ico';
        }

        head.appendChild(favicon);
      }
    }
  }
);
