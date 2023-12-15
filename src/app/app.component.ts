import { Component } from '@angular/core';
import { Tour } from '../models/tour.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tours: Tour[] = [];

  constructor() {
    const tour1 = new Tour(
      '#149 Ifrane',
      [
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/a7/9f/02/michlifen-ifrane-suites.jpg?w=500&h=300&s=1',
        'https://images.memphistours.com/large/1241187957_Ifrane%20(3).jpg',
        'https://www.visitmorocco.com/sites/default/files/thumbnails/image/landscape-view-from-ifrane-morocco-over-snowy-mountains-luisa-puccini.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/fa/c1/37/michlifen.jpg?w=500&h=300&s=1'
      ],
      'Ifrane',
      'El Jadida',
      1000,
      [
        'Casablanca',
        'Rabat',
        'Volubilis',
        'Meknes'
      ],
      50,
      7,
      [new Date("2021-12-28"), new Date("2022-01-05"), new Date("2022-02-18")]
    );
    this.tours.push(tour1);

    const tour2 = new Tour(
      '#502 Oujda',
      [
        'https://friendlymorocco.com/wp-content/uploads/2017/10/oujda-950x640.jpg',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/a8/e2/86/20171231-163829-largejpg.jpg?w=700&h=500&s=1'
      ],
      'Oujda',
      'Essaouira',
      2000,
      [
        'Marrakech',
        'Ouarzazate',
        'Merzouga'
      ],
      30,
      9,
      [new Date("2023-05-15"), new Date("2023-06-10"), new Date("2023-12-30")]
    );
    this.tours.push(tour2);

    const tour3 = new Tour(
      '#231 Yagour',
      [
        'https://vivre-marrakech.com/script/imgx.php?src=http://vivre-marrakech.com/upload/yagourdunesetdesert.jpg&h=535&w=950&zc=1&q=100',
        'https://images.ctfassets.net/syr7ndzvgzl0/4VsRFEaqDSov3TzBS4jNtj/778d8ab9e2ce44e50d241335504b75b6/Sans_titre_-_2023-04-06T091140.566.png',
        'https://s2.wklcdn.com/image_127/3821199/24899330/15902078.700x525.jpg',
        'https://lesmatinsdumonde.com//diaporamas/2/147/b/2.jpg'
      ],
      'Plateau Yagour',
      'Beni Mellal',
      2000,
      [
        'Marrakech',
        'Ait Ourir',
        'Toufliht',
        'Tighdouine'
      ],
      30,
      4,
      [new Date("2023-12-13"), new Date("2024-01-15"), new Date("2024-02-20")]
    );
    this.tours.push(tour3);
  }
}
