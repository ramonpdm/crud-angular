import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"

import { AddContactComponent } from "./components/contacts/add/add.component"
import { UpdateContactComponent } from "./components/contacts/update/update.component"
import { ListContactComponent } from "./components/contacts/list/list.component"
import { ViewContactComponent } from "./components/contacts/view/view.component"

import { AddPhoneComponent } from "./components/phones/add/add.component"
import { UpdatePhoneComponent } from "./components/phones/update/update.component"

import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { HttpClientModule } from "@angular/common/http"

@NgModule({
	declarations: [AppComponent, AddContactComponent, UpdateContactComponent, ListContactComponent, ViewContactComponent, AddPhoneComponent, UpdatePhoneComponent],
	imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
