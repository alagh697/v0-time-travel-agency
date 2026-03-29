'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Users, Check } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { bookingData, bookingIntroData } from '@/data/booking';
import { Button } from '@/components/ui/button';
import { Container, Section, Heading } from '@/components/shared';
import { BookingConfirmation } from '@/components/features/booking';
import { staggerContainer, staggerItem, fadeUp, slideFromLeft, slideFromRight } from '@/lib/animations';
import { cn } from '@/lib/utils';

export function BookingSection() {
  const { t } = useLocale();
  const content = t(bookingData);
  const intro = t(bookingIntroData);
  
  const [activeStep, setActiveStep] = useState(1);
  const [selectedDestination, setSelectedDestination] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedTravelers, setSelectedTravelers] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Generate next 14 days for date selection
  const generateDates = () => {
    const dates: string[] = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toLocaleDateString('fr-FR', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }));
    }
    return dates;
  };

  const availableDates = generateDates();

  const canProceed = () => {
    switch (activeStep) {
      case 1: return selectedDestination !== null;
      case 2: return selectedDate !== null;
      case 3: return selectedTime !== null;
      case 4: return selectedTravelers !== null;
      default: return false;
    }
  };

  const handleNext = () => {
    if (!canProceed()) return;
    
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    } else {
      // Final step - show confirmation
      setShowConfirmation(true);
    }
  };

  const handleStepClick = (stepNumber: number) => {
    // Only allow going back to completed steps
    if (stepNumber < activeStep) {
      setActiveStep(stepNumber);
    }
  };

  const getSelectedDestinationName = () => {
    const dest = content.destinations.find(d => d.id === selectedDestination);
    return dest?.name || '';
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    // Reset form
    setActiveStep(1);
    setSelectedDestination(null);
    setSelectedDate(null);
    setSelectedTime(null);
    setSelectedTravelers(null);
  };

  const stepContentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <Section 
        id="booking-section"
        variant="card" 
        size="lg" 
        animate={false} 
        className="mx-4 md:mx-8 lg:mx-auto lg:max-w-7xl scroll-mt-24"
      >
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16"
          >
            {/* Left Column - Booking Steps */}
            <motion.div variants={slideFromLeft}>
              {/* Step Tabs */}
              <div className="flex flex-wrap gap-2 mb-8">
                {content.steps.map((step) => {
                  const isCompleted = step.number < activeStep;
                  const isActive = step.number === activeStep;
                  const isClickable = step.number < activeStep;
                  
                  return (
                    <button
                      key={step.number}
                      onClick={() => handleStepClick(step.number)}
                      disabled={!isClickable && !isActive}
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2',
                        isActive && 'bg-primary text-primary-foreground',
                        isCompleted && 'bg-primary/20 text-primary cursor-pointer hover:bg-primary/30',
                        !isActive && !isCompleted && 'bg-background text-muted-foreground cursor-not-allowed opacity-50'
                      )}
                    >
                      {isCompleted && <Check className="w-3.5 h-3.5" />}
                      {step.number}. {step.label}
                    </button>
                  );
                })}
              </div>

              {/* Step Content */}
              <AnimatePresence mode="wait">
                {/* Step 1: Destination */}
                {activeStep === 1 && (
                  <motion.div
                    key="step-1"
                    variants={stepContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <p className="text-sm text-muted-foreground mb-4">
                      {intro.label}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {content.destinations.map((destination) => (
                        <button
                          key={destination.id}
                          onClick={() => setSelectedDestination(destination.id)}
                          className={cn(
                            'relative aspect-[4/3] rounded-xl overflow-hidden group transition-all',
                            selectedDestination === destination.id
                              ? 'ring-2 ring-primary ring-offset-2 ring-offset-card'
                              : 'hover:ring-2 hover:ring-border'
                          )}
                        >
                          <Image
                            src={destination.image}
                            alt={destination.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <span className="absolute bottom-2 left-2 right-2 text-xs text-white font-medium text-left line-clamp-2">
                            {destination.name}
                          </span>
                          {selectedDestination === destination.id && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-primary-foreground" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Date */}
                {activeStep === 2 && (
                  <motion.div
                    key="step-2"
                    variants={stepContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {content.dateLabel}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                      {availableDates.slice(0, 8).map((date) => (
                        <button
                          key={date}
                          onClick={() => setSelectedDate(date)}
                          className={cn(
                            'p-3 rounded-lg text-sm font-medium transition-all text-left',
                            selectedDate === date
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background hover:bg-muted border border-border'
                          )}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Time */}
                {activeStep === 3 && (
                  <motion.div
                    key="step-3"
                    variants={stepContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {content.timeLabel}
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {content.times.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={cn(
                            'p-3 rounded-lg text-sm font-medium transition-all',
                            selectedTime === time
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background hover:bg-muted border border-border'
                          )}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Travelers */}
                {activeStep === 4 && (
                  <motion.div
                    key="step-4"
                    variants={stepContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      {content.travelersLabel}
                    </p>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                      {content.travelerOptions.map((num) => (
                        <button
                          key={num}
                          onClick={() => setSelectedTravelers(num)}
                          className={cn(
                            'p-3 rounded-lg text-sm font-medium transition-all',
                            selectedTravelers === num
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-background hover:bg-muted border border-border'
                          )}
                        >
                          {num} {num === 1 ? content.travelerUnit : content.travelerUnitPlural}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Right Column - Heading and CTA */}
            <motion.div 
              variants={slideFromRight}
              className="flex flex-col justify-center"
            >
              <Heading as="h2" size="lg" className="mb-6">
                {content.headline}
              </Heading>
              
              {/* Summary of selections */}
              <div className="space-y-2 mb-8">
                {selectedDestination && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Destination:</span> {getSelectedDestinationName()}
                  </p>
                )}
                {selectedDate && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">Date:</span> {selectedDate}
                  </p>
                )}
                {selectedTime && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{content.steps[2].label}:</span> {selectedTime}
                  </p>
                )}
                {selectedTravelers && (
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{content.steps[3].label}:</span> {selectedTravelers} {selectedTravelers === 1 ? content.travelerUnit : content.travelerUnitPlural}
                  </p>
                )}
              </div>
              
              <Button 
                size="lg" 
                className="rounded-full px-10 w-fit"
                onClick={handleNext}
                disabled={!canProceed()}
              >
                {activeStep === 4 ? content.ctaConfirm : content.cta}
              </Button>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* Confirmation Modal */}
      <BookingConfirmation
        isOpen={showConfirmation}
        onClose={handleCloseConfirmation}
        booking={{
          destination: getSelectedDestinationName(),
          date: selectedDate || '',
          time: selectedTime || '',
          travelers: selectedTravelers || 0,
        }}
        content={content.confirmation}
      />
    </>
  );
}
