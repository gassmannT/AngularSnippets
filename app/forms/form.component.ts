import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    template: `
        <h1>Forms in Angular</h1>
        <ul>
            <li><a routerLink="template-driven" routerLinkActive="active">Template-Driven-Forms</a></li>
            <li><a routerLink="reactive" routerLinkActive="active">Reactive-Forms</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class FormComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}