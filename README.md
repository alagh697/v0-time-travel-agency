# Time Travel Agency

A premium multilingual Next.js landing page and product experience for a fictional time travel agency. This project showcases modern web development practices with an immersive, editorial design aesthetic.

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo.

[Continue working on v0](https://v0.app/chat/projects/prj_WN72MMSZrNrO6EAsvAzwXJcMV0yA)

<a href="https://v0.app/chat/api/kiro/clone/alagh697/v0-time-travel-agency" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>

---

## Project Overview

**Time Travel Agency** is a concept website for a luxury time travel service that allows customers to book journeys to historical destinations. The site features:

- An interactive landing page with video backgrounds and destination slides
- AI-powered destination recommendation quiz
- AI customer support chatbot
- Detailed destination pages with booking functionality
- Contact page with form submission
- Full French and English language support

The design follows a premium editorial aesthetic with warm earth tones, glassmorphism effects, and sophisticated typography.

## Main Features

### Interactive Landing Page Hero
- Full-screen video backgrounds that transition smoothly between destinations
- Auto-rotating destination slides (5-second intervals) with manual controls
- Synchronized booking form that updates with the active destination
- Premium glassmorphism booking bar with upward-opening dropdowns
- Pause/resume autoplay on user interaction

### Destination Cards
- Animated destination carousel with image fallbacks
- Era badges and stats display
- Smooth Framer Motion transitions

### Multilingual Support
- Complete French (default) and English translations
- Locale context provider for seamless language switching
- Data-driven localization architecture

### AI Destination Recommendation Quiz
- 7-step interactive quiz modal
- AI-powered personalized recommendations using AI SDK 6
- Deterministic fallback scoring system when AI is unavailable
- Smooth step transitions and progress tracking

### AI Support Chatbot
- Floating chat button with premium pill design
- Knowledge-base grounded responses
- Quick action chips for common questions
- Graceful fallback to keyword-based matching
- Full-screen mobile experience

### Destination Detail Pages
- Dynamic routes with slug-based navigation
- Hero sections with destination imagery
- Journey timeline visualization
- Highlights grid and photo gallery
- Sticky booking sidebar
- Included items and booking options

### Contact Page
- Comprehensive contact form with validation
- Contact information and opening hours
- Collapsible FAQ section

### Responsive Design
- Mobile-first approach
- Tablet and desktop breakpoints
- Adaptive navigation and layouts

### Framer Motion Animations
- Page section reveals
- Stagger animations for lists
- Smooth modal transitions
- Card hover effects

### Data-Driven Architecture
- Centralized data files for all content
- Type-safe interfaces for all data structures
- Easy content updates without code changes

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.0 | App Router, Server Components |
| React | 19.2.4 | UI Framework |
| TypeScript | 5.7.3 | Type Safety |
| Tailwind CSS | 4.2.0 | Styling |
| Framer Motion | 11.18.0 | Animations |
| AI SDK | 6.0.0 | AI Integration |
| Radix UI | Various | Accessible Components |
| Lucide React | 0.564.0 | Icons |
| Zod | 3.24.1 | Schema Validation |
| React Hook Form | 7.54.1 | Form Management |

## Project Structure

```
/
├── app/                          # Next.js App Router
│   ├── [locale]/                 # Locale-based routing
│   │   ├── contact/              # Contact page
│   │   └── destinations/[slug]/  # Destination detail pages
│   ├── api/                      # API routes
│   │   ├── recommend-destination/# Quiz recommendation endpoint
│   │   └── support-chat/         # Chatbot endpoint
│   ├── globals.css               # Global styles and design tokens
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Landing page
│
├── components/
│   ├── contact/                  # Contact page components
│   ├── destination/              # Destination detail components
│   ├── features/                 # Feature-specific components
│   │   ├── support-chat/         # Chatbot components
│   │   └── travel-quiz/          # Quiz modal components
│   ├── hero/                     # Hero section components
│   │   ├── HeroBackgroundVideo.tsx
│   │   ├── HeroBookingForm.tsx
│   │   └── HeroDestinationCard.tsx
│   ├── layout/                   # Layout components (Footer, etc.)
│   ├── navigation/               # Navigation components
│   ├── sections/                 # Landing page sections
│   ├── shared/                   # Reusable components
│   └── ui/                       # shadcn/ui components
│
├── data/                         # Data files (localized content)
│   ├── destinations.ts           # Main destinations data
│   ├── destination-details.ts    # Detailed destination info
│   ├── hero.ts                   # Hero section content
│   ├── hero-destinations.ts      # Hero slide data
│   ├── quiz.ts                   # Quiz questions
│   ├── support-knowledge.ts      # Chatbot knowledge base
│   └── ...                       # Other data files
│
├── lib/                          # Utility functions and contexts
│   ├── ai-recommendation.ts      # AI quiz recommendation
│   ├── ai-support.ts             # AI chatbot service
│   ├── animations.ts             # Framer Motion variants
│   ├── locale-context.tsx        # Localization context
│   ├── recommendation-engine.ts  # Fallback scoring engine
│   ├── support-fallback.ts       # Chatbot fallback logic
│   └── utils.ts                  # General utilities
│
├── public/                       # Static assets
│   ├── images/
│   │   └── destinations/         # Destination images
│   │       ├── cretace.jpg
│   │       ├── paris.jpg
│   │       └── florence.jpg
│   └── videos/                   # Background videos
│       ├── cretace.mp4
│       ├── paris.mp4
│       └── florence.mp4
│
└── types/                        # TypeScript type definitions
    └── index.ts
```

## Assets Usage

### Video Backgrounds
The hero section uses full-screen video backgrounds for each destination. Videos are located in `/public/videos/`:

- `/videos/cretace.mp4` - Cretaceous period footage
- `/videos/paris.mp4` - Belle Epoque Paris footage
- `/videos/florence.mp4` - Renaissance Florence footage

Videos are loaded with:
- Autoplay and loop enabled
- Muted for browser autoplay compliance
- Graceful fallback to static images on load failure

### Destination Images
Static images for destination cards and fallbacks are in `/public/images/destinations/`:

- `/images/destinations/cretace.jpg`
- `/images/destinations/paris.jpg`
- `/images/destinations/florence.jpg`

### Adding New Assets
1. Place video files in `/public/videos/`
2. Place images in `/public/images/destinations/`
3. Update the corresponding data file (`hero-destinations.ts` or `destinations.ts`)
4. Reference using absolute paths (e.g., `/videos/newdestination.mp4`)

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alagh697/v0-time-travel-agency.git
cd v0-time-travel-agency
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

For AI features to work, you may need to configure:

```env
# Optional: For AI-powered features via Vercel AI Gateway
# The app works without these - it falls back to deterministic logic
```

The AI features use Vercel AI Gateway which works zero-config in v0 environments. For local development, the fallback systems ensure full functionality.

### Adding Assets

1. Add video files to `/public/videos/`
2. Add image files to `/public/images/destinations/`
3. Ensure filenames match the references in data files
4. Videos should be optimized for web (H.264, reasonable file size)

## AI Features Documentation

### Recommendation Quiz

The quiz (`/components/features/travel-quiz/`) guides users through 7 questions about their travel preferences:

1. **Era Preference** - Historical period interest
2. **Experience Type** - Culture, adventure, gastronomy, etc.
3. **Risk Tolerance** - Safety vs. thrill preference
4. **Group Type** - Solo, couple, family, etc.
5. **Travel Style** - Immersive vs. observational
6. **Comfort Level** - Luxury vs. authentic
7. **Historical Immersion** - Interaction depth

**How it works:**
1. User completes quiz, selecting one option per question
2. Answers are sent to `/api/recommend-destination`
3. If AI is available, AI SDK 6 generates a personalized recommendation with:
   - Best matching destination
   - Why it matches their preferences
   - Relevant traits
4. If AI fails, the deterministic scoring engine:
   - Calculates scores based on option weights
   - Finds highest-scoring destination
   - Returns pre-written match descriptions

### Support Chatbot

The chatbot (`/components/features/support-chat/`) provides customer support:

**Knowledge Base:** Located in `/data/support-knowledge.ts`, covers:
- Destinations and eras
- Safety protocols
- Booking and cancellation
- Family travel policies
- Travel preparation
- Insurance information

**How it works:**
1. User types message or selects quick action
2. Message sent to `/api/support-chat` with conversation history
3. If AI is available:
   - System prompt includes full knowledge base
   - AI generates contextual response
4. If AI fails, fallback system:
   - Matches keywords to knowledge base entries
   - Returns best matching pre-written response
   - Falls back to generic helpful message

**Fallback behavior:**
- All AI features degrade gracefully
- Users receive helpful responses regardless of AI availability
- No error messages exposed to end users

## Prompt History / Build Process

This project was built iteratively through AI-assisted development. Major phases included:

### Phase 1: Initial Landing Page
- **Goal:** Create a premium time travel agency landing page
- **Generated:** Hero section, navigation, editorial sections, destination cards
- **Result:** Core landing page structure with localization support

### Phase 2: Section-by-Section Refinement
- **Goal:** Polish each landing page section for editorial quality
- **Generated:** How It Works, Pricing, Testimonials, FAQ, Booking sections
- **Result:** Complete landing page with consistent design language

### Phase 3: AI Recommendation Quiz
- **Goal:** Add interactive destination matching feature
- **Generated:** 7-step quiz modal, AI integration, fallback scoring
- **Result:** Full quiz flow with CTA integration

### Phase 4: AI Support Chatbot
- **Goal:** Add customer support chatbot
- **Generated:** Floating chat UI, knowledge base, AI service
- **Result:** Premium chat experience with quick actions

### Phase 5: Destination Detail Pages
- **Goal:** Create individual destination pages
- **Generated:** Dynamic routes, timeline, gallery, booking sidebar
- **Result:** Complete destination pages with booking flow

### Phase 6: Contact Page
- **Goal:** Add contact form and information
- **Generated:** Form components, validation, contact info display
- **Result:** Functional contact page with FAQ

### Phase 7: Interactive Hero Refinement
- **Goal:** Add video backgrounds and auto-rotation
- **Generated:** Video component, destination sync, auto-slide
- **Result:** Premium interactive hero experience

### Phase 8: Documentation and Polish
- **Goal:** Fix dropdown visibility, add auto-rotation, document project
- **Generated:** Upward dropdowns, pause/resume logic, README
- **Result:** Production-ready hero and comprehensive documentation

## Responsive Strategy

### Breakpoints
- **Mobile:** < 768px (default styles)
- **Tablet:** 768px - 1024px (`md:` prefix)
- **Desktop:** > 1024px (`lg:` and `xl:` prefixes)

### Hero Section
- Mobile: Stacked layout, full-width booking form
- Tablet: Side-by-side elements begin
- Desktop: Full three-column layout with video backgrounds

### Cards and Grids
- Mobile: Single column, stacked cards
- Tablet: 2-column grids
- Desktop: 3-4 column grids with hover effects

### Detail Pages
- Mobile: Full-width content, collapsible booking
- Tablet: Content with inline booking
- Desktop: Sticky sidebar booking panel

### Modals and Chat
- Mobile: Full-screen overlays
- Desktop: Floating panels with positioning

### Navigation
- Mobile: Hamburger menu with slide-out drawer
- Desktop: Full horizontal navigation

## Future Improvements

### Backend Integration
- [ ] Real booking system with payment processing
- [ ] User authentication and profiles
- [ ] Order history and trip management
- [ ] Admin dashboard for content management

### Data and Analytics
- [ ] Analytics integration (Vercel Analytics already included)
- [ ] A/B testing for conversion optimization
- [ ] User behavior tracking
- [ ] Personalization based on browsing history

### Content Management
- [ ] CMS integration (Sanity, Contentful, etc.)
- [ ] Dynamic destination management
- [ ] Blog or journal section
- [ ] User reviews and ratings

### AI Enhancements
- [ ] Multi-turn conversation memory
- [ ] Booking assistance in chat
- [ ] Proactive recommendations
- [ ] Voice interface support

### Technical Improvements
- [ ] Image and video optimization pipeline
- [ ] CDN configuration for assets
- [ ] Performance monitoring
- [ ] Automated testing suite
- [ ] CI/CD pipeline configuration

### Accessibility
- [ ] WCAG 2.1 AA compliance audit
- [ ] Screen reader optimization
- [ ] Keyboard navigation improvements
- [ ] High contrast mode

### Internationalization
- [ ] Additional language support
- [ ] Currency localization
- [ ] Date/time format localization
- [ ] RTL language support

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - animation library for React

## License

This project is for demonstration purposes.

---

Built with Next.js, TypeScript, and Tailwind CSS. Powered by Vercel.
