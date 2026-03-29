'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Globe, XCircle } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { destinationDetailContent } from '@/data/destination-details';
import { bookingData } from '@/data/booking';
import { Button } from '@/components/ui/button';
import { BookingConfirmation } from '@/components/features/booking';
import type { DestinationDetail } from '@/types';

interface BookingSidebarProps {
  destination: DestinationDetail;
}

export function BookingSidebar({ destination }: BookingSidebarProps) {
  const { t } = useLocale();
  const content = t(destinationDetailContent);
  const booking = t(bookingData);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(destination.bookingOptions.times[0]);
  const [travelers, setTravelers] = useState(2);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleBooking = () => {
    if (selectedDate) {
      setShowConfirmation(true);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString(t({ fr: 'fr-FR', en: 'en-US' }), {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="sticky top-8"
      >
        <div className="bg-card rounded-3xl p-6 border border-border shadow-lg">
          {/* Price */}
          <div className="mb-6">
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-semibold text-foreground">
                {destination.currency}{destination.price}
              </span>
              <span className="text-muted-foreground text-sm">
                / {t({ fr: 'personne', en: 'person' })}
              </span>
            </div>
          </div>

          {/* Booking Form */}
          <div className="space-y-4 mb-6">
            {/* Date */}
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                {content.dateLabel}
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              />
            </div>

            {/* Time */}
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Clock className="w-4 h-4" />
                {content.timeLabel}
              </label>
              <div className="flex gap-2">
                {destination.bookingOptions.times.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`flex-1 px-4 py-3 rounded-xl border text-sm font-medium transition-all cursor-pointer ${
                      selectedTime === time
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-background border-border text-foreground hover:border-primary/50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Users className="w-4 h-4" />
                {content.travelersLabel}
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setTravelers(Math.max(1, travelers - 1))}
                  className="w-10 h-10 rounded-xl border border-border bg-background text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  -
                </button>
                <span className="flex-1 text-center text-foreground font-medium">
                  {travelers}
                </span>
                <button
                  onClick={() => setTravelers(Math.min(8, travelers + 1))}
                  className="w-10 h-10 rounded-xl border border-border bg-background text-foreground hover:bg-muted transition-colors cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center py-4 border-t border-border mb-6">
            <span className="text-muted-foreground">Total</span>
            <span className="text-2xl font-semibold text-foreground">
              {destination.currency}{(destination.price * travelers).toLocaleString()}
            </span>
          </div>

          {/* CTA */}
          <Button 
            className="w-full rounded-full py-6 text-base"
            onClick={handleBooking}
            disabled={!selectedDate}
          >
            {content.bookNow}
          </Button>

          {/* Info */}
          <div className="mt-6 pt-6 border-t border-border space-y-3">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 flex-shrink-0" />
              <span>{content.durationLabel}: {destination.duration}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Users className="w-4 h-4 flex-shrink-0" />
              <span>{destination.groupSize}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Globe className="w-4 h-4 flex-shrink-0" />
              <span>{content.languagesLabel}: {destination.bookingOptions.languages.join(', ')}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <XCircle className="w-4 h-4 flex-shrink-0" />
              <span>{content.cancellationLabel} {destination.bookingOptions.cancellationHours}h</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Shared Booking Confirmation Modal */}
      <BookingConfirmation
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        booking={{
          destination: destination.name,
          date: formatDate(selectedDate),
          time: selectedTime,
          travelers: travelers,
        }}
        content={{
          title: booking.confirmation.title,
          subtitle: booking.confirmation.subtitle,
          destinationLabel: booking.confirmation.destinationLabel,
          dateLabel: booking.confirmation.dateLabel,
          timeLabel: booking.confirmation.timeLabel,
          travelersLabel: booking.confirmation.travelersLabel,
          travelersUnit: booking.confirmation.travelersUnit,
          closeButton: booking.confirmation.closeButton,
        }}
      />
    </>
  );
}
