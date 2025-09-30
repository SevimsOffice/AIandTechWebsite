import React, { useState } from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {t('contact.title')}{' '}
            </span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t('contact.title.highlight')}
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.connect')}</h3>
              <p className="text-gray-400 mb-8">
                {t('contact.connect.desc')}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg">
                  <Calendar className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t('contact.schedule.title')}</h4>
                  <p className="text-gray-400 text-sm mb-2">{t('contact.schedule.desc')}</p>
                  <a 
                    href="https://calendly.com/sevim/ai-for-business-discovery-call" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    {t('contact.schedule.link')}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">{t('contact.questions.title')}</h4>
                  <p className="text-gray-400 text-sm">{t('contact.questions.desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">{t('contact.form.title')}</h3>
              
              <div className="relative">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSftsyVR9XMBQxbUknuAdJLUiuBSHWOhALcJvCl7YEzPBA68PA/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="Contact Form"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;