'use client';

import { useLanguage } from '@/hooks/useLanguage';

export default function TutorialSection() {
  const { t } = useLanguage();

  return (
    <div id="tuto-container" className="tuto-container">
      <h2


        className="featured-title"
      >
        {t('tutorial.title')}
      </h2>

      <div className="tuto-content">
        <div className="tuto-cards">
          <h3>{t('tutorial.step1.title')}</h3>
          <p>
            {t('tutorial.step1.text')}{' '}
            <a target="_blank" href="https://bakkesplugins.com/plugins/view/108" rel="noopener noreferrer">
              AlphaConsole
            </a>
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/tuto/alphaconsole.png" alt="AlphaConsole" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div className="tuto-cards">
          <h3>{t('tutorial.step2.title')}</h3>
          <p>{t('tutorial.step2.text1')}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/tuto/bakkes.png" alt="BakkesMod" style={{ maxWidth: '100%', height: 'auto' }} />
          <p>{t('tutorial.step2.text2')}</p>
        </div>

        <div className="tuto-cards">
          <h3>{t('tutorial.step3.title')}</h3>
          <p>{t('tutorial.step3.text1')}</p>
          <p>{t('tutorial.step3.text2')}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/tuto/cosmetics.png" alt="Cosmetics" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>

        <div className="tuto-cards">
          <h3>{t('tutorial.step4.title')}</h3>
          <p>{t('tutorial.step4.text')}</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/tuto/items.png" alt="Items" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

