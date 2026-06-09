export const ISP_PILLARS = [
  {
    id: 'p1',
    title: 'HER2+ therapy leadership',
    description: 'Establish Phesgo as the physician-preferred subcutaneous HER2 treatment across early and metastatic breast cancer, driving adoption over IV alternatives and emerging competitors.',
  },
  {
    id: 'p2',
    title: 'Lymphoma treatment transformation',
    description: 'Position Polivy-based regimens as the preferred approach in DLBCL and follicular lymphoma, and extend use into earlier treatment lines as data matures.',
  },
  {
    id: 'p3',
    title: 'Neuro-ophthalmic disease interception',
    description: 'Strengthen Ocrevus as the definitive anti-CD20 treatment in progressive MS; grow Vabysmo through bispecific mechanism education in retinal disease.',
  },
  {
    id: 'p4',
    title: 'Rare disease innovation',
    description: 'Solidify Hemlibra as the standard of care across all hemophilia A severities and inhibitor statuses, with long-term prophylaxis data as the differentiating narrative.',
  },
];

export const MEDICAL_OBJECTIVES = [
  {
    id: 'MO1',
    name: 'Phesgo SC adoption',
    description: 'Build community oncologist and infusion-center confidence in subcutaneous Phesgo as equivalent and more convenient than IV dual anti-HER2 regimens.',
    ispPillarRef: 'p1',
  },
  {
    id: 'MO2',
    name: 'Polivy evidence dissemination',
    description: 'Generate and communicate clinical evidence supporting Polivy use in first-line DLBCL and relapsed/refractory FL to expand appropriate patient selection.',
    ispPillarRef: 'p2',
  },
  {
    id: 'MO3',
    name: 'Progressive MS differentiation',
    description: 'Address neurologist uncertainty about long-term Ocrevus durability in PPMS and SPMS through real-world evidence and mechanism-of-action clarity.',
    ispPillarRef: 'p3',
  },
  {
    id: 'MO4',
    name: 'Vabysmo bispecific education',
    description: 'Educate the retina community on the dual VEGF-A/Ang-2 mechanism and the durability advantage of extended dosing intervals for Vabysmo.',
    ispPillarRef: 'p3',
  },
  {
    id: 'MO5',
    name: 'Hemlibra pediatric evidence',
    description: 'Close the evidence gap in long-term pediatric prophylaxis with emicizumab, addressing specialist concerns about lifetime dosing commitment and joint outcomes.',
    ispPillarRef: 'p4',
  },
];

export const LISTENING_PRIORITIES = [
  {
    id: 'LP1',
    name: 'SC convenience adoption barriers',
    moRef: 'MO1',
    kiq: 'What prevents community oncologists from defaulting to subcutaneous Phesgo over IV for all eligible HER2+ patients?',
    kits: ['SC administration guide', 'Nurse education module', 'Patient preference data summary'],
  },
  {
    id: 'LP2',
    name: 'Phesgo competitive differentiation',
    moRef: 'MO1',
    kiq: 'How are oncologists distinguishing Phesgo from trastuzumab deruxtecan and biosimilar trastuzumab combinations in treatment sequencing?',
    kits: ['HER2 treatment algorithm', 'Competitive landscape one-pager'],
  },
  {
    id: 'LP3',
    name: 'Polivy patient selection clarity',
    moRef: 'MO2',
    kiq: 'Do haematologists have sufficient confidence in Polivy patient selection criteria versus tafasitamab, loncastuximab and CAR-T sequencing?',
    kits: ['DLBCL treatment landscape update', 'Polivy combination evidence deck'],
  },
  {
    id: 'LP4',
    name: 'Progressive MS therapeutic confidence',
    moRef: 'MO3',
    kiq: 'What data would increase neurologist confidence in initiating Ocrevus for PPMS patients with higher disability levels?',
    kits: ['PPMS long-term extension data', 'OPERA RWE summary'],
  },
  {
    id: 'LP5',
    name: 'Vabysmo dosing durability narrative',
    moRef: 'MO4',
    kiq: 'Are retinal specialists using the extended dosing interval as a differentiating factor, and what evidence do they need to extend treatment intervals confidently?',
    kits: ['Dosing interval RWE summary', 'YOSEMITE/RHINE extension data'],
  },
  {
    id: 'LP6',
    name: 'Hemlibra pediatric long-term evidence gaps',
    moRef: 'MO5',
    kiq: "What are haematologists' outstanding questions about lifelong emicizumab prophylaxis in pediatric hemophilia A?",
    kits: ['HAVEN pediatric extension summary', 'Joint health outcomes brief'],
  },
];

export const COVERAGE_TARGETS = {
  MO1: 'Sufficient',
  MO2: 'Low',
  MO3: 'Sufficient',
  MO4: 'Low',
  MO5: 'Gap',
};
