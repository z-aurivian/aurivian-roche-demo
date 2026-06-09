// Strategic content — Roche Medical Affairs Demo

export const STRATEGIC_IMPERATIVES = [
  {
    id: 'si-001',
    name: 'HER2+ SC Phesgo Adoption',
    category: 'Product Strategy',
    description:
      'Drive transition from IV trastuzumab + pertuzumab to subcutaneous Phesgo in community oncology settings. Reduce infusion chair time, improve patient experience, and address nursing workflow barriers. Phesgo\'s fixed-dose SC co-formulation is clinically equivalent to IV with a 5–8 minute administration advantage.',
    successMetrics: [
      'SC Phesgo adoption rate in community oncology centres (target: 60% of eligible patients by Q4 2026)',
      'Infusion centre nurse SC training completion rate',
      'Patient-reported preference for SC vs. IV administration'
    ],
    keyActions: [
      'Deploy laminated SC quick-reference cards co-created with infusion nurses',
      'Commission chair-time reduction case studies from pilot community centres',
      'Develop Phesgo vs. biosimilar IV combination 2-page formulary differentiation brief'
    ]
  },
  {
    id: 'si-002',
    name: 'Polivy DLBCL Patient Selection Leadership',
    category: 'Product Strategy',
    description:
      'Establish Roche MSL team as the scientific reference point for DLBCL treatment selection, particularly for CAR-T ineligible patients and those requiring bridging therapy. Combat competitive narrative from tafasitamab by providing haematologists with a clear, evidence-based patient selection algorithm.',
    successMetrics: [
      'Physician clarity score on Polivy vs. tafasitamab / loncastuximab patient selection (target: >70/100)',
      'Polivy advisory board participation rate among Tier 1/2 KOLs',
      'MSL scientific exchange quality score in lymphoma interactions'
    ],
    keyActions: [
      'Convene Polivy patient-selection advisory board (CAR-T eligible vs. ineligible)',
      'Commission DLBCL community-haematologist one-page algorithm',
      'Re-engage Franck Morschhauser with POLARIX extension data before EHA 2026'
    ]
  },
  {
    id: 'si-003',
    name: 'Progressive MS Evidence Expansion',
    category: 'Medical Science',
    description:
      'Address neurologist uncertainty about long-term Ocrevus outcomes in progressive MS, particularly PPMS at higher disability levels. Position the Ocrevus Zunovo SC formulation as improving patient experience while maintaining efficacy leadership.',
    successMetrics: [
      'Neurologist confidence score on PPMS initiation thresholds (target: >75% confident initiating at EDSS ≤5)',
      'PPMS prescription growth in centres with active MSL engagement',
      'SC Ocrevus transition rate in existing IV patients'
    ],
    keyActions: [
      'Scope Ocrevus PPMS open-label extension long-term RWE sub-analysis with HEOR',
      'Develop MSL scientific exchange programme focused on PPMS long-term disability outcomes'
    ]
  },
  {
    id: 'si-004',
    name: 'Hemlibra Pediatric Evidence Gap Closure',
    category: 'Medical Science',
    description:
      'Close the pediatric prophylaxis evidence gap for emicizumab by commissioning long-term joint health outcome analyses from the HAVEN extension data. Enable pediatric haematologists to confidently counsel families on lifetime emicizumab prophylaxis.',
    successMetrics: [
      'Pediatric prescriber confidence score on lifetime joint outcomes (target: >70/100)',
      'New pediatric hemophilia A patient starts on Hemlibra',
      'LP6 insight capture rate per quarter'
    ],
    keyActions: [
      'Initiate HAVEN long-term extension joint health registry sub-analysis',
      'Convene pediatric hemophilia advisory board with Guy Young and Flora Peyvandi'
    ]
  },
];

export const COMPETITIVE_LANDSCAPE = [
  {
    id: 'cl-001',
    name: 'Trastuzumab deruxtecan (Enhertu)',
    genericName: 'trastuzumab deruxtecan',
    company: 'AstraZeneca / Daiichi Sankyo',
    summary: 'ADC approved for HER2+ mBC (2L+), HER2-low BC, and HER2-mutant NSCLC. DESTINY-Breast06 ASCO 2026 data extended benefit to HER2-ultralow BC, creating sequencing questions in early and metastatic settings.',
    strategicThreatLevel: 'High',
    keyDifferentiator: 'Phesgo is the standard neoadjuvant backbone in HER2 3+ early BC — T-DXd does not yet challenge this space. Sequencing T-DXd post-Phesgo in metastatic disease is the opportunity, not the threat.',
  },
  {
    id: 'cl-002',
    name: 'Tafasitamab + lenalidomide (Monjuvi)',
    genericName: 'tafasitamab',
    company: 'MorphoSys / Incyte',
    summary: 'Anti-CD19 mAb + lenalidomide approved for R/R DLBCL. L-MIND single-arm data shows meaningful responses in CAR-T ineligible patients. Growing European KOL endorsement creating competitive pressure on Polivy-BR.',
    strategicThreatLevel: 'High',
    keyDifferentiator: 'Polivy has randomised POLARIX first-line data — tafasitamab does not. In 2L+ CAR-T ineligible, a clear patient-selection algorithm distinguishing Polivy vs. tafasitamab by fitness and prior therapy is the primary unmet MSL need.',
  },
  {
    id: 'cl-003',
    name: 'Ofatumumab (Kesimpta)',
    genericName: 'ofatumumab',
    company: 'Novartis',
    summary: 'Subcutaneous anti-CD20 mAb approved for RRMS. Monthly SC dosing is a convenience differentiator vs. IV Ocrevus. Ocrevus Zunovo SC launch directly addresses this advantage.',
    strategicThreatLevel: 'Medium',
    keyDifferentiator: 'Ocrevus has broader indication (RRMS + PPMS), larger real-world evidence base, and 9+ years of safety data. Ocrevus Zunovo SC neutralises the administration route advantage.',
  },
];

export const COMPLEMENT_BIOLOGY = null;
export const PIPELINE_INTELLIGENCE = null;
