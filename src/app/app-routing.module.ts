import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { AddContactComponent } from "./components/contacts/add/add.component"
import { UpdateContactComponent } from "./components/contacts/update/update.component"
import { ListContactComponent } from "./components/contacts/list/list.component"
import { ViewContactComponent } from "./components/contacts/view/view.component"
import { UpdatePhoneComponent } from "./components/phones/update/update.component"
import { AddPhoneComponent } from "./components/phones/add/add.component"

const routes: Routes = [
	{ path: "", pathMatch: "full", redirectTo: "contacts/list" },
	{ path: "contacts/list", component: ListContactComponent },
	{ path: "contacts/add", component: AddContactComponent },
	{ path: "contacts/update/:id", component: UpdateContactComponent },
	{ path: "contacts/view/:id", component: ViewContactComponent },
	{ path: "phones/add/:id_contact", component: AddPhoneComponent },
	{ path: "phones/update/:id", component: UpdatePhoneComponent },
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})

export class AppRoutingModule {}
