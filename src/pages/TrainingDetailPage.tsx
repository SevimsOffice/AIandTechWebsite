// src/pages/TrainingDetailPage.tsx
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Monitor, CheckCircle2, Users, AlertTriangle, Calendar, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getTrainingBySlug, levelColors, trainings } from '../data/trainings';

export default function TrainingDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language, t } = useLanguage();
  const training = getTrainingBySlug(slug ?? '');
  if (!training) return <Navigate to="/trainings" replace />;

  const lang = language;
  const L = training.en && lang === 'en' ? training.en : {};

  // Helper: prefer English override if available
  const s  = (enVal: string | undefined, trVal: string)    => (lang === 'en' && enVal)  ? enVal  : trVal;
  const arr = <T,>(enArr: T[] | undefined, trArr: T[])     => (lang === 'en' && enArr)  ? enArr  : trArr;

  const title        = s(L.title,       training.title);
  const subtitle     = s(L.subtitle,    training.subtitle);
  const hook         = s(L.hook,        training.hook);
  const hookSub      = s(L.hookSub,     training.hookSub);
  const description  = s(L.description, training.description);
  const levelLabel   = s(L.levelLabel,  training.levelLabel);
  const prereqs      = s(L.prereqs,     training.prereqs);
  const outcomes     = arr(L.outcomes,      training.outcomes);
  const modules      = arr(L.modules,       training.modules);
  const audienceRoles= arr(L.audienceRoles, training.audienceRoles);
  const includes     = arr(L.includes,      training.includes);
  const warning      = s(L.warning, training.warning ?? '');
  const note         = s(L.note,    training.note    ?? '');

  const levelCls      = levelColors[training.level];
  const otherCourses  = trainings.filter((tr) => tr.id !== training.id).slice(0, 3);

  const handleContact = () => {
    window.open('https://calendly.com/sevim/ai-for-business-discovery-call', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Breadcrumb */}
      <div className="border-b border-gray-800/60">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/trainings" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> {t('trainings.detail.back')}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-400 truncate">{title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center gap-3 flex-wrap mb-6">
            <span className="text-xs font-bold text-gray-500 font-mono">
              {t('trainings.detail.prefix')}{training.number}
            </span>
            {training.badge && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {training.badge}
              </span>
            )}
            <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelCls}`}>
              {levelLabel}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-4">
            {hook}
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl">{hookSub}</p>

          <div className="flex items-center gap-6 flex-wrap text-sm text-gray-400 mb-10">
            <span className="flex items-center gap-2"><Clock size={15} className="text-cyan-400" />{training.duration}</span>
            <span className="flex items-center gap-2"><Monitor size={15} className="text-cyan-400" />{training.format}</span>
            <span className="flex items-center gap-2"><Users size={15} className="text-cyan-400" />{training.audience.split(',')[0]}</span>
          </div>

          <button
            onClick={handleContact}
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5 text-base"
          >
            <Calendar size={16} /> {t('trainings.detail.cta.hero')}
          </button>
        </div>
      </section>

      {/* Content grid */}
      <div className="max-w-5xl mx-auto px-4 pb-24 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Main column */}
        <div className="lg:col-span-2 space-y-12">

          <section>
            <h2 className="text-xl font-bold text-white mb-4">{t('trainings.detail.overview')}</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-5">{t('trainings.detail.outcomes')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200 text-sm leading-snug">{o}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-5">{t('trainings.detail.modules')}</h2>
            <div className="space-y-4">
              {modules.map((mod, i) => (
                <div key={i} className="border border-gray-800 rounded-xl overflow-hidden">
                  <div className="bg-gray-900/70 px-5 py-3 flex items-center gap-3">
                    {mod.time && (
                      <span className="text-xs font-bold text-cyan-400 font-mono bg-cyan-500/10 px-2 py-0.5 rounded">
                        {mod.time}
                      </span>
                    )}
                    <h3 className="font-bold text-white text-sm">{mod.title}</h3>
                  </div>
                  <ul className="px-5 py-4 space-y-2">
                    {mod.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-cyan-500 mt-1 flex-shrink-0">&#8250;</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-5">{t('trainings.detail.audience')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audienceRoles.map((role, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/40 border border-gray-800 hover:border-gray-700 rounded-xl p-4 transition-colors">
                  <span className="text-2xl">{role.emoji}</span>
                  <div>
                    <p className="font-bold text-white text-sm mb-0.5">{role.title}</p>
                    <p className="text-xs text-gray-400 leading-snug">{role.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {(warning || note) && (
            <section className="space-y-3">
              {warning && (
                <div className="flex items-start gap-3 bg-red-500/5 border border-red-500/20 rounded-xl p-4">
                  <AlertTriangle size={16} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-red-300">{warning}</p>
                </div>
              )}
              {note && (
                <div className="flex items-start gap-3 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-4">
                  <span className="text-yellow-400 mt-0.5 flex-shrink-0">i</span>
                  <p className="text-sm text-yellow-300">{note}</p>
                </div>
              )}
            </section>
          )}

          <section>
            <h2 className="text-xl font-bold text-white mb-5">{t('trainings.detail.others')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {otherCourses.map((tr) => {
                const otherTitle = lang === 'en' ? (tr.en?.title ?? tr.title) : tr.title;
                const otherLevel = lang === 'en' ? (tr.en?.levelLabel ?? tr.levelLabel) : tr.levelLabel;
                return (
                  <Link
                    key={tr.id}
                    to={`/trainings/${tr.slug}`}
                    className="group flex flex-col bg-gray-900/40 border border-gray-800 hover:border-cyan-400/40 rounded-xl p-4 transition-all hover:-translate-y-0.5"
                  >
                    <span className="text-xs font-mono text-gray-600 mb-1">#{tr.number}</span>
                    <p className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug mb-2">
                      {otherTitle}
                    </p>
                    <span className="text-xs text-gray-500 mt-auto">{tr.durationShort} &middot; {otherLevel}</span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div>
          <div className="sticky top-6 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 space-y-5">
            <h3 className="font-black text-white text-lg">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{subtitle}</p>

            <div className="space-y-3 pt-2 border-t border-gray-800">
              {([
                [t('trainings.detail.sidebar.duration'), training.durationShort],
                [t('trainings.detail.sidebar.format'),   training.format],
                [t('trainings.detail.sidebar.level'),    levelLabel],
                [t('trainings.detail.sidebar.prereqs'),  prereqs],
              ] as [string, string][]).map(([label, value]) => (
                <div key={label} className="flex justify-between items-start text-sm gap-2">
                  <span className="text-gray-500 flex-shrink-0">{label}</span>
                  <span className="text-white font-semibold text-right text-xs max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>

            {includes.length > 0 && (
              <div className="pt-2 border-t border-gray-800">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">
                  {t('trainings.detail.sidebar.includes')}
                </p>
                <ul className="space-y-2">
                  {includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">&#10003;</span>{inc}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={handleContact}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <Calendar size={15} /> {t('trainings.detail.sidebar.cta')}
            </button>
            <p className="text-xs text-gray-600 text-center">{t('trainings.detail.sidebar.free')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
