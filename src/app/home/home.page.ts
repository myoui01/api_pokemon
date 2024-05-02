import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pokemonList: any; // armazenar a lista de pokemons da api
  pokemon: any;

  constructor(private pokemonService: PokemonService,  private router: Router) { // injeta pokemon service 
    this.pokemonService.getAll().subscribe((res: any) => {  // chama a função getAll para buscar os dados dos pokemons
      this.pokemonList = res.results; // atribui os resultados à propriedade pokemonList anteriormente criada
    });
  }
  goToPokemonDetails(pokemon: any) {
    this.pokemonService.getPokemonDetails(pokemon.url).subscribe((res: any) => {
      this.router.navigate(['/details', { pokemon: res }]);
    });
  }
}