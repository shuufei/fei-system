# fei system

## [fei components] Get Start

### Download

npm installを実施。
```sh
npm install fei-system
npm install bootstrap
```

### Module Import

app.module(適宜変更)でFeiComponentsModuleをImport。

```ts:app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { FeiComponentsModule } from 'fei-system'; // 追記

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FeiComponentsModule // 追記
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

### GlobalStyleの取り込み

angular.jsonのassetsとstylesにfei componentsで利用するassetsとglobal styleを取り込む

```json:angular.json
  "assets": [
      "...",
      { "glob": "**/*", "input": "node_modules/fei-system/projects/fei-components/src/assets/", "output": "/assets/"}
  ],
  "styles": [
    "...",
    "node_modules/fei-system/projects/fei-components/src/scss/00-styles.scss",
    "node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
  ],
```

### @angularパスを明示的に指定

tsconfig.jsonのpathsに下記を追記し、利用されるangularを明示的に指定する。

```json:tsconfig.json
"paths": {
  "@angular/*": ["node_modules/@angular/*"]
}
```

### ImportしたNgModuleの管理下でfei componentsを利用

ここまで実施すると、fei componentsが利用できるようになる。

```html
<fei-button></fei-button>
```

## [fei components] Storybookの取り込み

### Storybook Setup

[Storyboo for Angular](https://storybook.js.org/docs/guides/guide-angular/)を参考に、Storybookのsetupを行う。

### Download

npm installを実施。

```sh
npm install @storybook/addon-actions
npm install @storybook/addon-knobs
npm install @storybook/addon-links
```

### addons.jsの作成

.storybook/addons.jsを作成する

```js:addons.js
import '@storybook/addon-actions/register';
import '@storybook/addon-knobs/register';
import '@storybook/addon-links/register';
```

### config.jsの変更

config.jsを編集し、fei componentsのstoryファイルを取り込み対象にする。

```js:config.js
import { configure } from '@storybook/angular';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.ts$/);
  req.keys().forEach(filename => req2(filename));

  const feiReq = require.context('../node_modules/fei-system/stories', true, /\.stories\.ts$/); // 追記
  feiReq.keys().forEach(filename => feiReq(filename)); // 追記
}
configure(loadStories, module);
```

### storybookを立ち上げ確認

下記コマンドでstorybookを立ち上げて確認

```sh
npm run stroybook
```
