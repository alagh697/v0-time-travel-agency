'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { contactPageContent } from '@/data/contact';
import { destinationDetailsData } from '@/data/destination-details';
import { Button } from '@/components/ui/button';

export function ContactForm() {
  const { t } = useLocale();
  const content = t(contactPageContent);
  const destinations = t(destinationDetailsData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-3xl p-8 border border-border text-center"
      >
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-semibold text-foreground mb-4">
          {t({ fr: 'Message envoyé !', en: 'Message Sent!' })}
        </h3>
        <p className="text-muted-foreground">
          {content.form.successMessage}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-card rounded-3xl p-6 md:p-8 border border-border"
    >
      <h2 className="text-2xl font-semibold text-foreground mb-2">
        {content.form.title}
      </h2>
      <p className="text-muted-foreground mb-8">
        {content.form.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              {content.form.nameLabel}
            </label>
            <input
              type="text"
              required
              placeholder={content.form.namePlaceholder}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              {content.form.emailLabel}
            </label>
            <input
              type="email"
              required
              placeholder={content.form.emailPlaceholder}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Phone & Destination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              {content.form.phoneLabel}
            </label>
            <input
              type="tel"
              placeholder={content.form.phonePlaceholder}
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              {content.form.destinationLabel}
            </label>
            <select
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">{content.form.destinationPlaceholder}</option>
              {destinations.map((dest) => (
                <option key={dest.slug} value={dest.slug}>
                  {dest.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Travelers & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              {content.form.travelersLabel}
            </label>
            <select
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              <option value="">{content.form.travelersPlaceholder}</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm text-muted-foreground mb-2">
              {content.form.dateLabel}
            </label>
            <input
              type="date"
              className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm text-muted-foreground mb-2">
            {content.form.messageLabel}
          </label>
          <textarea
            rows={4}
            placeholder={content.form.messagePlaceholder}
            className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
        </div>

        {/* Privacy Checkbox */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="privacy"
            required
            checked={privacyAccepted}
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
            className="mt-1 w-4 h-4 rounded border-border text-primary focus:ring-primary"
          />
          <label htmlFor="privacy" className="text-sm text-muted-foreground">
            {content.form.privacyLabel}
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full rounded-full py-6 text-base"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              {t({ fr: 'Envoi en cours...', en: 'Sending...' })}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              {content.form.submitButton}
            </span>
          )}
        </Button>
      </form>
    </motion.div>
  );
}
