import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes: Hero[] = [];
  // selectedHero?: Hero;
// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
// }


constructor(private heroService: HeroService, private messageService: MessageService) { }

// getHeroes(): void {
//   this.heroes = this.heroService.getHeroes();
// }

// onSelect(hero: Hero): void {
//   this.selectedHero = hero;
//   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
// }

getHeroes(): void {
  this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
}

ngOnInit(): void {
  this.getHeroes();
}
}


