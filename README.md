<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/tinesoft/ngx-wow/master/demo/src/assets/logo.svg">
</p>

# ngx-wow - Angular module for WOW.js.

[![npm version](https://badge.fury.io/js/ngx-wow.svg)](https://badge.fury.io/js/ngx-wow)
[![Build Status](https://travis-ci.org/tinesoft/ngx-wow.svg?branch=master)](https://travis-ci.org/tinesoft/ngx-wow)
[![Coverage Status](https://coveralls.io/repos/github/tinesoft/ngx-wow/badge.svg?branch=master)](https://coveralls.io/github/tinesoft/ngx-wow?branch=master)
[![dependency Status](https://david-dm.org/tinesoft/ngx-wow/status.svg)](https://david-dm.org/tinesoft/ngx-wow)
[![devDependency Status](https://david-dm.org/tinesoft/ngx-wow/dev-status.svg?branch=master)](https://david-dm.org/tinesoft/ngx-wow#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/tinesoft/ngx-wow.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://tinesoft.github.io/ngx-wow

## Dependencies

* [Angular](https://angular.io) (*requires* Angular 6+(tested with `v6.1.9`), [v1.0.2](https://github.com/tinesoft/ngx-wow/tree/v1.0.2) is the latest version for Angular < 6 )
* [WOW JS](http://mynameismatthieu.com/WOW/) (*requires* WOW JS 1.1 or higher, tested with 1.1.3)


## Installation

Install above dependencies via *npm*. In particular for `WOW JS`, run:
```shell
npm install --save wowjs
```

---
##### Angular-CLI

>**Note**: If you are using `angular-cli` to build your app, make sure that `wowjs` is properly listed as a [global library](https://github.com/angular/angular-cli#global-library-installation), by editing your `angular-cli.json` as such:
```
      "scripts": [
        "../node_modules/wowjs/dist/wow.js"
      ],
```

Also make sure that [Animate.css](which is already installed and used internally by `wowjs` to actually animate items) is listed as [global style](https://github.com/angular/angular-cli/wiki/stories-global-styles), by either:

* editing `angular-cli.json` as such:
```
      "styles": [
        "../node_modules/animate.css/animate.css"
      ],
```
* or by importing in your main `styles.scss` (or `styles.sass`, `styles.less`, `styles.styl`) file as such:
```sass
...
@import "~animate.css/animate.css";
...
```

##### SystemJS

>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-wow`:

```js
map: {
  'ngx-wow': 'node_modules/ngx-wow/bundles/ngx-wow.min.js',
}
```

In your systemjs config file, `meta` needs to tell the System loader how to load `wowjs`:

```js
    meta: {
    './node_modules/wowjs/dist/wow.min.js': {
            format: 'amd'
        }
    }
```
In your index.html file, add script tag to load  `wowjs` globally:
```html
    <!-- 1. Configure SystemJS -->
    <script src="system.config.js"></script>
    <!-- 2. Add WOW dependency-->
    <script src="node_modules/wowjs/dist/wow.min.js"></script>
```

And add a reference to the `Animate.css` in the head section:
```html
<head>
  <link rel="stylesheet" type="text/css" href="node_modules/animate.css/animate.min.css">
</head>
```

---

Now install `ngx-wow` via:
```shell
npm install --save ngx-wow
```

Once installed you need to import the main module:
```ts
import { NgwWowModule } from 'ngx-wow';
```

```ts
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgwWowModule, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```


## Usage

Once the module is imported, you can use the `NgwWowService` in your component (i.e. `AppComponent`) to trigger reveal animation by calling `init()` or to be notified by WOW when an element is revealed.

Here is how it works:

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  // keep refs to subscription to be abble to unsubscribe later
  // (NOTE: unless you want to be notified when an item is revealed by WOW,
  //  you absolutely don't need this line and related, for the library to work
  // only the call to `this.wowService.init()` at some point is necessary
  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService){
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init(); 
    });
  
  }

  ngOnInit() {
    // you can subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }

  ngOnDestroy() {
    // unsubscribe (if necessary) to WOW observable to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }
}

```

See [WOW.js Documentation](https://github.com/matthieua/WOW#advanced-usage) to see more about how to customize animation settings.

## Credits

`ngx-wow` is built upon [WOW.js](http://mynameismatthieu.com/WOW/), created by [Matthieu Aussaguel](http://mynameismatthieu.com/)

## License

Copyright (c) 2018 Tine Kondo. Licensed under the MIT License (MIT)

