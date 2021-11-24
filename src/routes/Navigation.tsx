import { Suspense } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';

export const Navigation = () => {
  return (
    /**
     * El suspense permite cargar una página mientras el lazy loading está cargando los modulos
     */
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="ReactLogo" />
            <ul>
              {routes.map((route, index) => (
                <li key={route.to + `${index}`}>
                  <NavLink
                    to={route.to}
                    className={({ isActive }) => (isActive ? 'nav-active' : '')}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ Component, to, path }, index) => (
              <Route
                key={to + `${index}`}
                path={path}
                element={<Component />}
              />
            ))}
            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
