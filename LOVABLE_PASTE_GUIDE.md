# Identity Development App — Lovable Paste Guide

## How to use this in Lovable

### Option 1: Quick Start (Recommended)
Paste this entire prompt into Lovable's chat:

---

**PASTE THIS INTO LOVABLE:**

Build me an Identity Development App using React + Tailwind + shadcn/ui. It should help people discover and develop their personal identity. Here's the full spec with all the code. Use Supabase for auth and data persistence instead of localStorage.

The app has 7 pages: Dashboard, Core Values, Strengths, Life Vision, Goals, Journal, and Progress.

### Data & Constants (src/data/constants.js)

```js
export const ALL_VALUES = [
  'Authenticity', 'Adventure', 'Balance', 'Boldness', 'Compassion',
  'Creativity', 'Curiosity', 'Determination', 'Fairness', 'Family',
  'Freedom', 'Generosity', 'Growth', 'Honesty', 'Humor',
  'Independence', 'Integrity', 'Justice', 'Kindness', 'Knowledge',
  'Leadership', 'Love', 'Loyalty', 'Mindfulness', 'Optimism',
  'Patience', 'Peace', 'Perseverance', 'Purpose', 'Resilience',
  'Respect', 'Responsibility', 'Security', 'Service', 'Simplicity',
  'Spirituality', 'Strength', 'Teamwork', 'Trustworthiness', 'Wisdom',
];

export const STRENGTH_CATEGORIES = {
  'Analytical Thinking': 'You excel at breaking down problems, finding patterns, and using logic to reach conclusions.',
  'Creative Expression': 'You naturally generate original ideas and find innovative solutions.',
  'Empathy & Connection': "You deeply understand others' feelings and build strong relationships.",
  'Leadership & Influence': 'You inspire and guide others toward shared goals.',
  'Discipline & Execution': 'You follow through consistently and turn plans into results.',
  'Adaptability': 'You thrive in change and quickly adjust to new situations.',
  'Communication': 'You convey ideas clearly and persuasively across contexts.',
  'Strategic Vision': 'You see the big picture and plan effective long-term paths.',
};

export const QUIZ_QUESTIONS = [
  { q: 'When facing a complex problem, you tend to:', opts: [
    { text: 'Break it into smaller pieces and analyse each', cat: 'Analytical Thinking' },
    { text: 'Brainstorm many creative solutions', cat: 'Creative Expression' },
    { text: 'Talk it through with someone you trust', cat: 'Empathy & Connection' },
    { text: 'Take charge and delegate tasks', cat: 'Leadership & Influence' },
  ]},
  { q: 'In a group project, you naturally:', opts: [
    { text: 'Create structure and timelines', cat: 'Discipline & Execution' },
    { text: 'Adapt as things change', cat: 'Adaptability' },
    { text: 'Present and explain the plan', cat: 'Communication' },
    { text: 'Define the overall strategy', cat: 'Strategic Vision' },
  ]},
  { q: 'People often come to you for:', opts: [
    { text: 'Logical advice and analysis', cat: 'Analytical Thinking' },
    { text: 'Fresh ideas and perspectives', cat: 'Creative Expression' },
    { text: 'Emotional support and listening', cat: 'Empathy & Connection' },
    { text: 'Motivation and direction', cat: 'Leadership & Influence' },
  ]},
  { q: 'When learning something new, you prefer to:', opts: [
    { text: 'Follow a structured curriculum', cat: 'Discipline & Execution' },
    { text: 'Experiment and figure it out as you go', cat: 'Adaptability' },
    { text: 'Teach it to someone else to solidify understanding', cat: 'Communication' },
    { text: 'Understand how it fits the bigger picture first', cat: 'Strategic Vision' },
  ]},
  { q: 'Under pressure, your go-to response is:', opts: [
    { text: 'Stay calm and think through options systematically', cat: 'Analytical Thinking' },
    { text: 'Improvise and find a creative workaround', cat: 'Creative Expression' },
    { text: 'Rally the team and keep morale up', cat: 'Empathy & Connection' },
    { text: 'Step up and make decisive calls', cat: 'Leadership & Influence' },
  ]},
  { q: 'Your ideal weekend involves:', opts: [
    { text: "Completing a project you've been planning", cat: 'Discipline & Execution' },
    { text: 'A spontaneous adventure', cat: 'Adaptability' },
    { text: 'Deep conversations with friends', cat: 'Communication' },
    { text: 'Planning and strategizing your next big move', cat: 'Strategic Vision' },
  ]},
  { q: "The achievement you're most proud of involved:", opts: [
    { text: 'Solving a difficult puzzle or challenge', cat: 'Analytical Thinking' },
    { text: 'Creating something from nothing', cat: 'Creative Expression' },
    { text: 'Helping someone through a tough time', cat: 'Empathy & Connection' },
    { text: 'Leading a team to success', cat: 'Leadership & Influence' },
  ]},
  { q: 'When you make a mistake, you typically:', opts: [
    { text: 'Create a system to prevent it happening again', cat: 'Discipline & Execution' },
    { text: 'Quickly pivot and try a different approach', cat: 'Adaptability' },
    { text: 'Openly discuss it and learn with others', cat: 'Communication' },
    { text: 'Reflect on how it fits your larger goals', cat: 'Strategic Vision' },
  ]},
];

export const VISION_AREAS = {
  career: { icon: '\u2699', title: 'Career & Purpose', desc: 'Your professional path and calling' },
  relationships: { icon: '\u2661', title: 'Relationships', desc: 'Connections and community' },
  health: { icon: '\u2618', title: 'Health & Wellbeing', desc: 'Physical and mental wellness' },
  growth: { icon: '\u25B2', title: 'Personal Growth', desc: 'Learning, skills, and character' },
  finances: { icon: '\u25C6', title: 'Finances & Freedom', desc: 'Financial security and independence' },
  impact: { icon: '\u263C', title: 'Legacy & Impact', desc: 'How you want to change the world' },
};

export const JOURNAL_PROMPTS = [
  'What did I learn about myself today?',
  'What am I grateful for right now?',
  'What value did I live out today?',
  'What challenged my sense of identity?',
  'How did I grow this week?',
  'What would my future self say to me?',
  'What fear am I ready to let go of?',
  'What makes me feel most alive?',
];

export const MOODS = [
  { emoji: '\u{1F60A}', label: 'Happy' },
  { emoji: '\u{1F604}', label: 'Great' },
  { emoji: '\u{1F610}', label: 'Neutral' },
  { emoji: '\u{1F614}', label: 'Sad' },
  { emoji: '\u{1F624}', label: 'Frustrated' },
];

export const QUOTES = [
  { text: '"The privilege of a lifetime is to become who you truly are."', author: 'Carl Jung' },
  { text: '"Knowing yourself is the beginning of all wisdom."', author: 'Aristotle' },
  { text: '"What lies behind us and what lies before us are tiny matters compared to what lies within us."', author: 'Ralph Waldo Emerson' },
  { text: '"Be yourself; everyone else is already taken."', author: 'Oscar Wilde' },
  { text: '"The only journey is the one within."', author: 'Rainer Maria Rilke' },
  { text: '"Your visions will become clear only when you can look into your own heart."', author: 'Carl Jung' },
  { text: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."', author: 'Ralph Waldo Emerson' },
];
```

