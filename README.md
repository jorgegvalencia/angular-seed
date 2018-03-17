# AngularSeed

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Settings

* The project is set up with the sass preprocessor and the scss syntax.
* The project can be built with the angular-cli and webpack. Configuration of the build process can be customized by ejecting the webpack config file `ng eject`. (Not recommended)
* By default, components will be prefixed with 'app'. To change this, change the prefix property in the .angular-cli.json file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

The application directory structure is divided in 3 main folders:
* The _/shared_ folder contains the components, services and utilities that the core components and page features use to build the application sections. These are application domain agnostic and should be easily portable to/from other applications.
* The _/core_ folder contains the main building blocks of the application, singleton services and single usage components.
* The _/pages_ folder contains all the feature modules that compose the application. These modules are thought for easing the process of adding or removing new pages.

Basic rules:
* The components from the _core_ and _pages_ folders can have dependencies from _shared components_. 
* There should be **no dependencies** between the modules _core_ and _pages modules_.
* The pages modules are imported in the main module of the application, `app.module`.
* The `app.routing` file defines the routes of the application and acts as a link of the _core_ module and the application  _pages modules_.
* Services should be placed on pages modules, unless they are called from multiple feature modules. In that case these services should be placed in the _core module_ or the _shared module_.

* Do put a singleton service whose instance will be shared throughout the application in the _core_ module.
* Do import all modules required by the assets in the _core_ module.
* Do gather application-wide, single use components in the _core_ module.
* Do export all symbols from the _core_ module that the _app_ module will import and make available for other _pages modules_ to use.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Model mapping
The JSON objects used in the client-server communications can be easily mapped to model classes using annotations and the [json2typescript module](https://github.com/dhlab-basel/json2typescript). Using javascript classes promotes the use of an object oriented programming aproach, easing the development process and reducing errors during compilation time.

```typescript
// data.ts

import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject
export class ExampleData {
  @JsonProperty('id', Number)
  id: number = undefined;
  @JsonProperty('data1', String)
  data1: string = undefined;
  @JsonProperty('data2', String)
  data2: string = undefined;
}

// service.ts
import { ExampleData } from '../../core/models/data';

getSomeData(): Observable<ExampleData> {
  return this.http.get('<endpoint>')
    .map((data) => {
      return this.jsonModelMapper.deserialize(data, ExampleData);
    })
    .catch((err) => {
      ...
    });
}
```

`json2typescript` forces us to initialize the properties, with the use of 'undefined' in case we don't really want to assign an initial value. (Refer to documentation at [json2typescript module](https://github.com/dhlab-basel/json2typescript) for more information).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
