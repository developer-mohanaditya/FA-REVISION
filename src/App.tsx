import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PageShell } from './components/layout/PageShell';
import { Home } from './pages/Home';
import { ModuleRouteWrapper } from './pages/ModuleRouteWrapper';
import { ExamMode } from './pages/ExamMode';
import { ReviewLater } from './pages/ReviewLater';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <PageShell>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module/:id" element={<ModuleRouteWrapper />} />
          <Route path="/exam-mode" element={<ExamMode />} />
          <Route path="/review-later" element={<ReviewLater />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageShell>
    </HashRouter>
  );
};

export default App;
