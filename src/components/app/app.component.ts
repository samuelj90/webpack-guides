import { Component } from 'angular-ts-decorators';
const template = require('./app.component.html');
@Component({
    selector: 'app',
    template,
})
export class AppComponent {
    private title: string = 'Hello Webpack'
}
