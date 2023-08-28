import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { CrudService } from "./crud.service"
import { Phone } from "../models/phone.interface"

@Injectable({
	providedIn: "root",
})

export class PhoneService extends CrudService<Phone> {
	constructor(clientHttp: HttpClient) {
		super(clientHttp)
	}

	getModule(): string {
		return "phones"
	}
}
