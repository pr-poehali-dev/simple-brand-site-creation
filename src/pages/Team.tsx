import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Icon from '@/components/ui/icon';

const values = [
  { icon: 'HandHeart', label: 'Поддержка', desc: 'Мы рядом на каждом шаге обучения' },
  { icon: 'Sparkles', label: 'Инновации', desc: 'ИИ и современные методики в основе' },
  { icon: 'ShieldCheck', label: 'Честность', desc: 'Открытость в результатах и процессе' },
  { icon: 'TrendingUp', label: 'Рост', desc: 'Постоянное развитие — наш принцип' },
];

const team = [
  {
    name: 'Алексей Морозов',
    role: 'CEO & Основатель',
    desc: 'Ex-Google, 12 лет в EdTech. Строит платформы, которые меняют карьеры.',
    skills: ['Стратегия', 'Product', 'EdTech'],
    initials: 'АМ',
    color: 'teal',
  },
  {
    name: 'Мария Соколова',
    role: 'Head of Education',
    desc: 'Методист с опытом 8 лет. Создала более 50 образовательных программ.',
    skills: ['Методология', 'Curriculum', 'Обучение'],
    initials: 'МС',
    color: 'purple',
  },
  {
    name: 'Дмитрий Павлов',
    role: 'CTO',
    desc: 'Fullstack-архитектор. Превращает идеи в масштабируемые решения.',
    skills: ['Python', 'React', 'AI/ML'],
    initials: 'ДП',
    color: 'teal',
  },
  {
    name: 'Анна Белова',
    role: 'Head of Design',
    desc: 'Дизайнер с опытом в Яндексе. Создаёт интерфейсы, которые хочется использовать.',
    skills: ['UX/UI', 'Figma', 'Research'],
    initials: 'АБ',
    color: 'purple',
  },
  {
    name: 'Иван Козлов',
    role: 'Lead Mentor',
    desc: 'Ведущий наставник. Провёл 2 000+ сессий и помог 500+ студентам найти работу.',
    skills: ['Менторство', 'Карьера', 'Backend'],
    initials: 'ИК',
    color: 'teal',
  },
  {
    name: 'Елена Новикова',
    role: 'Marketing Director',
    desc: 'Строит сообщество SkillCore. 50 000 студентов — её достижение.',
    skills: ['Маркетинг', 'SMM', 'Community'],
    initials: 'ЕН',
    color: 'purple',
  },
];

export default function Team() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#7C3AED] opacity-[0.05] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[20%] left-[-100px] w-[400px] h-[400px] rounded-full bg-[#00DAC8] opacity-[0.04] blur-[100px] pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(124,58,237,0.12)', border: '1px solid rgba(124,58,237,0.25)', color: '#A855F7' }}>
          <Icon name="UsersRound" size={13} />
          Наша команда
        </div>
        <h1 className="font-black text-5xl md:text-6xl tracking-tight mb-4 animate-fade-in-up">
          Люди, которые <span className="text-gradient">делают SkillCore</span>
        </h1>
        <p className="text-white/50 text-lg max-w-2xl mx-auto animate-fade-in-up-delay-1">
          Мы — команда практиков из крупнейших технологических компаний. Наша миссия: сделать качественное образование доступным каждому.
        </p>
      </section>

      {/* Values */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <div key={i} className="rounded-2xl p-5 text-center group hover:scale-[1.03] transition-all duration-300 cursor-default"
              style={{ background: 'rgba(17,24,39,0.6)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="w-10 h-10 rounded-xl gradient-teal-purple flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon name={v.icon} fallback="Star" size={18} className="text-[#0B0F1A]" />
              </div>
              <div className="font-bold text-sm mb-1">{v.label}</div>
              <div className="text-xs text-white/40 leading-relaxed">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team grid */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-black text-3xl md:text-4xl tracking-tight">
              Познакомься с <span className="text-gradient">командой</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="rounded-2xl p-6 transition-all duration-300 cursor-default"
                style={{
                  background: 'rgba(17,24,39,0.7)',
                  border: `1px solid rgba(${member.color === 'teal' ? '0,218,200' : '124,58,237'},${hovered === i ? '0.25' : '0.08'})`,
                  transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hovered === i
                    ? `0 20px 40px rgba(${member.color === 'teal' ? '0,218,200' : '124,58,237'},0.1)`
                    : 'none',
                }}
              >
                {/* Avatar */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg text-[#0B0F1A] flex-shrink-0 transition-all duration-300"
                    style={{
                      background: hovered === i
                        ? 'linear-gradient(135deg, #00DAC8 0%, #A855F7 100%)'
                        : `rgba(${member.color === 'teal' ? '0,218,200' : '124,58,237'},0.15)`,
                      color: hovered === i ? '#0B0F1A' : (member.color === 'teal' ? '#00DAC8' : '#A855F7'),
                    }}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <div className="font-bold text-base">{member.name}</div>
                    <div className="text-sm font-medium"
                      style={{ color: member.color === 'teal' ? '#00DAC8' : '#A855F7' }}>
                      {member.role}
                    </div>
                  </div>
                </div>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{member.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map(skill => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-full text-white/50"
                      style={{ background: 'rgba(255,255,255,0.05)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="relative rounded-3xl p-10 md:p-14 text-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, rgba(0,218,200,0.08) 0%, rgba(124,58,237,0.12) 100%)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full bg-[#7C3AED] opacity-20 blur-[50px]" />
            <div className="relative z-10">
              <h2 className="font-black text-3xl md:text-4xl tracking-tight mb-3">
                Хочешь присоединиться?
              </h2>
              <p className="text-white/50 text-base mb-6">Мы всегда в поиске талантливых людей, разделяющих нашу миссию.</p>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold text-sm text-[#0B0F1A] gradient-teal-purple hover:scale-105 active:scale-95 transition-transform duration-200 glow-teal">
                Написать нам <Icon name="MoveRight" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}