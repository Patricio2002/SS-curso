import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

//definición de rutas
const routes: Routes = [
    //argumentos ruta principal
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    //resto de rutas
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    //ruta inexistente
    {
        path: '**',
        redirectTo: ''
    }
]

//importar y exportar RouterModule }. forRoot para rutas principales, forChild
//para rutas hijas
@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {}