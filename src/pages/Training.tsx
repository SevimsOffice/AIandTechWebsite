import React from 'react';
import { ExternalLink, BookOpen, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Training = () => {
  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      title: t('training.course1.title'),
      description: t('training.course1.desc'),
      image: 'https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg',
      duration: '6 weeks',
      level: 'Beginner',
      students: '2,450',
      buyUrl: '#',
    },
    {
      id: 2,
      title: t('training.course2.title'),
      description: t('training.course2.desc'),
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      duration: '8 weeks',
      level: 'Intermediate',
      students: '1,850',
      buyUrl: '#',
    },
    {
      id: 3,
      title: t('training.course3.title'),
      description: t('training.course3.desc'),
      image: 'https://images.pexels.com/photos/3944091/pexels-photo-3944091.jpeg',
      duration: '10 weeks',
      level: 'Advanced',
      students: '3,200',
      buyUrl: '#',
    },
    {
      id: 4,
      title: t('training.course4.title'),
      description: t('training.course4.desc'),
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      duration: '12 weeks',
      level: 'Intermediate',
      students: '2,750',
      buyUrl: '#',
    },
    {
      id: 5,
      title: t('training.course5.title'),
      description: t('training.course5.desc'),
      image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg',
      duration: '8 weeks',
      level: 'Advanced',
      students: '1,650',
      buyUrl: '#',
    },
    {
      id: 6,
      title: t('training.course6.title'),
      description: t('training.course6.desc'),
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg',
      duration: '4 weeks',
      level: 'Beginner',
      students: '3,100',
      buyUrl: '#',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case t('training.level.beginner'):
        return 'bg-green-500/20 text-green-400';
      case t('training.level.intermediate'):
        return 'bg-yellow-500/20 text-yellow-400';
      case t('training.level.advanced'):
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="training" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('training.title')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('training.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('training.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-cyan-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(t(`training.level.${course.level.toLowerCase()}`))}`}>
                    {t(`training.level.${course.level.toLowerCase()}`)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {course.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration.replace('weeks', t('common.weeks'))}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {course.students.replace('students', t('common.students'))}
                  </div>
                </div>

                <a
                  href={course.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  {t('training.view.course')}
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-full">
            <span className="text-cyan-400 font-semibold">{t('training.custom')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;