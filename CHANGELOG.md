<a name="2.0.1"></a>
## [2.0.1](https://github.com/tinesoft/ngx-wow/compare/v2.0.0...v2.0.1) (2019-02-10)


### Bug Fixes

* **typings:** change typing for `scrollContainer` (now `string` instead of `HTMLElement`) ([00c57f7](https://github.com/tinesoft/ngx-wow/commit/00c57f7))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/tinesoft/ngx-wow/compare/v1.0.2...v2.0.0) (2018-10-09)


### Bug Fixes

* **core:** item reveal events not fired if initialising WowService with no arguments ([ec56d5e](https://github.com/tinesoft/ngx-wow/commit/ec56d5e)), closes [#19](https://github.com/tinesoft/ngx-wow/issues/19)


### Features

* **core:** update to `Angular v6.x.x` and higher ([ccdab37](https://github.com/tinesoft/ngx-wow/commit/ccdab37))


### BREAKING CHANGES

* **core:** `forRoot()` on `NgwWowModule` has been removed as no longer necessary

Before:

```ts
import {NgwWowModule} from 'ngx-wow';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgwWowModule.forRoot()],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

After:

```ts
import {NgwWowModule} from 'ngx-wow';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgwWowModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}



<a name="1.0.2"></a>
## [1.0.2](https://github.com/tinesoft/ngx-wow/compare/v1.0.1...v1.0.2) (2017-12-31)


### Bug Fixes

* **animate.css:** update documentation about the necessary  setup of `animate.css` ([e0ed09d](https://github.com/tinesoft/ngx-wow/commit/e0ed09d))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/tinesoft/ngx-wow/compare/v1.0.0...v1.0.1) (2017-12-21)


### Bug Fixes

* **doc:** update README with installation instructions ([e5acacc](https://github.com/tinesoft/ngx-wow/commit/e5acacc))



<a name="1.0.0"></a>
# [1.0.0](https://github.com/tinesoft/ngx-wow/compare/9d1aa28...v1.0.0) (2017-10-18)


### Features

* **all:** initial version ([9d1aa28](https://github.com/tinesoft/ngx-wow/commit/9d1aa28))



