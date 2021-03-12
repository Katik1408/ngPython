import {Component} from '@angular/core';

@Component({
    selector:'basic',
    template:`<h1>Hello from BasicComponent </h1>
    <p>This is para</p>
    `,
    styles:['h1{color:red;}']
})
export class BasicComponent{}