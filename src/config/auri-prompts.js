export const AURI_PROMPTS = [
  {
    prompt: 'What are the most urgent gaps in our current medical strategy?',
    response:
      'Three gaps stand out this cycle:\n\n• **MO5 (Hemlibra pediatric evidence)** — Gap status, 0 qualifying insights captured. Pediatric haematologists are asking about long-term joint outcomes data and we have no active LP directing MSL conversations toward this question. A7 (registry query) is Proposed with no owner.\n• **MO2 (Polivy evidence dissemination)** — Low coverage. AI3 (positioning confusion vs. tafasitamab / loncastuximab) is validated but A5 (advisory board) is only just Accepted. Franck Morschhauser\'s declining alignment (73 → 61 in 60 days) adds urgency.\n• **MO4 (Vabysmo bispecific education)** — Low coverage. The Ang-2/VEGF-A mechanism is not landing in the community retina segment and no active KIQ is systematically probing this gap.',
    cites: [
      { type: 'mo',      id: 'MO5' },
      { type: 'mo',      id: 'MO2' },
      { type: 'mo',      id: 'MO4' },
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A7'  },
    ],
  },
  {
    prompt: 'Summarise the most important signals from ASCO 2026.',
    response:
      'Three themes are dominating post-ASCO intelligence:\n\n1. **ADC vs. Anti-HER2 Combinations Sequencing** (momentum 72 ↑) — DESTINY-Breast06 and HER2CLIMB-02 data have created sequencing questions that oncologists are now asking our MSLs directly. AI2 (Validated) and A3 (Started) are the active response items.\n2. **Phesgo SC Adoption Acceleration** (momentum 59 ↑) — ASCO interactions confirmed community infusion-centre inertia as the primary barrier. AI1 has now recurred 4× (Prioritised, confidence 91%). A1 (SC quick-reference card) and A10 (formulary differentiation brief) are in flight.\n3. **Polivy + CAR-T Sequencing** (growing) — CAR-T access delays are reshaping how haematologists at ASCO are thinking about Polivy-BR as a bridge therapy. AI3 and A5 are the response.',
    cites: [
      { type: 'insight', id: 'AI2' },
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A3'  },
      { type: 'action',  id: 'A1'  },
    ],
  },
  {
    prompt: 'Which insights have the highest strategic impact right now?',
    response:
      '**AI1 (SC infusion-centre inertia)** is the most load-bearing — recurred 4× this cycle, confidence 91%, Prioritised. Two actions in-flight (A1 Started, A2 Accepted, A10 Started) making it the most action-dense insight.\n\n**AI7 (Community oncologist Phesgo-biosimilar differentiation)** is the most time-sensitive — 3 recurrences, Prioritised, and an active competitive context following ASCO 2026. A10 was triggered by this insight and is in-flight.\n\n**AI3 (Polivy positioning confusion)** is the most strategically risky — directly linked to Franck Morschhauser\'s declining alignment. If not addressed before EHA 2026, competitor narrative could solidify.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI7' },
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A10' },
    ],
  },
  {
    prompt: 'Who should we engage to defend Polivy positioning in DLBCL?',
    response:
      'The most urgent engagement is **Franck Morschhauser** (Tier 2, Lille). His alignment score has declined from 73 to 61 in 60 days and he has given two recent presentations endorsing tafasitamab + lenalidomide over Polivy-BR in CAR-T ineligible patients. Predictive Signal ps-3 flags this risk explicitly.\n\nFor proactive positioning, **Gilles Salles** (MSK, Tier 1) is the primary scientific voice for Polivy in DLBCL in North America. A scientific exchange on POLARIX extension data and the CAR-T bridge algorithm would reinforce his alignment and create a counterweight to the tafasitamab narrative.\n\nAction A5 (advisory board for CAR-T eligible vs. ineligible patient selection) is Accepted — confirm leadership and include Morschhauser on the invite to bring him back into the Roche scientific conversation.',
    cites: [
      { type: 'insight', id: 'AI3' },
      { type: 'action',  id: 'A5'  },
    ],
  },
  {
    prompt: 'What would NOVA prioritise if given free rein on the Medical Plan?',
    response:
      'Three concrete changes:\n\n1. **Assign owner and activate A7** (pediatric hemophilia A registry query) — MO5 is a Gap with no in-flight actions. The HAVEN extension data exists; someone needs to scope and commission the sub-analysis before the next HTA cycle.\n2. **Elevate A10** (Phesgo-biosimilar 2-pager) to the most visible MO1 deliverable — AI7 and AI1 both point to the same community-facing content gap. The brief should be co-created with an oncology pharmacist and an MSL for authenticity.\n3. **Create a new KIQ under MO4** specifically probing Ang-2 mechanism understanding in the community retina segment — AI5 shows the bispecific story is not landing, but without an active KIQ, we won\'t systematically capture whether our education interventions are working.',
    cites: [
      { type: 'mo',      id: 'MO5' },
      { type: 'mo',      id: 'MO4' },
      { type: 'insight', id: 'AI7' },
      { type: 'action',  id: 'A7'  },
      { type: 'action',  id: 'A10' },
    ],
  },
  {
    prompt: 'Prepare me for the Ross & Natasha meeting on Friday.',
    response:
      'For the Friday meeting, here are the three narrative arcs that will resonate most with medical affairs leadership:\n\n**1. SC Phesgo momentum is real but community inertia is the constraint.** AI1 (4× recurrence, Prioritised) and AI7 (formulary differentiation ask) triangulate on the same gap. A1, A2, and A10 are the in-flight responses. Show the 29-point SC adoption gain in engaged accounts (VEGA: 22% → 51%).\n\n**2. The Polivy narrative needs sharpening before EHA 2026.** Morschhauser\'s declining alignment (73 → 61) is the live signal. AI3 and predictive signal ps-3 quantify the risk. A5 (advisory board) is the response — confirm the agenda includes a direct comparison framework.\n\n**3. MO5 is a Gap — and it\'s actionable.** Hemlibra pediatric evidence is a real evidence gap the field can help close. Proactively flagging this as a CI gap demonstrates MA’s strategic intelligence function, not just congress reporting.',
    cites: [
      { type: 'insight', id: 'AI1' },
      { type: 'insight', id: 'AI3' },
      { type: 'mo',      id: 'MO5' },
      { type: 'action',  id: 'A5'  },
    ],
  },
];

export const SUGGESTED_PROMPTS = [
  'What are the most urgent gaps in our current medical strategy?',
  'Summarise the most important signals from ASCO 2026.',
  'Which insights have the highest strategic impact right now?',
  'Who should we engage to defend Polivy positioning in DLBCL?',
  'What would NOVA prioritise if given free rein on the Medical Plan?',
  'Prepare me for the Ross & Natasha meeting on Friday.',
];
