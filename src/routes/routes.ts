import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; //() => JSX.Element;
  name: string;
  children?: Route[];
}

//const LazyPage1 = lazy(() => import( /*webpackChunkName: "LazyPage1"*/ "../lazyload/pages/LazyPage1"));
//const LazyPage2 = lazy(() => import( /*webpackChunkName: "LazyPage2"*/ "../lazyload/pages/LazyPage2"));
//const LazyPage3 = lazy(() => import( /*webpackChunkName: "LazyPage3"*/ "../lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  {
    path: "/lazyload",
    Component: lazy( () => import( /*webpackChunkName: "LazyLoad"*/ "../lazyload/layout/LazyLayout") ),
    name: "LazyLoad",
  },
  {
    path: "/no-lazyload",
    Component: NoLazy,
    name: "NoLazyLoad",
  },
  /* ,
  {
    path: "/lazy2",
    Component: LazyPage2,
    name: "Lazy Page 2",
  },
  {
    path: "/lazy3",
    Component: LazyPage3,
    name: "Lazy Page 3",
  }, */
];
