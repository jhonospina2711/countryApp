import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

<<<<<<< HEAD

platformBrowserDynamic().bootstrapModule(AppModule)
=======
platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
>>>>>>> 5dbefe8 (initial commit)
  .catch(err => console.error(err));
