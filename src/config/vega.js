export const VEGA_AWARENESS_PROGRESSION = {
  benchmark: '41% of HCPs achieving sustained practice change vs 23% industry average — +78% outperformance. Slowest conversion: Intent → Sustained change (52%, avg 53 days). Primary blocker: formulary access and nursing workflow inertia for SC Phesgo.',
  stages: [
    { stage: 'Sustained practice change', hcps: 618,  pctTotal: 41, vsQ4: '+14%' },
    { stage: 'Actively changing practice', hcps: 694,  pctTotal: 46, vsQ4: '+9%'  },
    { stage: 'Intent to change',           hcps: 932,  pctTotal: 62, vsQ4: '+6%'  },
    { stage: 'Knowledgeable',              hcps: 1344, pctTotal: 89, vsQ4: '+4%'  },
    { stage: 'Aware only',                 hcps: 381,  pctTotal: 25, vsQ4: '-11%' },
  ],
};

export const VEGA_INTERACTION_QUALITY = {
  insight: 'Katrina S shows high volume and quality — strong SC Phesgo adoption conversations. Ahmed R shows high volume but quality gap — interactions are not generating usable insights. Recommend joint field visit and KIT briefing. Priya L shows volume gap — below territory target.',
  rows: [
    { msl: 'Katrina S',  region: 'Northeast US',  interactions: 51, vsTarget: '+8%',  quality: 8.9, insightRate: 84, overall: 'Excellent'     },
    { msl: 'Ahmed R',    region: 'Southeast US',  interactions: 56, vsTarget: '+12%', quality: 6.3, insightRate: 41, overall: 'Quality gap'   },
    { msl: 'Danielle M', region: 'Midwest US',    interactions: 43, vsTarget: '+1%',  quality: 8.6, insightRate: 79, overall: 'On track'      },
    { msl: 'Hugo T',     region: 'Western EU',    interactions: 39, vsTarget: '-4%',  quality: 8.2, insightRate: 73, overall: 'On track'      },
    { msl: 'Priya L',    region: 'APAC',          interactions: 27, vsTarget: '-33%', quality: 7.1, insightRate: 61, overall: 'Volume gap'    },
  ],
};

export const VEGA_ENGAGEMENT_GAPS = [
  { kol: 'Franck Morschhauser',  tier: 'Tier 2', lastContact: '2026-04-08', gap: '8 weeks', action: 'Re-engage urgently — alignment declining' },
  { kol: 'Arlene Chan',          tier: 'Tier 2', lastContact: '2026-05-01', gap: '5 weeks', action: 'Schedule scientific exchange soon' },
  { kol: 'Peter K. Kaiser',      tier: 'Tier 2', lastContact: '2026-04-22', gap: '6 weeks', action: 'Plan Vabysmo durability interaction' },
  { kol: 'Jiwon Oh',             tier: 'Tier 2', lastContact: '2026-05-12', gap: '4 weeks', action: 'On track — PPMS long-term data ask pending' },
];

export const VEGA_SHARE_OF_VOICE = {
  watchArea: 'Social and digital share of voice declining in the lymphoma space (-4pts) while competitor tafasitamab is growing (+9pts). Phesgo maintains strong congress voice at ASCO 2026. Recommend reviewing lymphoma digital scientific communication strategy.',
  rows: [
    { source: 'Congress abstracts (ASCO 2026)', us: '41%', compA: '26%', compB: '22%', compC: '11%', trend: 'up'   },
    { source: 'Peer-reviewed publications (12m)', us: '36%', compA: '28%', compB: '23%', compC: '13%', trend: 'flat' },
    { source: 'KOL active endorsements',          us: '44%', compA: '22%', compB: '25%', compC: '9%',  trend: 'up'   },
    { source: 'Citation index (vs competitors)',  us: '2.1×', compA: '1.7×', compB: '1.5×', compC: '1.1×', trend: 'up' },
    { source: 'Social / digital mentions',        us: '24%', compA: '21%', compB: '33%', compC: '22%', trend: 'down' },
  ],
};

export const VEGA_SENTIMENT_VELOCITY = [
  { kol: 'Sara A. Hurvitz',   score: 92, change30d: '+3.8', velocity: '+1.2 ↑↑', interpretation: 'Positive acceleration — advisory board candidate, neoadjuvant narrative lead' },
  { kol: 'Franck Morschhauser', score: 61, change30d: '-5.2', velocity: '-1.8 ↓↓', interpretation: 'Worsening rapidly — tafasitamab endorsements increasing; urgent re-engagement required' },
  { kol: 'Gilles Salles',     score: 84, change30d: '+1.6', velocity: '+0.4 ↑',  interpretation: 'Steady positive — maintain cadence; POLARIX RWE exchange opportunity' },
  { kol: 'Stephen L. Hauser', score: 94, change30d: '+1.1', velocity: '+0.2 ↑',  interpretation: 'Stable at high alignment — strategic advisory relationship performing well' },
];

export const VEGA_CARE_GAP_CLOSURE = [
  { gap: 'SC Phesgo adoption rate',       linkedMO: 'MO1',   baseline: '22%',  current: '51% (+29pts)', patientsImpacted: '1,840 additional patients on SC vs IV' },
  { gap: 'Polivy patient selection clarity', linkedMO: 'MO2', baseline: '38% clear', current: '61% clear (+23pts)', patientsImpacted: '920 patients better matched to optimal agent' },
  { gap: 'PPMS initiation threshold',     linkedMO: 'MO3',   baseline: 'EDSS ≤4', current: 'EDSS ≤5.5 in 34% of centres', patientsImpacted: '480 additional PPMS patients receiving Ocrevus' },
];

export const VEGA_ROMI = {
  netValueCreated: '$19.4M',
  roiPct: '211%',
  returnPerPound: '$3.11',
  rows: [
    { category: 'SC adoption-linked prescription growth', value: '$14.2M', methodology: 'HCPs with high SC Phesgo MSL engagement show 2.4× higher SC prescription rates — difference-in-difference analysis vs. non-engaged accounts' },
    { category: 'Care pathway efficiency (time savings)', value: '$5.1M', methodology: 'Reduced infusion chair time, fewer IV line placements, nurse-time reallocation in 120 participating centres' },
    { category: 'Competitive revenue protection (Polivy)', value: '$7.8M', methodology: 'Prescribing prevented from switching to tafasitamab and loncastuximab in accounts with high MSL engagement' },
    { category: 'Total investment', value: '-$8.9M', methodology: 'Full Medical Affairs budget — field team, advisory boards, congress, content, digital scientific exchange' },
  ],
};

export const VEGA_IMPACT_INDEX = {
  overall: 84,
  vsQ4: '+9',
  target: 80,
  dimensions: [
    { dim: 'Execution excellence',      score: 89, commentary: 'Above target — field interactions, SC education content, advisory boards all exceeding benchmarks' },
    { dim: 'External ecosystem impact', score: 86, commentary: '+29% SC Phesgo adoption in engaged accounts; KOL network expansion +18%; congress presence strong at ASCO 2026' },
    { dim: 'HCP practice change',       score: 83, commentary: '41% sustained change vs 23% industry average — strong outperformance, led by Phesgo SC and Polivy DLBCL adoption' },
    { dim: 'Patient care gap closure',  score: 81, commentary: 'SC adoption +29pts, Polivy patient selection clarity +23pts, PPMS initiation expanding to higher-disability patients' },
    { dim: 'Internal ecosystem impact', score: 77, commentary: 'MO5 (Hemlibra pediatric evidence) Gap status indicates insufficient internal Clinical Development collaboration — key improvement opportunity' },
  ],
};
