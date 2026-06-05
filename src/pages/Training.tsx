import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, PlayCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PLAYLIST_URL = 'https://www.youtube.com/watch?v=uks5PIYuxdA&list=PL_9-Sp98dzgzMe-Jo_slYDu5SZNsDMupo';
const THUMBNAIL_URL = 'https://img.youtube.com/vi/uks5PIYuxdA/maxresdefault.jpg';

const Training = () => {
  const { language } = useLanguage();
  const isTr = language === 'tr';

  const labels = {
    badge: isTr ? 'Ücretsiz İçerik' : 'Free Content',
    title: isTr ? 'Eğitim' : 'Training',
    titleHighlight: isTr ? 'Kataloğu' : 'Catalog',
    subtitle: isTr
      ? 'Claude\'ı sıfırdan öğrenmek için hazır playlist. Ücretsiz, Türkçe, hemen başlayabilirsin.'
      : 'A ready playlist to learn Claude from scratch. Free, in Turkish, start right now.',
    playlistTitle: isTr ? 'Yeni Başlayanlar için Claude' : 'Claude for Beginners',
    playlistDesc: isTr
      ? 'Claude\'ı hiç kullanmamış olanlar için hazırladığım adım adım video serisi. Temel kullanımdan iş akışlarına kadar her şeyi pratik örneklerle öğrenin.'
      : 'A step-by-step video series I prepared for those who have never used Claude. Learn everything from basic usage to workflows with practical examples.',
    watch: isTr ? 'YouTube\'da İzle' : 'Watch on YouTube',
    free: isTr ? 'Ücretsiz' : 'Free',
    turkish: isTr ? 'Türkçe' : 'Turkish',
    playlist: 'Playlist',
    corporate: isTr ? 'Kurumsal Eğitimler' : 'Corporate Trainings',
    corporateDesc: isTr
      ? 'Bireysel verimlilik, takım programları ve birebir stratejik koçluk için.'
      : 'For individual productivity, team programs, and 1-on-1 strategic coaching.',
    viewAll: isTr ? 'Tüm Eğitimleri Gör' : 'View All Trainings',
  };

  return (
    <section id="training" className="py-24">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand/10 text-brand text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-brand/20">
            {labels.badge}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">{labels.title} </span>
            <span className="text-brand">{labels.titleHighlight}</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {labels.subtitle}
          </p>
        </div>

        {/* YouTube Playlist Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-gray-900 border border-gray-800 hover:border-brand/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10"
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden">
              <img
                src={THUMBNAIL_URL}
                alt={labels.playlistTitle}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 group-hover:bg-red-500 transition-colors rounded-full p-5 shadow-2xl">
                  <PlayCircle className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Tags */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Youtube className="h-3 w-3" /> YouTube
                </span>
                <span className="bg-brand/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {labels.free}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:flex md:items-center md:justify-between">
              <div className="mb-5 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
                  {labels.playlistTitle}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  {labels.playlistDesc}
                </p>
                <div className="flex gap-2 mt-4">
                  {[labels.free, labels.turkish, labels.playlist].map(tag => (
                    <span key={tag} className="text-xs font-semibold text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-bold px-6 py-3 rounded-xl transition-colors">
                  <Youtube className="h-5 w-5" />
                  {labels.watch}
                </span>
              </div>
            </div>
          </a>
        </div>

        {/* Corporate training CTA */}
        <div className="text-center">
          <div className="inline-block bg-gray-900 border border-gray-800 rounded-2xl px-8 py-6">
            <p className="text-white font-semibold mb-1">{labels.corporate}</p>
            <p className="text-gray-500 text-sm mb-4">{labels.corporateDesc}</p>
            <Link
              to="/trainings"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all text-sm"
            >
              {labels.viewAll} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Training;