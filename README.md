## Application Manual

Application enables registration and login of user with three different roles (admin, moderator and user).
We can register user on sign up page. In this case user will get default role `ROLE_USER`.
User with admin and moderator role can be created through Postman. In this case roles have next formats:

- admin
- moderator
- user

As a user with `ROLE_ADMIN` we can create, edit and delete employees. All employees are shown in table.
As a user with `ROLE_USER` we can search for employee by email.

# AngularClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Status

Project is in progress.
