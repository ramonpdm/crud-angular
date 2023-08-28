import { Component } from "@angular/core"
import { FormGroup, FormBuilder } from "@angular/forms"
import { PhoneService } from "src/app/services/phone.service"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
	selector: "app-update",
	templateUrl: "./update.component.html",
	styleUrls: ["./update.component.css"],
})
export class UpdatePhoneComponent {
	// Variable para el ID del telefono
	ID: any

	// Formulario
	phoneForm: FormGroup

	constructor(private activeRoute: ActivatedRoute, public form: FormBuilder, private crudService: PhoneService, private router: Router) {
		// Obtener el ID de la URL
		this.ID = this.activeRoute.snapshot.paramMap.get("id")

		// Establecer los campos del formulario
		this.phoneForm = this.form.group({
			id_contact: [""],
			phone: [""],
		})

		// Llamar a la API para obtener los datos del ID
		this.crudService.find(this.ID).subscribe((data) => {
			this.phoneForm.setValue({
				id_contact: data["id_contact"],
				phone: data["phone"],
			})
		})
	}

	// Metodo para actualizar el telefono por su ID
	sendData(): any {
		this.crudService.update(this.ID, this.phoneForm.value).subscribe((data) => {
			// Redigir a la vista del contacto al que pertenece el telefono
			this.router.navigateByUrl(`/contacts/view/${this.phoneForm.value.id_contact}`)
		})
	}
}
