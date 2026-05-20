// src/pages/TrainingsPage.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Users, ChevronRight, Mail } from 'lucide-react';
import { featuredTrainings as trainings, journeyConfig, levelColors, type Training } from '../data/trainings';

const FILTERS = [
  { key: 'all',      label: 'Tumu' },
  { key: 'bireysel', label: 'Bireysel' },
  { key: 'takim',    label: 'Takim & Kurum' },
  { key: 'donusum',  label: 'Derin Donusum' },
] as const;

function TrainingCard({ training }: { training: Training }) {
  const levelCls = levelColors[training.level];

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
            {training.levelLabel}
          </span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
          {training.title}
        </h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
          {training.hook}
        </p>

        <ul className="space-y-1.5 mb-5 flex-1">
          {training.outcomes.slice(0, 3).map((o, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-cyan-400 mt-0.5 flex-shrink-0">&#10003;</span>
              <span className="line-clamp-1">{o}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {training.durationShort}
            </span>
            <span className="flex items-center gap-1">
              <Users size={12} />
              {training.format.includes('Online') ? 'Online / Yuz yuze' : 'Yuz yuze'}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs font-semibold text-cyan-400 group-hover:gap-2 transition-all">
            Detaylar <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function TrainingsPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filtered = activeFilter === 'all'
    ? trainings
    : trainings.filter((t) => t.journey === activeFilter);

  const handleContact = () => {
    const subject = encodeURIComponent('Kurumsal Egitim Talebi — AI&TECH');
    const body = encodeURIComponent(
      'Merhaba Sevim Hanim,\n\nSirketimiz icin kurumsal egitim talebi hakkinda gorusmek istiyoruz.\n\nSirket adi:\nSektor:\nCalisanlar:\nIlgilendigimiz program:\n\nIyi calismalar.'
    );
    window.location.href = `mailto:info@aiandtech.cloud?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-950">

      {/* HERO */}
      <section className="relative overflow-hidden py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-teal-500/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-8">
            &#10022; Claude Egitim Katalogu 2026
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            3 Program. Bir Hedef:<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              Yapay Zekaya Entegre Olun.
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Bireysel verimlilikten kurumsal donusume, yogun pratik egitimden stratejik kocluğa.
            Kendi rotanizi secin — her program somut ciktiyla biter.
          </p>

          <div className="flex items-center justify-center gap-6 flex-wrap text-sm text-gray-500">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-cyan-400 rounded-full"></span>Yerinde veya Online</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-teal-400 rounded-full"></span>Turkce &amp; Uygulamali</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-green-400 rounded-full"></span>Sektore Ozel Icerik</span>
          </div>
        </div>
      </section>

      {/* JOURNEY MAP */}
      <section className="px-4 pb-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Ogrenme Yollariniz</p>
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
                <span className="text-xs font-bold leading-tight">{cfg.label}</span>
                <span className="text-[11px] text-gray-500 leading-tight hidden sm:block">{cfg.desc}</span>
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
                  {trainings.filter((t) => t.journey === f.key).length}
                </span>
              )}
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-600">{filtered.length} program</span>
        </div>
      </section>

      {/* TRAINING CARDS GRID */}
      <section className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-500">Bu kategoride program bulunamadi.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((t) => (
                <TrainingCard key={t.id} training={t} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="px-4 py-16 border-t border-gray-800 bg-gray-900/30">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Onerilen Yol</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">Nereden Baslamalisiniz?</h2>
          <p className="text-gray-400">Bireysel baslayip kurumsal donusume uzanin.</p>
        </div>
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {['02', '03', '09'].map((num, i, arr) => {
            const t = trainings.find((x) => x.id === num)!;
            if (!t) return null;
            return (
              <div key={num} className="flex items-center gap-2">
                <Link
                  to={`/trainings/${t.slug}`}
                  className="flex flex-col items-center gap-1 p-3 bg-gray-900 border border-gray-800 hover:border-cyan-500/50 rounded-xl text-center w-36 transition-all hover:-translate-y-0.5"
                >
                  <span className="text-xs font-mono text-gray-600">#{t.number}</span>
                  <span className="text-xs font-bold text-white leading-tight text-center">{t.title}</span>
                  <span className="text-[11px] text-gray-500 leading-tight">{t.durationShort}</span>
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
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Kurumsal Egitim</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-3 mb-4">
                Ekibiniz Icin Ozellestirilmis<br />Program Tasarlayalim
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Tum programlar sektor, ekip buyuklugu ve organizasyonun ihtiyaclarina gore ozellestirilebilir.
                Grup fiyatlandirmasi ve yerinde egitim secenekleri mevcuttur.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <button
                  onClick={handleContact}
                  className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Teklif Isteyin
                </button>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>&#10003; On kesif gorusmesi ucretsiz</span>
                  <span>&#10003; Icerik sektore ozel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
