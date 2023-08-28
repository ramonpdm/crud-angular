import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { CrudService } from "./crud.service"
import { Contact } from "../models/contact.interface"

@Injectable({
	providedIn: "root",
})
export class ContactService extends CrudService<Contact> {
	constructor(clientHttp: HttpClient) {
		super(clientHttp)
	}

	getModule(): string {
		return "contacts"
	}
}
