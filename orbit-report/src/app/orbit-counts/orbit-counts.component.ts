import { Component, Input, OnInit } from '@angular/core';
import { Satellite } from '../satellite'

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }

  typeCount(satelliteType: string): number {
    let count: number = 0;
    for(let satellite of this.satellites) {
      if (satellite.type === satelliteType) {
        count++
      }
    }
    return count;
  }

}
