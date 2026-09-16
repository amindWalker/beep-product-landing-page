export const brand = {
  name: 'Beep',
  tagline: 'eFX · LATAM ⇄ China',
  locations: ['Macao', 'Hengqin'],
  url: 'https://beep.beelogik.com',
  description:
    'Beep lets Chinese merchants accept Pix across Latin America with up to zero take rate, a 0.75% eFX spread and same-day settlement. No hidden fees, no days-long waits.'
} as const;

export interface PricingTier {
  name: string;
  volume: string;
  rate: string;
  detail: string;
  audience: string;
  monthlyPriceUsd: number;
  featured?: boolean;
}

export const pricingTiers: PricingTier[] = [
  { name: 'Tier 1', volume: 'Up to $1,500 / mo', rate: '2.75%', detail: '2.00% base + 0.75% eFX', audience: 'Independent dropshippers testing LATAM.', monthlyPriceUsd: 0 },
  { name: 'Tier 2', volume: '$1,500 to $7,500 / mo', rate: '2.25%', detail: '1.50% base + 0.75% eFX', audience: 'Fast-growing stores and regional platforms.', monthlyPriceUsd: 0 },
  { name: 'Tier 3', volume: 'Over $7,500 / mo', rate: '1.50%', detail: '0.75% base + 0.75% eFX', audience: 'High-ticket cross-border brands.', monthlyPriceUsd: 0, featured: true },
  { name: 'White-Label', volume: 'Over $15,000 / mo', rate: '0.75%', detail: '0% base + 0.75% eFX · ¥1,500 / mo or ¥14,400 / yr', audience: 'Your brand on our rails. Same-day settlement.', monthlyPriceUsd: 210 }
];

export const providerComparison = [
  { provider: 'Card acquirers', totalCost: '~6.0% to 9.0%', settlement: 'D+3 to D+7', payoutFee: '$0.30' },
  { provider: 'Cross-border PSPs', totalCost: '~4.5% to 6.5%', settlement: 'D+1 to D+3', payoutFee: '$0.20' },
  { provider: 'Wise + gateway', totalCost: '~2.0% to 4.5%', settlement: '1 to 3 days', payoutFee: 'Variable' },
  { provider: brand.name, totalCost: '1.50% to 2.75% · 0.75% white-label', settlement: 'Seconds', payoutFee: '$0.00', isBeep: true }
];

export const marketStats = [
  { value: '184M', label: 'Pix users, 86% of Brazil’s population' },
  { value: '60M', label: 'Brazilian adults without a credit card' },
  { value: '$171B', label: 'Brazil–China trade corridor, 2025' },
  { value: '82%', label: 'Cart abandonment in Brazil, driven by payment friction' }
];

export const faqs = [
  { question: 'How fast do I receive funds?', answer: 'Pix confirms in seconds. Beep pays your RMB (CNY) account the same business day from a pre-funded liquidity pool custodied at Bank of China (Macau), so you never wait on correspondent banking.' },
  { question: 'What is the 0.75% eFX spread?', answer: 'A flat, pass-through spread on the BRL to RMB conversion. It is identical on every tier and itemised on every settlement statement, together with the statutory Brazilian IOF (0.38%).' },
  { question: 'Why Pix instead of cards?', answer: 'About 60 million Brazilian adults have no credit card, while roughly 184 million use Pix. Pix checkout removes the card wall behind Brazil’s 82% cart abandonment rate.' },
  { question: 'Do you support instalments?', answer: 'Yes. Pix Parcelado lets shoppers split a purchase into instalments while you are still settled upfront.' },
  { question: 'Is Beep regulated?', answer: 'Phase 1 operates under a licensed BaaS partner in Brazil. Beep is filing its own Central Bank of Brazil Payment Institution application and follows LGPD in Brazil and PIPL in China.' }
];
