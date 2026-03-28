'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { quizData } from '@/data/quiz';
import { quizDestinationsData } from '@/data/quizDestinations';
import { Button } from '@/components/ui/button';
import { QuizIntro } from './QuizIntro';
import { QuizProgress } from './QuizProgress';
import { QuizStep } from './QuizStep';
import { QuizLoading } from './QuizLoading';
import { QuizResult } from './QuizResult';
import type { QuizAnswer, RecommendationResponse, QuizDestination } from '@/types';

type QuizPhase = 'intro' | 'questions' | 'loading' | 'result';

interface TravelQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TravelQuizModal({ isOpen, onClose }: TravelQuizModalProps) {
  const { t, locale } = useLocale();
  const content = t(quizData);
  const destinations = t(quizDestinationsData);

  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);
  const [recommendation, setRecommendation] = useState<RecommendationResponse | null>(null);
  const [resultDestination, setResultDestination] = useState<QuizDestination | null>(null);

  const questions = content.questions;
  const currentQuestion = questions[currentStep];
  const selectedOptionId = answers[currentQuestion?.id] || null;
  const canGoNext = selectedOptionId !== null;
  const isLastStep = currentStep === questions.length - 1;

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const resetQuiz = useCallback(() => {
    setPhase('intro');
    setCurrentStep(0);
    setAnswers({});
    setDirection(1);
    setRecommendation(null);
    setResultDestination(null);
  }, []);

  const handleStart = useCallback(() => {
    setPhase('questions');
  }, []);

  const handleSelectOption = useCallback((optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId,
    }));
  }, [currentQuestion?.id]);

  const handlePrevious = useCallback(() => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const handleNext = useCallback(async () => {
    if (!canGoNext) return;

    if (isLastStep) {
      // Submit and get recommendation
      setPhase('loading');

      const quizAnswers: QuizAnswer[] = Object.entries(answers).map(([questionId, optionId]) => ({
        questionId,
        optionId,
      }));

      try {
        const response = await fetch('/api/recommend-destination', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            answers: quizAnswers,
            locale,
            useAI: true,
          }),
        });

        const data = await response.json();

        if (data.success && data.recommendation) {
          setRecommendation(data.recommendation);
          const dest = destinations.find(d => d.id === data.recommendation.destinationId);
          setResultDestination(dest || destinations[0]);
          setPhase('result');
        } else {
          throw new Error('Failed to get recommendation');
        }
      } catch (error) {
        console.error('[TravelQuizModal] Error getting recommendation:', error);
        // Still show a result using fallback
        setPhase('result');
      }
    } else {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  }, [canGoNext, isLastStep, answers, locale, destinations]);

  const handleRetake = useCallback(() => {
    resetQuiz();
    setPhase('questions');
  }, [resetQuiz]);

  const handleExplore = useCallback(() => {
    // For now, close the modal
    // In the future, this could navigate to a destination page
    onClose();
  }, [onClose]);

  const handleClose = useCallback(() => {
    onClose();
    // Reset after animation completes
    setTimeout(resetQuiz, 300);
  }, [onClose, resetQuiz]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative z-10 flex h-full w-full flex-col bg-background md:h-auto md:max-h-[90vh] md:w-full md:max-w-xl md:rounded-3xl md:shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-secondary/80 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={content.navigation.close}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content area */}
            <div className="flex-1 overflow-y-auto px-6 py-16 md:px-8 md:py-12">
              <AnimatePresence mode="wait">
                {phase === 'intro' && (
                  <QuizIntro key="intro" content={content.intro} onStart={handleStart} />
                )}

                {phase === 'questions' && currentQuestion && (
                  <div key="questions" className="flex flex-col gap-6">
                    <QuizProgress
                      currentStep={currentStep}
                      totalSteps={questions.length}
                    />
                    <QuizStep
                      question={currentQuestion}
                      selectedOptionId={selectedOptionId}
                      onSelectOption={handleSelectOption}
                      direction={direction}
                    />
                  </div>
                )}

                {phase === 'loading' && (
                  <QuizLoading key="loading" content={content.loading} />
                )}

                {phase === 'result' && recommendation && resultDestination && (
                  <QuizResult
                    key="result"
                    recommendation={recommendation}
                    destination={resultDestination}
                    content={content.result}
                    onRetake={handleRetake}
                    onExplore={handleExplore}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Navigation footer - only show during questions phase */}
            {phase === 'questions' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t bg-card/50 px-6 py-4 md:rounded-b-3xl md:px-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <Button
                    variant="ghost"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className="gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    {content.navigation.previous}
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!canGoNext}
                    className="gap-2"
                  >
                    {content.navigation.next}
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
