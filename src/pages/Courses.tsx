import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Hard Skills', 'Soft Skills', 'Для школьников', 'Для профессионалов'];

const courses = [
  {
    id: 1,
    title: 'Python с нуля до уровня Junior',
    category: 'Hard Skills',
    level: 'Начинающий',
    duration: '3 месяца',
    students: '12 400',
    rating: 4.9,
    price: 'Бесплатно',
    icon: 'Terminal',
    color: 'teal',
    tags: ['Python', 'Backend', 'Алгоритмы'],
  },
  {
    id: 2,
    title: 'Лидерство и управление командой',
    category: 'Soft Skills',
    level: 'Средний',
    duration: '6 недель',
    students: '8 200',
    rating: 4.8,
    price: '2 990 ₽/мес',
    icon: 'UsersRound',
    color: 'purple',
    tags: ['Лидерство', 'Коммуникация', 'Мотивация'],
  },
  {
    id: 3,
    title: 'Веб-дизайн: от Figma до готового сайта',
    category: 'Hard Skills',
    level: 'Начинающий',
    duration: '2 месяца',
    students: '9 800',
    rating: 4.7,
    price: '1 990 ₽/мес',
    icon: 'PenTool',
    color: 'teal',
    tags: ['Figma', 'UI/UX', 'Дизайн'],
  },
  {
    id: 4,
    title: 'Публичные выступления и риторика',
    category: 'Soft Skills',
    level: 'Любой',
    duration: '4 недели',
    students: '5 600',
    rating: 4.9,
    price: '990 ₽/мес',
    icon: 'Mic2',
    color: 'purple',
    tags: ['Риторика', 'Публичность', 'Уверенность'],
  },
  {
    id: 5,
    title: 'Основы программирования для школьников',
    category: 'Для школьников',
    level: 'Начинающий',
    duration: '8 недель',
    students: '15 000',
    rating: 5.0,
    price: 'Бесплатно',
    icon: 'Blocks',
    color: 'teal',
    tags: ['Scratch', 'Логика', 'Алгоритмы'],
  },
  {
    id: 6,
    title: 'Data Science и машинное обучение',
    category: 'Для профессионалов',
    level: 'Продвинутый',
    duration: '4 месяца',
    students: '6 300',
    rating: 4.8,
    price: '4 990 ₽/мес',
    icon: 'ChartNoAxesCombined',
    color: 'purple',
    tags: ['ML', 'Python', 'Аналитика'],
  },
];

export default function Courses() {
  const [active, setActive] = useState('Все');
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = active === 'Все' ? courses : courses.filter(c => c.category === active);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#00DAC8] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="fixed top-[30%] right-[-150px] w-[400px] h-[400px] rounded-full bg-[#7C3AED] opacity-[0.05] blur-[100px] pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(0,218,200,0.1)', border: '1px solid rgba(0,218,200,0.25)', color: '#00DAC8' }}>
          <Icon name="LayoutGrid" size={13} />
          Каталог курсов
        </div>
        <h1 className="font-black text-5xl md:text-6xl tracking-tight mb-4 animate-fade-in-up">
          Найди свой <span className="text-gradient">курс</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto animate-fade-in-up-delay-1">
          200+ курсов по hard и soft skills. Начни с бесплатного — прокачайся до профессионала.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95"
                style={active === cat ? {
                  background: 'linear-gradient(135deg, #00DAC8 0%, #A855F7 100%)',
                  color: '#0B0F1A',
                  boxShadow: '0 0 20px rgba(0,218,200,0.2)',
                } : {
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.6)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <div
              key={course.id}
              onMouseEnter={() => setHovered(course.id)}
              onMouseLeave={() => setHovered(null)}
              className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(17,24,39,0.7)',
                border: `1px solid rgba(${course.color === 'teal' ? '0,218,200' : '124,58,237'},${hovered === course.id ? '0.3' : '0.1'})`,
                transform: hovered === course.id ? 'translateY(-4px) scale(1.01)' : 'translateY(0) scale(1)',
                boxShadow: hovered === course.id
                  ? `0 20px 40px rgba(${course.color === 'teal' ? '0,218,200' : '124,58,237'},0.12)`
                  : 'none',
              }}
            >
              {/* Card header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `rgba(${course.color === 'teal' ? '0,218,200' : '124,58,237'},0.12)` }}
                  >
                    <Icon name={course.icon} fallback="BookOpen" size={22}
                      className={course.color === 'teal' ? 'text-[#00DAC8]' : 'text-[#A855F7]'} />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: course.price === 'Бесплатно' ? 'rgba(0,218,200,0.1)' : 'rgba(255,255,255,0.06)',
                      color: course.price === 'Бесплатно' ? '#00DAC8' : 'rgba(255,255,255,0.5)',
                    }}>
                    {course.price}
                  </span>
                </div>
                <h3 className="font-bold text-lg leading-snug mb-3">{course.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full text-white/50"
                      style={{ background: 'rgba(255,255,255,0.05)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 pb-6">
                <div className="flex items-center justify-between text-xs text-white/40 mb-4 pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1">
                    <Icon name="Timer" size={12} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="GraduationCap" size={12} /> {course.students}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Icon name="Trophy" size={12} /> {course.rating}
                  </span>
                </div>
                <button
                  className="w-full py-2.5 rounded-xl text-sm font-bold transition-all duration-200 active:scale-95"
                  style={{
                    background: hovered === course.id
                      ? `linear-gradient(135deg, ${course.color === 'teal' ? '#00DAC8, #A855F7' : '#7C3AED, #00DAC8'})`
                      : 'rgba(255,255,255,0.05)',
                    color: hovered === course.id ? '#0B0F1A' : 'rgba(255,255,255,0.7)',
                    border: hovered === course.id ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {course.price === 'Бесплатно' ? 'Начать бесплатно' : 'Записаться'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto mt-12 text-center">
          <p className="text-white/40 text-sm mb-4">Не нашли нужный курс?</p>
          <Link to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white/70 hover:text-white transition-all duration-200 active:scale-95"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
            Написать нам <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}