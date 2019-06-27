import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      this._activatedRoute.params,
      this._activatedRoute.queryParams,
      (params, queryParams) => ({ ...params, ...queryParams })
    );
    urlParams.subscribe((params: any) => {
      this.params = JSON.stringify(params);
    });
  }
}

