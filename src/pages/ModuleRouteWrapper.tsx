import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getModuleById } from '../data/modulesRegistry';
import { ModulePage as ModulePageView } from '../pages/ModulePage';

export const ModuleRouteWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <Navigate to="/module/module-1" replace />;
  }

  const moduleData = getModuleById(id);

  if (!moduleData) {
    return (
      <div className="p-8 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200">Module Not Found</h2>
        <p className="text-sm text-slate-500">The requested revision module "{id}" does not exist.</p>
        <a href="/" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold">
          Return Home
        </a>
      </div>
    );
  }

  return <ModulePageView module={moduleData} />;
};
