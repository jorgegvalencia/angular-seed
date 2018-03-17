import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
  routes: any;
  endpoints: any;
}

export const AppConfig: IAppConfig = {
  routes: {
    login: 'login',
    dashboard: {
      base: 'dashboard',
      overview: '',
      claimsList: 'claims',
      newClaim: 'claims/new',
      playground: 'sandbox'
    }
  },
  endpoints: {

  }
};