### State Management Hook (src/hooks/useLocalStorage.js)

Use this as the data model reference. In Lovable, replace localStorage with Supabase tables for: user_profiles, user_values, strength_results, visions, goals, journal_entries, and activity_timeline.

```js
const defaultData = {
  user: null,
  values: [],        // selected values (up to 10)
  coreValues: [],    // top 5 ranked values
  strengthAnswers: {},  // quiz answers by question index
  strengthResults: null, // array of {name, score, pct}
  visions: {},       // keyed by area: career, relationships, health, growth, finances, impact
  goals: [],         // {id, title, why, value, done, createdAt}
  journal: [],       // {id, text, mood, prompt, date}
  timeline: [],      // {text, date} activity log
  streak: 0,
  lastVisit: null,
  startDate: null,
};
```

### Component Structure

Create these pages/components:

**1. LoginScreen** — Name, email, password form. Purple gradient background. Clean card layout.

**2. Header** — App name "Identity", streak badge (amber gradient), user name, logout button. Sticky top.

**3. Sidebar** — Three sections: Discover (Dashboard, Core Values, Strengths), Build (Life Vision, Goals), Reflect (Journal, Progress). Active state highlights in indigo.

**4. Dashboard** — Welcome banner (indigo-to-purple gradient), 4 stat cards (Core Values count, Strengths found, Journal entries, Goals completed), daily motivational quote card (amber/yellow gradient), and a "Suggested Next Step" card that dynamically recommends the next uncompleted section.

**5. CoreValues** — Step 1: grid of 40 clickable value chips (from ALL_VALUES), max 10 selections. Step 2: appears when 5+ selected, shows ranked list with up/down arrows to reorder. Save button stores top 5 as core values. Shows saved values below.

**6. Strengths** — 8-question quiz (from QUIZ_QUESTIONS). Each question shows 4 options. Previous/Next navigation with progress indicator. Results page shows horizontal bar chart for each of 8 categories with percentage and description. Retake button.

**7. VisionBuilder** — 6 clickable life area cards in a 2-column grid (from VISION_AREAS). Clicking one opens a textarea editor. Save button stores the vision text. Saved visions display below in green-tinted cards.

**8. Goals** — Add form: title, why it matters, optional link to a core value (dropdown). Goal list with circle checkboxes to mark done, value tag badges, delete button. Empty state when no goals.

**9. Journal** — Prompt chips (from JOURNAL_PROMPTS) that pre-fill the textarea. Mood picker with 5 emoji buttons. Save button. Past entries list showing date, prompt tag, text, and mood.

**10. Progress** — SVG circular progress ring showing journey completion (out of 5 milestones: values, strengths, vision, goals, journal). Milestone stats (days active, reflections written, goals achieved). Activity timeline with vertical line and dots.

### Design System
- Primary color: Indigo-500 (#6366f1)
- Accent: Amber-500 for streaks/quotes
- Success: Emerald-500 for save buttons
- Cards: white with border-slate-200, rounded-xl, subtle shadow
- Use shadcn/ui components where applicable (Button, Input, Card, Select, Textarea)
- Smooth fadeIn animations on page transitions
- Responsive: sidebar collapses on mobile

---

### Option 2: Even Simpler

If the above is too long, just paste this short version into Lovable:

---

Build an Identity Development App with these features:
1. Core Values Assessment — pick from 40 values, rank top 5
2. Strengths Quiz — 8 multiple-choice questions mapping to 8 categories, show bar chart results
3. Life Vision Builder — write 5-year visions for 6 life areas (career, relationships, health, growth, finances, legacy)
4. Goals — create goals linked to core values, mark complete
5. Journal — guided prompts, mood tracking with emojis, entry history
6. Progress — circular completion ring, milestones, activity timeline
7. Dashboard — stats overview, daily motivational quotes, suggested next step
8. Login screen, sidebar navigation, streak tracking

Use Supabase for auth and database. Use shadcn/ui components. Indigo/purple color scheme. Clean, modern design.
