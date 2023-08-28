import { Component } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ContactService } from "src/app/services/contact.service"
import { Router } from "@angular/router"

@Component({
	selector: "app-add",
	templateUrl: "./add.component.html",
	styleUrls: ["./add.component.css"],
})
export class AddContactComponent {
	// Formulario
	contactForm: FormGroup

	constructor(public form: FormBuilder, private crudService: ContactService, private router: Router) {
		// Establecer los campos del formulario
		this.contactForm = this.form.group({
			name: ["", [Validators.required, Validators.minLength(3)]],
			last_name: ["", [Validators.required, Validators.minLength(3)]],
			email: ["", [Validators.required]],
		})
	}

	// Getter para acceder a la propiedad name
	get name() {
		return this.contactForm.get("name")
	}

	// Getter para acceder a la propiedad last_name
	get last_name() {
		return this.contactForm.get("last_name")
	}

	// Metodo para crear el contacto
	sendData(): any {
		this.crudService.add(this.contactForm.value).subscribe((data) => {
			// Redigir al contacto creado
			this.router.navigateByUrl(`/contacts/view/${data["id"]}`)
		})
	}
}
