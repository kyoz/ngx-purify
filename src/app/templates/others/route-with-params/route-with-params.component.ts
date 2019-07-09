import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'other-route-with-params',
  templateUrl: './route-with-params.component.html',
  styleUrls: ['./route-with-params.component.scss']
})
export class OthersRouteWithParamsComponent {
  params = '';

  constructor(private _activatedRoute: ActivatedRoute) {
    const urlParams = combineLatest(
      this._activatedRoute.paramMap,
      this._activatedRoute.queryParamMap,
      (params, queryParams) => ({ ...params, ...queryParams })
    );
    urlParams.subscribe((paramMap: ParamMap) => {
      this.params = JSON.stringify(paramMap);
    });
  }
}

