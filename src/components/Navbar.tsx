import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const courses = [
  { label: 'Hard Skills', desc: 'Программирование, аналитика, дизайн' },
  { label: 'Soft Skills', desc: 'Лидерство, коммуникация, тайм-менеджмент' },
  { label: 'Для школьников', desc: 'Базовые курсы с нуля' },
  { label: 'Для профессионалов', desc: 'Углублённые треки и сертификаты' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [logoMounted, setLogoMounted] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => setLogoMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setCoursesOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(11,15,26,0.95)' : 'rgba(11,15,26,0.75)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,255,255,0.03)',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">

        {/* Logo with mount animation */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className="w-9 h-9 rounded-xl gradient-teal-purple flex items-center justify-center font-black text-base text-[#0B0F1A] transition-all duration-500"
            style={{
              opacity: logoMounted ? 1 : 0,
              transform: logoMounted ? 'scale(1) rotate(0deg)' : 'scale(0.5) rotate(-180deg)',
              boxShadow: '0 0 20px rgba(0,218,200,0.3)',
            }}
          >
            S
          </div>
          <span
            className="font-black text-xl tracking-tight transition-all duration-700"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              opacity: logoMounted ? 1 : 0,
              transform: logoMounted ? 'translateX(0)' : 'translateX(-10px)',
            }}
          >
            Skill<span className="text-gradient">Core</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {/* Courses dropdown */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setCoursesOpen(v => !v)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${coursesOpen ? 'text-white bg-white/8' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
            >
              Курсы
              <Icon
                name="ChevronDown"
                size={14}
                className="transition-transform duration-200"
                style={{ transform: coursesOpen ? 'rotate(180deg)' : 'rotate(0deg)' } as React.CSSProperties}
              />
            </button>

            {/* Dropdown */}
            <div
              className="absolute top-full left-0 mt-2 w-72 rounded-2xl overflow-hidden transition-all duration-200 origin-top"
              style={{
                background: 'rgba(17,24,39,0.97)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                opacity: coursesOpen ? 1 : 0,
                transform: coursesOpen ? 'scaleY(1) translateY(0)' : 'scaleY(0.9) translateY(-8px)',
                pointerEvents: coursesOpen ? 'auto' : 'none',
              }}
            >
              <div className="p-2">
                {courses.map((c, i) => (
                  <Link
                    key={i}
                    to="/courses"
                    className="flex flex-col gap-0.5 px-4 py-3 rounded-xl hover:bg-white/6 transition-colors duration-150 group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-[#00DAC8] transition-colors">{c.label}</span>
                    <span className="text-xs text-white/40">{c.desc}</span>
                  </Link>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-white/5">
                <Link to="/courses" className="flex items-center gap-2 text-xs text-[#00DAC8] font-semibold hover:gap-3 transition-all duration-200">
                  Все курсы <Icon name="MoveRight" size={12} />
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/team"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive('/team') ? 'text-white bg-white/8' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
          >
            Команда
          </Link>

          <Link
            to="/contact"
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive('/contact') ? 'text-white bg-white/8' : 'text-white/60 hover:text-white hover:bg-white/5'}`}
          >
            Связаться
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-white/70 hover:text-white border border-white/10 hover:border-white/20 transition-all duration-200 active:scale-95"
          >
            Войти
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-[#0B0F1A] gradient-teal-purple hover:opacity-90 active:scale-95 transition-all duration-200 glow-teal"
          >
            Начать бесплатно
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200 active:scale-90"
          onClick={() => setMobileOpen(v => !v)}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? '400px' : '0',
          opacity: mobileOpen ? 1 : 0,
        }}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-white/5">
          <Link to="/courses" className="px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">Курсы</Link>
          <Link to="/team" className="px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">Команда</Link>
          <Link to="/contact" className="px-4 py-3 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition-all">Связаться</Link>
          <div className="h-px bg-white/5 my-2" />
          <Link to="/contact" className="px-4 py-3 rounded-full text-sm font-bold text-center text-[#0B0F1A] gradient-teal-purple active:scale-95 transition-transform">
            Начать бесплатно
          </Link>
        </div>
      </div>
    </nav>
  );
}