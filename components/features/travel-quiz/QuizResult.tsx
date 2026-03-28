'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, RotateCcw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/shared';
import type { RecommendationResponse, QuizData, QuizDestination } from '@/types';

interface QuizResultProps {
  recommendation: RecommendationResponse;
  destination: QuizDestination;
  content: QuizData['result'];
  onRetake: () => void;
  onExplore: () => void;
}

export function QuizResult({ 
  recommendation, 
  destination, 
  content, 
  onRetake, 
  onExplore 
}: QuizResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col gap-6"
    >
      {/* Header */}
      <div className="text-center space-y-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10"
        >
          <Sparkles className="h-6 w-6 text-primary" />
        </motion.div>
        <Heading as="h2" size="md" className="text-foreground">
          {content.title}
        </Heading>
        {recommendation.confidenceLabel && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {recommendation.confidenceLabel}
            </Badge>
          </motion.div>
        )}
      </div>

      {/* Destination Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-hidden rounded-2xl border bg-card shadow-lg"
      >
        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={destination.image}
            alt={recommendation.destinationName}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="outline" className="mb-2 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              {destination.era}
            </Badge>
            <h3 className="text-2xl font-serif font-bold text-white text-balance">
              {recommendation.destinationName}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {recommendation.shortSummary}
          </p>

          <div className="space-y-2">
            <p className="text-foreground leading-relaxed">
              {recommendation.whyItMatches}
            </p>
          </div>

          {/* Traits */}
          <div className="flex flex-wrap gap-2">
            {recommendation.matchingTraits.map((trait, index) => (
              <motion.div
                key={trait}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              >
                <Badge variant="outline" className="bg-secondary/50">
                  {trait}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <Button
          size="lg"
          onClick={onExplore}
          className="flex-1 rounded-full gap-2"
        >
          {content.exploreButton}
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={onRetake}
          className="flex-1 rounded-full gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          {content.retakeButton}
        </Button>
      </motion.div>
    </motion.div>
  );
}
