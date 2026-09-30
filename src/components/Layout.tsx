import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="app-layout">
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'open' : ''}`}
        onClick={closeSidebar}
      ></div>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h2>Menú Principal</h2>
          <p>Tarea 3 - React</p>
        </div>

        <nav className="sidebar-nav">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">👤</span>
            <span>Página Inicial</span>
          </NavLink>

          <NavLink
            to="/sumadora"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">➕</span>
            <span>Sumadora</span>
          </NavLink>

          <NavLink
            to="/traductor"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🔢</span>
            <span>Traductor de Números</span>
          </NavLink>

          <NavLink
            to="/tabla"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">✖️</span>
            <span>Tabla de Multiplicar</span>
          </NavLink>

          <NavLink
            to="/experiencia"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            onClick={closeSidebar}
          >
            <span className="nav-icon">🎥</span>
            <span>Experiencia Personal</span>
          </NavLink>
        </nav>
      </aside>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <header className="header-bar">
          <button className="menu-toggle-btn" onClick={toggleSidebar} title="Abrir Menú">
            ☰
          </button>
          <h1 className="header-title">Aplicación en React</h1>
          <div style={{ width: '24px' }}></div>
        </header>

        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
