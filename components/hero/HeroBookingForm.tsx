'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, Users, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { HeroContent } from '@/types';
import type { HeroDestination } from '@/data/hero-destinations';

interface HeroBookingFormProps {
  destinations: HeroDestination[];
  activeIndex: number;
  onDestinationChange: (index: number) => void;
  content: HeroContent;
}

export function HeroBookingForm({
  destinations,
  activeIndex,
  onDestinationChange,
  content,
}: HeroBookingFormProps) {
  const activeDestination = destinations[activeIndex];
  
  const [isDestinationOpen, setIsDestinationOpen] = useState(false);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isTravelersOpen, setIsTravelersOpen] = useState(false);
  
  const [selectedDate, setSelectedDate] = useState('15 Mars 2025');
  const [selectedTime, setSelectedTime] = useState(activeDestination.bookingDefaults.time);
  const [selectedTravelers, setSelectedTravelers] = useState(activeDestination.bookingDefaults.travelers);

  const destinationRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const timeRef = useRef<HTMLDivElement>(null);
  const travelersRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (destinationRef.current && !destinationRef.current.contains(event.target as Node)) {
        setIsDestinationOpen(false);
      }
      if (dateRef.current && !dateRef.current.contains(event.target as Node)) {
        setIsDateOpen(false);
      }
      if (timeRef.current && !timeRef.current.contains(event.target as Node)) {
        setIsTimeOpen(false);
      }
      if (travelersRef.current && !travelersRef.current.contains(event.target as Node)) {
        setIsTravelersOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update time when destination changes
  useEffect(() => {
    setSelectedTime(activeDestination.bookingDefaults.time);
  }, [activeDestination]);

  const timeOptions = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];
  const dateOptions = ['15 Mars 2025', '16 Mars 2025', '17 Mars 2025', '20 Mars 2025', '22 Mars 2025'];
  const travelerOptions = [1, 2, 3, 4, 5, 6];

  const handleDestinationSelect = (index: number) => {
    onDestinationChange(index);
    setIsDestinationOpen(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="w-full lg:max-w-4xl xl:max-w-5xl lg:ml-auto"
    >
      <div className="bg-[#3d3d32]/75 backdrop-blur-xl rounded-3xl md:rounded-full p-3 md:p-2.5 shadow-2xl border border-white/10">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-0">
          
          {/* Destination Dropdown */}
          <div ref={destinationRef} className="relative flex-1">
            <button
              onClick={() => {
                setIsDestinationOpen(!isDestinationOpen);
                setIsDateOpen(false);
                setIsTimeOpen(false);
                setIsTravelersOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 md:px-5 py-3 md:py-2.5 md:border-r md:border-white/10 hover:bg-white/5 rounded-xl md:rounded-none transition-colors"
            >
              <Search className="w-4 h-4 text-white/50 shrink-0" />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                  {content.searchPlaceholders.destination}
                </p>
                <p className="text-sm font-medium text-white truncate">
                  {activeDestination.shortLabel}
                </p>
              </div>
              <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isDestinationOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDestinationOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a24]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                {destinations.map((dest, index) => (
                  <button
                    key={dest.id}
                    onClick={() => handleDestinationSelect(index)}
                    className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium text-white">{dest.name}</p>
                      <p className="text-xs text-white/50">{dest.stats.era}</p>
                    </div>
                    {index === activeIndex && (
                      <Check className="w-4 h-4 text-[#d4cfc4]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Date Dropdown */}
          <div ref={dateRef} className="relative flex-1">
            <button
              onClick={() => {
                setIsDateOpen(!isDateOpen);
                setIsDestinationOpen(false);
                setIsTimeOpen(false);
                setIsTravelersOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 md:px-5 py-3 md:py-2.5 md:border-r md:border-white/10 hover:bg-white/5 rounded-xl md:rounded-none transition-colors"
            >
              <Calendar className="w-4 h-4 text-white/50 shrink-0" />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                  {content.searchPlaceholders.date}
                </p>
                <p className="text-sm font-medium text-white">{selectedDate}</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isDateOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDateOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a24]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                {dateOptions.map((date) => (
                  <button
                    key={date}
                    onClick={() => {
                      setSelectedDate(date);
                      setIsDateOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm text-white">{date}</span>
                    {date === selectedDate && (
                      <Check className="w-4 h-4 text-[#d4cfc4]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Time Dropdown */}
          <div ref={timeRef} className="relative flex-1">
            <button
              onClick={() => {
                setIsTimeOpen(!isTimeOpen);
                setIsDestinationOpen(false);
                setIsDateOpen(false);
                setIsTravelersOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 md:px-5 py-3 md:py-2.5 md:border-r md:border-white/10 hover:bg-white/5 rounded-xl md:rounded-none transition-colors"
            >
              <Clock className="w-4 h-4 text-white/50 shrink-0" />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                  {content.searchPlaceholders.time}
                </p>
                <p className="text-sm font-medium text-white">{selectedTime}</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isTimeOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isTimeOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a24]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden max-h-48 overflow-y-auto">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => {
                      setSelectedTime(time);
                      setIsTimeOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm text-white">{time}</span>
                    {time === selectedTime && (
                      <Check className="w-4 h-4 text-[#d4cfc4]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Travelers Dropdown */}
          <div ref={travelersRef} className="relative flex-1">
            <button
              onClick={() => {
                setIsTravelersOpen(!isTravelersOpen);
                setIsDestinationOpen(false);
                setIsDateOpen(false);
                setIsTimeOpen(false);
              }}
              className="flex items-center gap-3 w-full px-4 md:px-5 py-3 md:py-2.5 hover:bg-white/5 rounded-xl md:rounded-none transition-colors"
            >
              <Users className="w-4 h-4 text-white/50 shrink-0" />
              <div className="flex-1 min-w-0 text-left">
                <p className="text-[10px] text-white/50 uppercase tracking-wider font-medium">
                  {content.searchPlaceholders.travelers}
                </p>
                <p className="text-sm font-medium text-white">{selectedTravelers} {selectedTravelers === 1 ? 'personne' : 'personnes'}</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-white/50 transition-transform ${isTravelersOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isTravelersOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#2a2a24]/95 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl z-50 overflow-hidden">
                {travelerOptions.map((num) => (
                  <button
                    key={num}
                    onClick={() => {
                      setSelectedTravelers(num);
                      setIsTravelersOpen(false);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-sm text-white">{num} {num === 1 ? 'personne' : 'personnes'}</span>
                    {num === selectedTravelers && (
                      <Check className="w-4 h-4 text-[#d4cfc4]" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CTA Button */}
          <div className="px-2 md:px-1 py-2 md:py-0">
            <Button
              size="lg"
              className="w-full md:w-auto rounded-full px-6 md:px-8 py-3 bg-[#d4cfc4] text-[#3d3d32] hover:bg-[#c9c3b6] font-medium text-sm border-0 shadow-lg"
            >
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
