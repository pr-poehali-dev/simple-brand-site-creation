import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'MailOpen', label: 'Email', value: 'fiffifa2024@gmail.com', color: 'teal' },
  { icon: 'MessageSquare', label: 'Telegram', value: '@Mmm_7778mm', color: 'purple' },
  { icon: 'PhoneCall', label: 'Телефон', value: '+7 (967) 029-01-10', color: 'teal' },
];

const faqs = [
  { q: 'Сколько стоит обучение?', a: 'Многие курсы бесплатны. Платные начинаются от 990 ₽/мес — с возможностью отменить в любой момент.' },
  { q: 'Есть ли сертификаты?', a: 'Да, по завершении каждого курса вы получаете сертификат, признаваемый работодателями.' },
  { q: 'Подходит ли платформа новичкам?', a: 'Абсолютно. Есть курсы с нуля для школьников, студентов и тех, кто меняет сферу.' },
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormState>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.email.trim()) e.email = 'Введите email';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Некорректный email';
    if (!form.message.trim()) e.message = 'Введите сообщение';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch('https://functions.poehali.dev/5e91fc90-cde6-4174-a35c-ff810f41e2ea', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputBase = "w-full px-4 py-3.5 rounded-xl text-sm text-white placeholder-white/30 outline-none transition-all duration-200";
  const inputStyle = (field: string) => ({
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${errors[field] ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'}`,
    boxShadow: 'none',
  });
  const inputFocusClass = "focus:ring-0 focus:outline-none";

  return (
    <div className="min-h-screen bg-[#0B0F1A] text-white overflow-x-hidden">
      <div className="fixed top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#00DAC8] opacity-[0.04] blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#7C3AED] opacity-[0.05] blur-[100px] pointer-events-none" />

      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-semibold tracking-widest uppercase"
          style={{ background: 'rgba(0,218,200,0.1)', border: '1px solid rgba(0,218,200,0.25)', color: '#00DAC8' }}>
          <Icon name="MessageSquareDot" size={13} />
          Связаться с нами
        </div>
        <h1 className="font-black text-5xl md:text-6xl tracking-tight mb-4 animate-fade-in-up">
          Мы всегда <span className="text-gradient">на связи</span>
        </h1>
        <p className="text-white/50 text-lg max-w-xl mx-auto animate-fade-in-up-delay-1">
          Есть вопросы, предложения или хочешь попасть в команду — напиши нам.
        </p>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: contacts + FAQ */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Contact cards */}
            <div className="flex flex-col gap-3">
              {contacts.map((c, i) => (
                <div key={i}
                  className="flex items-center gap-4 p-4 rounded-2xl group hover:scale-[1.02] transition-all duration-200 cursor-default"
                  style={{ background: 'rgba(17,24,39,0.7)', border: `1px solid rgba(${c.color === 'teal' ? '0,218,200' : '124,58,237'},0.1)` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `rgba(${c.color === 'teal' ? '0,218,200' : '124,58,237'},0.12)` }}>
                    <Icon name={c.icon} fallback="Mail" size={18}
                      className={c.color === 'teal' ? 'text-[#00DAC8]' : 'text-[#A855F7]'} />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 mb-0.5">{c.label}</div>
                    <div className="text-sm font-semibold">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="px-5 py-4 border-b border-white/5">
                <span className="text-sm font-bold">Частые вопросы</span>
              </div>
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/5 last:border-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-3 hover:bg-white/3 transition-colors duration-150 active:scale-[0.99]"
                  >
                    <span className="text-sm font-medium text-white/80">{faq.q}</span>
                    <Icon
                      name="ChevronDown"
                      size={16}
                      className="text-white/40 flex-shrink-0 transition-transform duration-200"
                      style={{ transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' } as React.CSSProperties}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: openFaq === i ? '120px' : '0', opacity: openFaq === i ? 1 : 0 }}
                  >
                    <p className="px-5 pb-4 text-sm text-white/50 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl p-6 md:p-8 h-full"
              style={{ background: 'rgba(17,24,39,0.7)', border: '1px solid rgba(255,255,255,0.07)' }}>

              {status === 'error' && (
                <div className="mb-4 px-4 py-3 rounded-xl text-sm text-red-400 flex items-center gap-2"
                  style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)' }}>
                  <Icon name="AlertCircle" size={16} />
                  Ошибка отправки. Проверьте интернет-соединение или напишите напрямую на почту.
                </div>
              )}
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-16 h-16 rounded-full gradient-teal-purple flex items-center justify-center mb-5 glow-teal animate-scale-in">
                    <Icon name="CircleCheck" size={30} className="text-[#0B0F1A]" />
                  </div>
                  <h3 className="font-black text-2xl mb-2">Сообщение отправлено!</h3>
                  <p className="text-white/50 text-sm max-w-xs mb-6">Мы ответим в течение 24 часов. Спасибо, что написали нам!</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 rounded-full text-sm font-semibold text-white/70 hover:text-white active:scale-95 transition-all duration-200"
                    style={{ border: '1px solid rgba(255,255,255,0.12)' }}
                  >
                    Отправить ещё
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div>
                    <h2 className="font-black text-2xl md:text-3xl tracking-tight mb-1">Напишите нам</h2>
                    <p className="text-white/40 text-sm">Ответим в течение одного рабочего дня</p>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Имя</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                      className={`${inputBase} ${inputFocusClass}`}
                      style={inputStyle('name')}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,218,200,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,218,200,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.name ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.name && <span className="text-xs text-red-400 flex items-center gap-1"><Icon name="AlertCircle" size={12} />{errors.name}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      placeholder="ivan@example.com"
                      value={form.email}
                      onChange={e => { setForm(f => ({ ...f, email: e.target.value })); setErrors(er => ({ ...er, email: '' })); }}
                      className={`${inputBase} ${inputFocusClass}`}
                      style={inputStyle('email')}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,218,200,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,218,200,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.email && <span className="text-xs text-red-400 flex items-center gap-1"><Icon name="AlertCircle" size={12} />{errors.email}</span>}
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-white/60 uppercase tracking-wider">Сообщение</label>
                    <textarea
                      rows={5}
                      placeholder="Расскажите, чем мы можем помочь..."
                      value={form.message}
                      onChange={e => { setForm(f => ({ ...f, message: e.target.value })); setErrors(er => ({ ...er, message: '' })); }}
                      className={`${inputBase} ${inputFocusClass} resize-none`}
                      style={inputStyle('message')}
                      onFocus={e => { e.target.style.borderColor = 'rgba(0,218,200,0.4)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,218,200,0.08)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.5)' : 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                    />
                    {errors.message && <span className="text-xs text-red-400 flex items-center gap-1"><Icon name="AlertCircle" size={12} />{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl font-bold text-base text-[#0B0F1A] gradient-teal-purple glow-teal hover:opacity-90 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Icon name="Loader2" size={18} className="animate-spin" />
                        Отправляем...
                      </>
                    ) : (
                      <>
                        <Icon name="SendHorizonal" size={18} />
                        Отправить сообщение
                      </>
                    )}
                  </button>

                  <p className="text-xs text-white/25 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}