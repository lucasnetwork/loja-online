import React, { FC, ElementType } from 'react';
import { Route, RouteProps } from 'react-router-dom';

interface RouterProps extends RouteProps {
  Layout: ElementType;
  Component: ElementType;
}

const Router: FC<RouterProps> = ({ Layout, Component, ...rest }) => (
  <Route {...rest}>
    <Layout>
      <Component />
    </Layout>
  </Route>
);

export default Router;
