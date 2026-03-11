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
  'Empathy & Connection': 'You deeply understand others\' feelings and build strong relationships.',
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
    { text: 'Completing a project you\'ve been planning', cat: 'Discipline & Execution' },
    { text: 'A spontaneous adventure', cat: 'Adaptability' },
    { text: 'Deep conversations with friends', cat: 'Communication' },
    { text: 'Planning and strategizing your next big move', cat: 'Strategic Vision' },
  ]},
  { q: 'The achievement you\'re most proud of involved:', opts: [
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
  career: { icon: '&#9881;', title: 'Career & Purpose', desc: 'Your professional path and calling' },
  relationships: { icon: '&#9825;', title: 'Relationships', desc: 'Connections and community' },
  health: { icon: '&#9752;', title: 'Health & Wellbeing', desc: 'Physical and mental wellness' },
  growth: { icon: '&#9650;', title: 'Personal Growth', desc: 'Learning, skills, and character' },
  finances: { icon: '&#9670;', title: 'Finances & Freedom', desc: 'Financial security and independence' },
  impact: { icon: '&#9788;', title: 'Legacy & Impact', desc: 'How you want to change the world' },
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
