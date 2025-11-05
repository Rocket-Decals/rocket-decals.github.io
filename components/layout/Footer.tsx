'use client';

import { useLanguage } from '@/hooks/useLanguage';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
  const { language } = useLanguage();
  const year = getCurrentYear();

  return (
    <div className="copyright">
      <p>
        {language === 'fr'
          ? `© ${year} Rocket Decals. Tous droits réservés.`
          : `© ${year} Rocket Decals. All rights reserved.`}
      </p>
    </div>
  );
}

