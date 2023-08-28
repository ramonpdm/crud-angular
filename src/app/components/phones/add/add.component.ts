import { Component } from "@angular/core"
import { FormGroup, FormBuilder } from "@angular/forms"
import { PhoneService } from "src/app/services/phone.service"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
	selector: "app-add",
	templateUrl: "./add.component.html",
	styleUrls: ["./add.component.css"],
})
export class AddPhoneComponent {
	// Formulario
	phoneForm: FormGroup

	constructor(private activeRoute: ActivatedRoute, public form: FormBuilder, private crudService: PhoneService, private router: Router) {
		// Establecer los campos del formulario
		this.phoneForm = this.form.group({
			id_contact: this.activeRoute.snapshot.paramMap.get("id_contact"),
			phone: [""],
		})
	}

	// Metodo para crear el telefono
	sendData(): any {
		this.crudService.add(this.phoneForm.value).subscribe((data) => {
			// Redigir a la vista del contacto al que pertenece el telefono
			this.router.navigateByUrl(`/contacts/view/${this.phoneForm.value.id_contact}`)
		})
	}
}
