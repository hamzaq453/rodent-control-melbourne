'use client';

import { usePathname } from 'next/navigation';
import QuoteSection from './QuoteSection';

const ConditionalQuoteSection = () => {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  if (isContactPage) {
    return null;
  }

  return <QuoteSection />;
};

export default ConditionalQuoteSection;
