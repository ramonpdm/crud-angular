import { Component } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { ContactService } from "src/app/services/contact.service"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
	selector: "app-update",
	templateUrl: "./update.component.html",
	styleUrls: ["./update.component.css"],
})
export class UpdateContactComponent {
	// Variable para el ID del contacto
	ID: any

	// Formulario
	contactForm: FormGroup

	constructor(private activeRoute: ActivatedRoute, public form: FormBuilder, private crudService: ContactService, private router: Router) {
		// Obtener el ID de la URL
		this.ID = this.activeRoute.snapshot.paramMap.get("id")

		// Establecer los campos del formulario
		this.contactForm = this.form.group({
			name: ["", [Validators.required, Validators.minLength(3)]],
			last_name: ["", [Validators.required, Validators.minLength(3)]],
			email: ["", [Validators.required]],
		})

		// Llamar a la API para obtener los datos del ID
		this.crudService.find(this.ID).subscribe({
			next: (data) => {
				this.contactForm.setValue({
					name: data["name"],
					last_name: data["last_name"],
					email: data["email"],
				})
			},
			// Redigir si hay un error
			error: (error) => {
				this.router.navigateByUrl("/contacts/list")
			},
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

	// Metodo para actualizar el contacto por su ID
	sendData(): any {
		this.crudService.update(this.ID, this.contactForm.value).subscribe(() => {
			// Redigir al contacto actualizado
			this.router.navigateByUrl(`/contacts/view/${this.ID}`)
		})
	}
}
