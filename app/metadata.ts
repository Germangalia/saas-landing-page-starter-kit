import { Metadata } from 'next';
import { LandingPageContent } from './types';

// Import content
const content: LandingPageContent = require('../data/landingPageContent.json') as LandingPageContent;

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
};
