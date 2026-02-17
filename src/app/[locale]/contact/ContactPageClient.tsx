'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { type Locale } from '@/lib/i18n/config';
import { AdUnit } from '@/components/ads/AdUnit';
interface ContactPageClientProps {
  locale: Locale;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPageClient({ locale }: ContactPageClientProps) {
  const t = useTranslations('contactPage');
  const tCommon = useTranslations('common');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission (in a real app, this would send to an API)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, always succeed
    setFormStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="flex-1">
      {/* Top Ad Slot */}
      <div className="container mx-auto px-4 pt-16 pb-4">
        <AdUnit slotId="contact-top-banner" format="horizontal" className="max-w-4xl mx-auto !my-0" />
      </div>
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-b from-[hsl(var(--color-primary)/0.03)] to-transparent">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--color-primary)/0.1)] text-[hsl(var(--color-primary))] text-sm font-medium mb-6">
              {tCommon('brand')} Support
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--color-foreground))] mb-6 tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-[hsl(var(--color-muted-foreground))] leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-24 -mt-10 relative z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {formStatus === 'success' ? (
              <Card className="p-12 text-center glass-card border-[hsl(var(--color-success)/0.2)]">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6 shadow-md">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                  {t('form.success.title')}
                </h3>
                <p className="text-[hsl(var(--color-muted-foreground))] mb-8 text-lg">
                  {t('form.success.description')}
                </p>
                <Button variant="outline" size="lg" onClick={() => setFormStatus('idle')}>
                  {t('form.success.button')}
                </Button>
              </Card>
            ) : (
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-10 shadow-xl border border-[hsl(var(--color-border))] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(var(--color-primary)/0.05)] rounded-bl-full -mr-10 -mt-10 pointer-events-none" />

                <div className="text-center mb-10 relative">
                  <h2 className="text-2xl font-bold text-[hsl(var(--color-foreground))] mb-2">
                    {t('form.title')}
                  </h2>
                  <p className="text-[hsl(var(--color-muted-foreground))]">
                    {t('form.description')}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-semibold text-[hsl(var(--color-foreground))]"
                      >
                        {t('form.fields.name.label')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] transition-shadow"
                        placeholder={t('form.fields.name.placeholder')}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-semibold text-[hsl(var(--color-foreground))]"
                      >
                        {t('form.fields.email.label')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] transition-shadow"
                        placeholder={t('form.fields.email.placeholder')}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-semibold text-[hsl(var(--color-foreground))]"
                    >
                      {t('form.fields.subject.label')}
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] appearance-none transition-shadow"
                      >
                        <option value="">{t('form.fields.subject.placeholder')}</option>
                        <option value="general">{t('form.fields.subject.options.general')}</option>
                        <option value="bug">{t('form.fields.subject.options.bug')}</option>
                        <option value="feature">{t('form.fields.subject.options.feature')}</option>
                        <option value="feedback">{t('form.fields.subject.options.feedback')}</option>
                        <option value="other">{t('form.fields.subject.options.other')}</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-semibold text-[hsl(var(--color-foreground))]"
                    >
                      {t('form.fields.message.label')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--color-ring))] resize-none transition-shadow"
                      placeholder={t('form.fields.message.placeholder')}
                    />
                  </div>

                  {formStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                      <p className="text-sm font-medium">
                        {t('form.error')}
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="w-full h-12 text-base shadow-lg shadow-blue-500/20"
                    loading={formStatus === 'submitting'}
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? t('form.submit.loading') : t('form.submit.default')}
                    {formStatus !== 'submitting' && <Send className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 bg-[hsl(var(--color-muted)/0.3)]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[hsl(var(--color-background))] shadow-sm mb-6">
              <MessageSquare className="h-8 w-8 text-[hsl(var(--color-primary))]" />
            </div>
            <h2 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-[hsl(var(--color-muted-foreground))] mb-8 text-lg">
              {t('faq.description', { brand: tCommon('brand') })}
            </p>
            <Link href={`/${locale}/faq`}>
              <Button variant="outline" size="lg" className="h-12 px-8">
                {t('faq.button')}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
