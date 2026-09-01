export type Subject = {
  id: string;
  name: string;
  meta: string;
  topics: string[];
};

export const subjects: Subject[] = [
  {
    id: "behavioral-economics",
    name: "Behavioral Economics",
    meta: "12 topics · 3 papers",
    topics: [
      "Rational Choice Theory",
      "Bounded Rationality and Satisficing",
      "Dual Process Model",
      "Heuristics and Biases",
      "Prospect Theory",
      "Loss Aversion and Framing",
    ],
  },
  {
    id: "physiology",
    name: "Human Physiology",
    meta: "10 topics · 4 papers",
    topics: [
      "Cardiovascular Physiology",
      "Respiratory Mechanics",
      "Renal Filtration",
      "Neurophysiology",
      "Endocrine Control",
      "Muscle Contraction",
    ],
  },
  {
    id: "organic-chemistry",
    name: "Organic Chemistry",
    meta: "9 topics · 2 papers",
    topics: [
      "Hydrocarbons and Nomenclature",
      "Isomerism",
      "Reaction Mechanisms",
      "Alcohols and Ethers",
      "Carbonyl Chemistry",
      "Aromatic Compounds",
    ],
  },
  {
    id: "statistics",
    name: "Statistics",
    meta: "8 topics · 3 papers",
    topics: [
      "Descriptive Statistics",
      "Probability Distributions",
      "Sampling and Estimation",
      "Hypothesis Testing",
      "Regression Analysis",
      "ANOVA",
    ],
  },
  {
    id: "world-history",
    name: "World History",
    meta: "11 topics · 2 papers",
    topics: [
      "Industrial Revolution",
      "World War I",
      "Interwar Period",
      "World War II",
      "Cold War",
      "Decolonisation",
    ],
  },
  {
    id: "literature",
    name: "English Literature",
    meta: "7 topics · 2 papers",
    topics: [
      "Poetry Analysis",
      "Shakespearean Drama",
      "The Victorian Novel",
      "Modernism",
      "Postcolonial Voices",
      "Essay Technique",
    ],
  },
];

export function findSubject(id: string | null) {
  return subjects.find((subject) => subject.id === id) ?? null;
}
