import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CurrencyComponent } from './currency/currency.component';

const appRoutes: Routes = [
{'path': '', 'redirectTo': '/weather', 'pathMatch': 'full'},
{'path': 'weather', 'component': WeatherComponent},
{'path': 'movie', 'component': MovieComponent},
{'path': 'currency', 'component': CurrencyComponent}
];

export const Menu_Routing = RouterModule.forRoot(appRoutes);
