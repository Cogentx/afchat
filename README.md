# afchat

Pluggable Chat Module for Angular Web apps as an Angular Library.

## How to use

### Installation

Run `firebase use <project id>` to switch to using your own Firebase project.
Set your Firebase project settings in the `environment` file. Your Firebase project must have Firestore, Auth and Hosting enabled.

#### NPM

Run `npm run deploy` to automatically deploy the project to Firebase.

#### Yarn

If you're using Yarn, the deployment command is `yarn run deploy`.

### Firebase Configuration

Your Firebase project must have Firestore, Auth and Hosting enabled.
You may run `firebase init` if you'd like to reconfigure the Firebase project settings, otherwise a `firebase use <project id>` should do the trick.

If you are part of the core development team, the Firebase access credentials have already been shared with you, but this is for our shared development environment. You may use your own Firebase project for development.

## BrowserStack

A big shoutout and thanks to the kind folks over at [BrowserStack](https://www.browserstack.com/) for letting us register as a non-profit and use their testing suite free of charge! If you're an open source project, head over to their site to get free access to their automated and manual testing suite!

### AfChatModule

## Contributing

Please join the `afchat` development community, by signing up [here](https://bit.ly/afpg-info)

## TODO

* get a markdown editor/reader
* write style guides
* assemble group of open source coders on npm, github, slack, firebase
* define organisational structure and leadership roles
* tie in "sponsorship/pr" from private companies
* use git-cz and a commit standard/policy
* automate build/test process
* set up .env vars
* publish initial package to npm (devops this)
* look into any devops

## Development
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.2.

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

## BrowserStack Usability Testing

Using Automate to automatically test afchat.

## Further help

To get more help on the Angular Fire Chat - join the [slack channel](https://join.slack.com/t/afpg-init/shared_invite/enQtNDgzODE1MzA5MjM0LTMyYzkxY2NlMDZmZWE4ZjI5MGUzNTFmMGNiN2JmODJhYmQwMjM2OTYxYmRjOTU2ZjVlNzRmYmFkZTIxNjA5NzM)
