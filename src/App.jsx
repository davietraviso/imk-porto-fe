import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './sections/LandingPage';
import ArticlesPage from './sections/ArticlesPage';
import ArticleDetailPage from './sections/ArticleDetailPage.jsx';
import ContactPage from './sections/ContactPage.jsx';

import AdminLogin from './sections/Admin/AdminLogin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LandingAdmin from './sections/Admin/LandingAdmin.jsx';
import ProjectsAdmin from './sections/Admin/ProjectsAdmin.jsx';
import AdminDashboard from './sections/Admin/AdminDashboard.jsx';
import ArticlesAdmin from './sections/Admin/ArticlesAdmin.jsx';
import ContactsAdmin from './sections/Admin/ContactAdmin.jsx';
import Navbar from './components/Navbar.jsx';



function App() {
    
  return (
    <>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/landing" element={
            <ProtectedRoute><LandingAdmin /></ProtectedRoute>
          } />
          <Route path="/admin/projects" element={
            <ProtectedRoute><ProjectsAdmin /></ProtectedRoute>
          } />
          <Route path="/admin/articles" element={
            <ProtectedRoute><ArticlesAdmin /></ProtectedRoute>
          } />
          <Route path="/admin/contacts" element={
            <ProtectedRoute><ContactsAdmin /></ProtectedRoute>
          } />

          <Route path="/" element={<LandingPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticleDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
