import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2'; 
  /* injeta uma instância do serviço HttpClient como um parâmetro privado
  para fazer solicitações http para um servidor remoto (no caso a api de pokemons) */ 
 
  constructor(private http: HttpClient) { }
    getAll() { 
      return this.http.get(`${this.baseUrl}/pokemon?limit=151`);
      // solicitação get() que retorna a lista de pokemons
    }
    getPokemonDetails(url: string) {
      return this.http.get(url);
    }
}