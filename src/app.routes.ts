import * as router from "angular-ui-router";
import { IComponentState } from './main';
import { AppComponent } from './components/app/app.component';

export const routes: IComponentState[] = [
    { state: 'root', url: '/', component: AppComponent }
];
