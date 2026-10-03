import React from 'react';
import { Sun, Moon, Bookmark, BookOpen, GraduationCap, ArrowLeft, ArrowRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { MODULES_META } from '../../data/modules';
import { useTheme, useReviewMarkers } from '../../hooks/useLocalStorage';

interface LayoutProps {
  children: React.ReactNode;
}

export const PageShell: React.FC<LayoutProps> = ({ children }) => {
  const { isDark, toggleTheme } = useTheme();
  const { count: reviewCount } = useReviewMarkers();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Close mobile menu on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const currentModule = MODULES_META.find(m => `/module/${m.id}` === location.pathname);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Mobile Top Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-40">
        <Link to="/" className="flex items-center space-x-2">
          <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          <span className="font-bold text-base tracking-tight">FA Crash Course</span>
        </Link>
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
            title="Toggle theme"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col transition-transform duration-300 ease-in-out md:static md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-0 max-md:-translate-x-full'}
      `}>
        {/* Brand / Logo */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 group-hover:bg-blue-700 transition">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 dark:text-white leading-tight text-base">FA Crash Course</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">ESSEC T0 Exam Revision</p>
            </div>
          </Link>
        </div>

        {/* Modules Navigation Links */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Course Modules (8)
          </div>
          {MODULES_META.map((mod) => {
            const isActive = location.pathname === `/module/${mod.id}`;
            return (
              <Link
                key={mod.id}
                to={`/module/${mod.id}`}
                className={`
                  flex items-start space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${isActive
                    ? 'bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-slate-200'}
                `}
              >
                <span className={`
                  w-6 h-6 rounded-md flex items-center justify-center text-xs flex-shrink-0 mt-0.5
                  ${isActive
                    ? 'bg-blue-600 text-white font-bold'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}
                `}>
                  {mod.number}
                </span>
                <div className="truncate">
                  <div className="truncate text-xs font-semibold">{mod.shortTitle}</div>
                  <div className="text-[11px] text-slate-400 dark:text-slate-500 truncate">{mod.estimatedMinutes} min</div>
                </div>
              </Link>
            );
          })}

          <div className="pt-4 px-3 pb-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Exam Preparation
          </div>

          <Link
            to="/exam-mode"
            className={`
              flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
              ${location.pathname === '/exam-mode'
                ? 'bg-purple-50 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 font-semibold border border-purple-200 dark:border-purple-800/60'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'}
            `}
          >
            <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400 flex-shrink-0" />
            <span className="font-semibold">Final Revision & Exam Hub</span>
          </Link>

          <Link
            to="/review-later"
            className={`
              flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
              ${location.pathname === '/review-later'
                ? 'bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 font-semibold'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'}
            `}
          >
            <div className="flex items-center space-x-3">
              <Bookmark className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <span>Review Later</span>
            </div>
            {reviewCount > 0 && (
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-amber-500 text-white">
                {reviewCount}
              </span>
            )}
          </Link>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Theme preference
          </div>
          <button
            onClick={toggleTheme}
            className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 transition"
          >
            {isDark ? (
              <>
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-slate-700" />
                <span>Dark</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Desktop Top Bar */}
        <header className="hidden md:flex items-center justify-between px-8 py-3.5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
              {currentModule ? `Module ${currentModule.number} of 8` : 'Revision System'}
            </span>
            <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
              {currentModule ? currentModule.title : 'Overview'}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {currentModule && currentModule.number > 1 && (
              <Link
                to={`/module/module-${currentModule.number - 1}`}
                className="flex items-center space-x-1 px-3 py-1 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>M{currentModule.number - 1}</span>
              </Link>
            )}
            {currentModule && currentModule.number < 8 && (
              <Link
                to={`/module/module-${currentModule.number + 1}`}
                className="flex items-center space-x-1 px-3 py-1 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition"
              >
                <span>M{currentModule.number + 1}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
            {currentModule && currentModule.number === 8 && (
              <Link
                to="/exam-mode"
                className="flex items-center space-x-1 px-3 py-1 text-xs font-semibold rounded-md bg-purple-600 hover:bg-purple-700 text-white transition shadow-sm"
              >
                <span>Exam Mode</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
          {children}
        </main>

        {/* Required Course Disclaimer Footer */}
        <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-6 px-4 md:px-8 bg-white dark:bg-slate-900 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            This revision companion is generated from course materials for study support. Always use the original course documents and instructor guidance as the authoritative source.
          </p>
        </footer>
      </div>
    </div>
  );
};
