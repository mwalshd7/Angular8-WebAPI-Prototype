import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Add News Route?Link */
import {NewsComponent} from './news/news.component';


const routes: Routes = [
  {path: 'IRL' , component: NewsComponent },
  {path: '' , component: NewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
