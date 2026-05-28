import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import Navbar from '@/components/Navbar';

const HERO_IMAGE = "https://cdn.poehali.dev/projects/6d70cd4d-2dc8-4c71-8336-3cec1b5f5ca2/files/b51ba7c2-3fdd-4fac-8c09-15d965d6edd6.jpg";

const stats = [
  { value: "50 000+", label: "Студентов" },
  { value: "200+", label: "Курсов" },
  { value: "95%", label: "Довольны результатом" },
  { value: "4.9 / 5", label: "Средний рейтинг" },
];

const features = [
  {
    icon: "GraduationCap",
    title: "Единый профиль навыков",
    desc: "Отслеживай прогресс по hard и soft skills в одном месте. Портфолио формируется автоматически.",
    color: "teal",
  },
  {
    icon: "FolderKanban",
    title: "Практические задания",
    desc: "Теория сразу закрепляется реальными проектами. Работодатели видят не слова — а результат.",
    color: "purple",
  },
  {
    icon: "Sparkles",
    title: "ИИ-рекомендации",
    desc: "Система анализирует твой прогресс и предлагает следующий шаг. Никогда не потеряешься в обучении.",
    color: "teal",
  },
  {
    icon: "BadgeCheck",
    title: "Сертификаты",
    desc: "Сертификаты признаются работодателями. Платформа готова к масштабированию на глобальный рынок.",
    color: "purple",
  },
  {
    icon: "MessagesSquare",
    title: "Сообщество",
    desc: "Учись вместе с тысячами студентов, обменивайся опытом, получай поддержку от наставников.",
    color: "teal",
  },
  {
    icon: "TrendingUp",
    title: "Аналитика прогресса",
    desc: "Детальная статистика: время обучения, процент завершения, сравнение с другими учащимися.",
    color: "purple",
  },
];

const audiences = [
  { icon: "GraduationCap", label: "Студенты", desc: "Курсы, задания, трек прогресса, чат с наставником" },
  { icon: "BookOpenCheck", label: "Школьники", desc: "Простые объяснения, геймификация, мотивация" },
  { icon: "BriefcaseBusiness", label: "Профессионалы", desc: "Прокачка навыков, новые компетенции, карьерный рост" },
  { icon: "ScanSearch", label: "Работодатели", desc: "Поиск по навыкам, портфолио кандидатов" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">

      {/* Ambient orbs */}
      <div className="fixed top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#00DAC8] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="fixed top-[20%] right-[-150px] w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-[0.06] blur-[100px] pointer-events-none" />
      <div className="fixed bottom-[10%] left-[30%] w-[400px] h-[400px] rounded-full bg-[#00DAC8] opacity-[0.03] blur-[80px] pointer-events-none" />

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(0,218,200,0.1)', border: '1px solid rgba(0,218,200,0.25)', color: '#00DAC8' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00DAC8] animate-pulse-slow" />
          Образовательная платформа нового поколения
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up-delay-1 font-black text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight max-w-5xl mb-6">
          Навыки сегодня —<br />
          <span className="text-gradient">успех завтра</span>
        </h1>

        <p className="animate-fade-in-up-delay-2 text-lg md:text-xl text-white/50 max-w-2xl mb-10 leading-relaxed">
          Единая платформа для развития hard и soft skills. Учись, практикуй реальные задачи и строй карьеру с поддержкой ИИ.
        </p>

        <div className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 mb-16">
          <Link to="/contact" className="px-8 py-4 rounded-full font-bold text-base text-[#0B0F1A] gradient-teal-purple glow-teal hover:scale-105 active:scale-95 transition-transform duration-200 text-center">
            Начать бесплатно
          </Link>
          <Link to="/courses" className="px-8 py-4 rounded-full font-semibold text-base text-white/80 hover:text-white active:scale-95 transition-all duration-200 flex items-center gap-2 justify-center"
            style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
            <Icon name="Play" size={16} />
            Смотреть курсы
          </Link>
        </div>

        {/* Hero image */}
        <div className="relative w-full max-w-4xl mx-auto animate-float">
          <img
            src={HERO_IMAGE}
            alt="SkillCore платформа"
            className="w-full rounded-2xl object-cover"
            style={{ border: '1px solid rgba(255,255,255,0.07)', aspectRatio: '16/9' }}
          />
          <div className="absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(to top, #0B0F1A 0%, transparent 40%)' }} />
        </div>
      </section>

      {/* STATS */}
      <section className="relative px-6 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="card-glass rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl md:text-4xl font-black text-gradient mb-1">{s.value}</div>
              <div className="text-sm text-white/50">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: 'rgba(124,58,237,0.12)', color: '#A855F7', border: '1px solid rgba(124,58,237,0.25)' }}>
              Почему SkillCore
            </div>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight mb-4">
              Всё для твоего <span className="text-gradient">роста</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Мы объединяем теорию, практику и аналитику в единой среде
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i}
                className="card-glass rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300 cursor-default"
                style={{ border: `1px solid rgba(${f.color === 'teal' ? '0,218,200' : '124,58,237'},0.12)` }}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color === 'teal' ? 'bg-[rgba(0,218,200,0.1)]' : 'bg-[rgba(124,58,237,0.12)]'}`}>
                  <Icon name={f.icon} fallback="Star" size={22} className={f.color === 'teal' ? 'text-[#00DAC8]' : 'text-[#A855F7]'} />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ background: 'rgba(0,218,200,0.08)', color: '#00DAC8', border: '1px solid rgba(0,218,200,0.2)' }}>
              Для кого
            </div>
            <h2 className="font-black text-4xl md:text-5xl tracking-tight">
              Платформа для <span className="text-gradient">каждого</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {audiences.map((a, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 text-center group hover:scale-[1.03] transition-all duration-300 cursor-default">
                <div className="w-14 h-14 rounded-2xl gradient-teal-purple flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={a.icon} fallback="Star" size={24} className="text-[#0B0F1A]" />
                </div>
                <h3 className="font-bold text-lg mb-2">{a.label}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,218,200,0.08) 0%, rgba(124,58,237,0.12) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full bg-[#7C3AED] opacity-20 blur-[60px]" />
            <div className="absolute bottom-[-40px] left-[-40px] w-[160px] h-[160px] rounded-full bg-[#00DAC8] opacity-15 blur-[50px]" />

            <div className="relative z-10">
              <h2 className="font-black text-4xl md:text-5xl tracking-tight mb-4">
                Готов начать?
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Присоединяйся к 50 000 студентов. Первый месяц — бесплатно.
              </p>
              <Link to="/contact" className="inline-block px-10 py-4 rounded-full font-bold text-lg text-[#0B0F1A] gradient-teal-purple glow-teal hover:scale-105 active:scale-95 transition-transform duration-200">
                Зарегистрироваться бесплатно
              </Link>
              <p className="text-white/30 text-xs mt-4">Без привязки карты. Отменить можно в любой момент.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t border-white/[0.06]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg gradient-teal-purple flex items-center justify-center font-black text-xs text-[#0B0F1A]">S</div>
            <span className="font-black text-lg tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Skill<span className="text-gradient">Core</span>
            </span>
          </div>
          <p className="text-white/30 text-sm text-center">
            Учись. Практикуй. Достигай. © 2024 SkillCore
          </p>
          <div className="flex gap-4">
            {["Instagram", "Send", "Youtube"].map(icon => (
              <a key={icon} href="#" className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white/80 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                <Icon name={icon} fallback="Link" size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}