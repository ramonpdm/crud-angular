import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment.prod"

@Injectable({
	providedIn: "root",
})

// Servicio generico para la API
export abstract class CrudService<T> {
	// URL de la API
	protected API = environment.api

	constructor(protected clientHttp: HttpClient) {}

	// Metodo para el modelo que vaya a usar la API
	abstract getModule(): string

	// Metodo POST para insertar registros
	add(data: T): Observable<any> {
		return this.clientHttp.post(`${this.API}/${this.getModule()}`, data)
	}

	// Metodo GET para obtener todos los registros
	findAll(): Observable<any> {
		return this.clientHttp.get(`${this.API}/${this.getModule()}`)
	}

	// Metodo GET para obtener un registro por el ID
	find(id: any): Observable<any> {
		return this.clientHttp.get(`${this.API}/${this.getModule()}/${id}`)
	}

	// Metodo PUT para actualizar un registro por el ID
	update(id: any, data: T): Observable<any> {
		return this.clientHttp.put(`${this.API}/${this.getModule()}/${id}`, data)
	}

	// Metodo DELETE para eliminar un registro por el ID
	delete(id: any): Observable<any> {
		return this.clientHttp.delete(`${this.API}/${this.getModule()}/${id}`)
	}
}
