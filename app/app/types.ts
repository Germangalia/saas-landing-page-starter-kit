export interface LandingPageContent {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    heading: string;
    subheading: string;
    centerImage: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    ctaButtons: Array<{
      type: 'appStore' | 'playStore';
      text: string;
    }>;
  };
  finwiseAppImage: {
    src: string;
    alt: string;
  };
  logos: {
    title: string;
    logos: Array<{
      src: string;
      alt: string;
    }>;
  };
  benefits: {
    title: string;
    features: Array<{
      title: string;
      description: string;
      image?: string;
      side?: 'left' | 'right';
      subfeatures?: Array<{
        title: string;
        description: string;
      }>;
    }>;
  };
  pricing: {
    title: string;
    description: string;
    plans: Array<{
      name: string;
      price: string;
      features: string[];
    }>;
  };
  testimonials: {
    title: string;
    description: string;
    testimonials: Array<{
      quote: string;
      author: string;
      role: string;
    }>;
  };
  stats: {
    stats: Array<{
      number: string;
      label: string;
      description: string;
    }>;
  };
  cta: {
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  };
  faq: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
  footer: {
    menu: {
      company: Array<{
        title: string;
        link: string;
      }>;
      products: Array<{
        title: string;
        link: string;
      }>;
      resources: Array<{
        title: string;
        link: string;
      }>;
    };
    social: {
      twitter: string;
      facebook: string;
      linkedin: string;
    };
    copyright: string;
  };
}
