import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { Title, Meta } from "@angular/platform-browser";

@Component({
    template: `
    <h1>SEO Features Angular 4</h1>
    <div>
        <p>see browser title and metadata</p>
        <p>Use class Title and Meta from <code>@angular/platform-browser</code> </p>
    </div>
    `
})
export class SeoComponent implements OnInit {

    constructor(private title: Title, private meta: Meta) { }

    ngOnInit() {
        //new in Angular 4 for SEO
        this.title.setTitle(`SEO Features`);
        this.meta.addTag({
            name: "Description",
            content: "New SEO Features in Angular 4",
        });
    }
}