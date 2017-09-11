import React from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import * as Routes from './routes';
import Store from './store';

const { store, history } = Store;

export default function () {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/products" component={Routes.ProductsList} />
          <Route path="/product" component={Routes.ProductInfo} />
          <Route path="/cart" component={Routes.Cart} />
          <Redirect from="*" to="/products" />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}
