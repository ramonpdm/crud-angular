import { Component } from "@angular/core"
import { ContactService } from "src/app/services/contact.service"

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrls: ["./list.component.css"],
})
export class ListContactComponent {
	// Variable para almacenar los contactos
	Contacts: any = []

	constructor(private crudService: ContactService) {
		// Llamar a la API para obtener todos los contactos
		this.crudService.findAll().subscribe((data) => {
			this.Contacts = data
		})
	}

	// Metodo para eliminar un contacto por su ID
	// Si fuese una base de datos relacional, con
	// claves foraneas, eliminar un contacto
	// eliminaria sus telefonos.
	delete(id: any, i: any) {
		this.crudService.delete(id).subscribe((data) => {
			this.Contacts.splice(i, 1)
		})
	}
}
