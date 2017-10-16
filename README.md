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
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-wow` via:
```shell
npm install --save ngx-wow
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-wow`:
```js
map: {
  'ngx-wow': 'node_modules/ngx-wow/bundles/ngx-wow.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { NgwWowModule } from 'ngx-wow';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` NgwWowModule.forRoot()`):
```js
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgwWowModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` NgwWowModule `:

```js
import { NgwWowModule } from 'ngx-wow';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgwWowModule, ...], 
})
export class OtherModule {
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

  //keep refs to subscription to be abble to unsubscribe later
  private wowSubscription: Subscription;

  constructor(private router: Router, private wowService: NgwWowService){
    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      // Reload WoW animations when done navigating to page,
      // but you are free to call it whenever/wherever you like
      this.wowService.init(); 
    });
  
  }

  ngOnInit() {
    // subscribe to WOW observable to react when an element is revealed
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }

  ngOnDestroy() {
    // unsubscribe to cookieconsent observables to prevent memory leaks
    this.wowSubscription.unsubscribe();
  }
}

```

See [WOW.js Documentation](https://github.com/matthieua/WOW#advanced-usage) to see more about how to customize animation settings.

## Credits

`ngx-wow` is built upon [WOW.js](http://mynameismatthieu.com/WOW/), created by [Matthieu Aussaguel](http://mynameismatthieu.com/)

## License

Copyright (c) 2017 Tine Kondo. Licensed under the MIT License (MIT)

