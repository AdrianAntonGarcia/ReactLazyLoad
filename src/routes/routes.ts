import { lazy, LazyExoticComponent } from 'react';
import { NoLazy } from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

/**
 * Así creamos los modulos de lazyload
 * El comentario es para poner un nombre al chunk para cuándo salga el la red de la consola
 */
const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/layout/LazyLayout')
);
const Lazy2 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2')
);
const Lazy3 = lazy(
  () =>
    import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3')
);

/**
 * El * (comodín) indica que todas las rutas hijas van a pasar por ese path
 * Cuándo encuentre ese segmento, entra en ese componente y busca el siguiente router
 */
export const routes: Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy-1',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
