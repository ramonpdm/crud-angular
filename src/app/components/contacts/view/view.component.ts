import { Component } from "@angular/core"
import { ContactService } from "src/app/services/contact.service"
import { PhoneService } from "src/app/services/phone.service"
import { Router, ActivatedRoute } from "@angular/router"
import { Contact } from "../../../models/contact.interface"
import { Phone } from "src/app/models/phone.interface"

@Component({
	selector: "app-view",
	templateUrl: "./view.component.html",
	styleUrls: ["./view.component.css"],
})
export class ViewContactComponent {
	// Variable para el ID del contacto
	ID: any

	// Variable para los telefonos del contacto
	Phones: Phone[] = []

	// Objeto que almacenará los datos del contacto visto
	contact: Contact = new Contact()

	constructor(private activeRoute: ActivatedRoute, private crudService: ContactService, private phoneService: PhoneService, private router: Router) {
		// Obtener el ID de la URL
		this.ID = this.activeRoute.snapshot.paramMap.get("id")

		// Llamar a la API para obtener los datos del ID
		this.crudService.find(this.ID).subscribe({
			next: (data) => {
				// Establecer los datos obtenidos
				this.contact.id = data["id"]
				this.contact.name = data["name"]
				this.contact.last_name = data["last_name"]
				this.contact.email = data["email"]

				// Obtener los telefonos del contacto
				this.phoneService.findAll().subscribe((data) => {
					data.forEach((phone: Phone) => {
						if (phone.id_contact == this.contact.id) {
							this.Phones.push(phone)
						}
					})
				})
			},
			// Redigir si hay un error
			error: (error) => {
				this.router.navigateByUrl("/contacts/list")
			},
		})
	}

	// Metodo para eliminar un telefono por su ID
	delete(id: any, i: any) {
		this.phoneService.delete(id).subscribe((data) => {
			this.Phones.splice(i, 1)
		})
	}
}
