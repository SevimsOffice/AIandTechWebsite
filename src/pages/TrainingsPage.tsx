// src/pages/TrainingsPage.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, ChevronRight, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { featuredTrainings as trainings, journeyConfig, levelColors, type Training } from '../data/trainings';

function TrainingCard({ training, lang }: { training: Training; lang: string }) {
  const levelCls = levelColors[training.level];
  const title      = lang === 'en' ? (training.en?.title      ?? training.title)      : training.title;
  const hook       = lang === 'en' ? (training.en?.hook       ?? training.hook)       : training.hook;
  const levelLabel = lang === 'en' ? (training.en?.levelLabel ?? training.levelLabel) : training.levelLabel;
  const outcomes   = lang === 'en' ? (training.en?.outcomes   ?? training.outcomes)   : training.outcomes;

  return (
    <Link
      to={`/trainings/${training.slug}`}
      className="group relative flex flex-col bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/5"
    >
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500/60 to-teal-500/60 group-hover:from-cyan-400 group-hover:to-teal-400 transition-all" />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-gray-500 font-mono">#{training.number}</span>
            {training.badge && (
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                {training.badge}
              </span>
            )}
          </div>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex-shrink-0 ${levelCls}`}>
            {levelLabel}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">{hook}</p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {outcomes.slice(0, 3).map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-cyan-400 mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="line-clamp-1">{o}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock size={12} />{training.durationShort}</span>
            <span className="flex items-center gap-1">
              <Users size={12} />
              {training.format.includes('Online')
                ? (lang === 'en' ? 'Online / In-person' : 'Online / Yüz yüze')
                : (lang === 'en' ? 'In-person' : 'Yüz yüze')}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:gap-2 transition-all">
            {lang === 'en' ? 'Details' : 'Detaylar'} <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function TrainingsPage() {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const FILTERS = [
    { key: 'all',      label: t('trainings.catalog.filter.all') },
    { key: 'bireysel', label: t('trainings.catalog.filter.individual') },
    { key: 'takim',    label: t('trainings.catalog.filter.team') },
    { key: 'donusum',  label: t('trainings.catalog.filter.transformation') },
  ];

  const filtered = activeFilter === 'all'
    ? trainings
    : trainings.filter((tr) => tr.journey === activeFilter);

  const handleContact = () => {
    window.open('https://calendly.com/sevim/ai-for-business-discovery-call', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-950">

      {/* JOURNEY MAP */}
      <section className="px-4 pt-10 pb-8">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            {t('trainings.catalog.journey.title')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Object.entries(journeyConfig).map(([key, cfg]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-center transition-all cursor-pointer ${
                  activeFilter === key
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-300'
                    : 'bg-gray-900/40 border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200'
                }`}
              >
                <span className="text-2xl">{cfg.icon}</span>
                <span className="text-xs font-bold leading-tight">
                  {language === 'en' ? cfg.labelEn : cfg.label}
                </span>
                <span className="text-[11px] text-gray-500 leading-tight hidden sm:block">
                  {language === 'en' ? cfg.descEn : cfg.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER PILLS */}
      <section className="px-4 pb-8">
        <div className="max-w-5xl mx-auto flex items-center gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all ${
                activeFilter === f.key
                  ? 'bg-cyan-500 border-cyan-500 text-gray-950'
                  : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
              }`}
            >
              {f.label}
              {f.key !== 'all' && (
                <span className="ml-1.5 text-xs opacity-60">
                  {trainings.filter((tr) => tr.journey === f.key).length}
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-600">
            {filtered.length} {t('trainings.catalog.count')}
          </span>
        </div>
      </section>

      {/* TRAINING CARDS GRID */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">{t('trainings.catalog.empty')}</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((tr) => (
                <TrainingCard key={tr.id} training={tr} lang={language} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* RECOMMENDED PATH */}
      <section className="px-4 py-16 border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
            {t('trainings.catalog.recommended.label')}
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            {t('trainings.catalog.recommended.title')}
          </h2>
          <p className="text-gray-400">{t('trainings.catalog.recommended.desc')}</p>
        </div>
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {['02', '03', '09'].map((num, i, arr) => {
            const tr = trainings.find((x) => x.id === num);
            if (!tr) return null;
            const cardTitle = language === 'en' ? (tr.en?.title ?? tr.title) : tr.title;
            return (
              <div key={num} className="flex items-center gap-2">
                <Link
                  to={`/trainings/${tr.slug}`}
                  className="flex flex-col items-center gap-1 p-3 bg-gray-900 border border-gray-800 hover:border-cyan-500/50 rounded-xl text-center w-36 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-xs font-mono text-gray-600">#{tr.number}</span>
                  <span className="text-xs font-bold text-white leading-tight text-center">{cardTitle}</span>
                  <span className="text-[11px] text-gray-500 leading-tight">{tr.durationShort}</span>
                </Link>
                {i < arr.length - 1 && <ArrowRight size={16} className="text-gray-600 flex-shrink-0" />}
              </div>
            );
          })}
        </div>
      </section>

      {/* CORPORATE CTA */}
      <section className="px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-900/80 border border-gray-700 rounded-2xl p-10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-teal-500/5 pointer-events-none" />
            <div className="relative">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                {t('trainings.catalog.corporate.badge')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4">
                {t('trainings.catalog.corporate.title1')}<br />
                {t('trainings.catalog.corporate.title2')}
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                {t('trainings.catalog.corporate.desc')}
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={handleContact}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <Calendar size={16} />
                  {t('trainings.catalog.corporate.cta')}
                </button>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>&#10003; {t('trainings.catalog.corporate.free')}</span>
                  <span>&#10003; {t('trainings.catalog.corporate.custom')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
