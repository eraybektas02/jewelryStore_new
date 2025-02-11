import { NavigatedData, Page } from '@nativescript/core';
import { CustomersViewModel } from './customers-view-model';

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  if (!page.bindingContext) {
    page.bindingContext = new CustomersViewModel();
  }
}
