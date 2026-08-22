export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  alt: string;
  features: string[];
  pricingEstimate: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  category:
    | "Business Growth"
    | "Technical Skills"
    | "Tax Strategy"
    | "Tools & Workflows";
  description: string;
  imageUrl: string;
  readTime: string;
  author: string;
  contentHtml?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  initials: string;
  rating: number;
}

export interface PlanItem {
  id: string;
  name: string;
  priceMonthly: number;
  priceAnnual: number;
  description: string;
  monthlyTxLimit: string;
  features: string[];
  popular?: boolean;
}

export interface ConsultationBooking {
  name: string;
  email: string;
  companyName: string;
  monthlyRevenue: string;
  servicesNeeded: string[];
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
