import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColaboratorsService } from 'src/app/shared/services/colaborators.service';
import { Colaborator } from '../../models/colaborators.model';

@Component({
  templateUrl: './details-colab.component.html',
  styleUrls: ['./details-colab.component.scss']
})
export class DetailsColabComponent implements OnInit {
  constructor (
    private activatedRoute: ActivatedRoute,
    private colaboratorsService: ColaboratorsService
  ) {}

  colaborator?: Colaborator

  ngOnInit():void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params); => retorna o id do colaborator como uma STRING
      const id = parseInt(params['colaboratorId']); // transforma a params em INT pra ser aceita pela função "detailsColab" no "colabs.component.ts"
      // this.colaborator = this.colaboratorsService.getById(id); - modo antigo
      this.colaboratorsService.getById(id).subscribe((colaborator) => {
        this.colaborator = colaborator;
      });
    })
  }
}
