import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})

export class DetailsPage implements OnInit {
  pokemon: any;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}
  // ngOnInit() {
  //   this.route.data.subscribe((data) => {
  //     this.pokemon = data['pokemon'];
  //   });

  //   // Get the Pokemon data from the route
  //   this.route.params.subscribe(params => {
  //     const id = params['id']; // Get the Pokemon ID from the route parameters
  //     this.pokemonService.getPokemonDetails(id).subscribe((res: any) => {
  //       this.pokemon = res;
  //     });
  //   });
  // }
  
  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.pokemon = data['pokemon'];
    });
  }
}


