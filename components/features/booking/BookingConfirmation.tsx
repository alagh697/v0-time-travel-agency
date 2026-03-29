'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, X, Calendar, Clock, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface BookingDetails {
  destination: string;
  date: string;
  time: string;
  travelers: number;
}

interface BookingConfirmationContent {
  title: string;
  subtitle: string;
  destinationLabel: string;
  dateLabel: string;
  timeLabel: string;
  travelersLabel: string;
  travelersUnit: string;
  closeButton: string;
}

interface BookingConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  booking: BookingDetails;
  content: BookingConfirmationContent;
}

export function BookingConfirmation({ 
  isOpen, 
  onClose, 
  booking, 
  content 
}: BookingConfirmationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
          >
            <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
              {/* Header with success icon */}
              <div className="bg-primary/10 p-6 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 15, stiffness: 300, delay: 0.1 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4"
                >
                  <CheckCircle className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground">
                  {content.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {content.subtitle}
                </p>
              </div>
              
              {/* Booking details */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{content.destinationLabel}</p>
                    <p className="text-sm font-medium text-foreground">{booking.destination}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{content.dateLabel}</p>
                    <p className="text-sm font-medium text-foreground">{booking.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{content.timeLabel}</p>
                    <p className="text-sm font-medium text-foreground">{booking.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                  <Users className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{content.travelersLabel}</p>
                    <p className="text-sm font-medium text-foreground">
                      {booking.travelers} {content.travelersUnit}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Close button */}
              <div className="p-6 pt-0">
                <Button 
                  onClick={onClose}
                  className="w-full rounded-full"
                  size="lg"
                >
                  {content.closeButton}
                </Button>
              </div>
              
              {/* X close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-1 rounded-full hover:bg-muted transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
