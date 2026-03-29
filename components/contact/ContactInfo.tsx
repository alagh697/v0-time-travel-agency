'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Clock, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useLocale } from '@/lib/locale-context';
import { contactPageContent, contactInfo, openingHours } from '@/data/contact';

export function ContactInfo() {
  const { t } = useLocale();
  const content = t(contactPageContent);
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const contactItems = [
    { icon: Mail, label: content.emailLabel, value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: content.phoneLabel, value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
    { icon: MapPin, label: content.addressLabel, value: contactInfo.address, href: null },
    { icon: MessageCircle, label: content.whatsappLabel, value: contactInfo.whatsapp, href: `https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}` },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Info Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-card rounded-3xl p-6 border border-border"
      >
        <h3 className="text-xl font-semibold text-foreground mb-6">
          {content.infoTitle}
        </h3>

        <div className="space-y-4">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-foreground">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Opening Hours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-card rounded-3xl p-6 border border-border"
      >
        <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-3">
          <Clock className="w-5 h-5 text-primary" />
          {content.hoursTitle}
        </h3>

        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-muted-foreground">{content.weekdaysLabel}</span>
            <span className="text-foreground font-medium">{openingHours.weekdays}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{content.weekendLabel}</span>
            <span className="text-foreground font-medium">{openingHours.weekend}</span>
          </div>
        </div>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-card rounded-3xl p-6 border border-border"
      >
        <h3 className="text-xl font-semibold text-foreground mb-6">
          {content.faqTitle}
        </h3>

        <div className="space-y-3">
          {content.faqItems.map((item) => (
            <div key={item.id} className="border-b border-border last:border-0 pb-3 last:pb-0">
              <button
                onClick={() => setOpenFaq(openFaq === item.id ? null : item.id)}
                className="w-full flex items-center justify-between text-left py-2 cursor-pointer"
              >
                <span className="text-foreground font-medium pr-4">{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-muted-foreground flex-shrink-0 transition-transform ${
                    openFaq === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === item.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="text-sm text-muted-foreground pb-2"
                >
                  {item.answer}
                </motion.p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
