import { useTranslation } from 'next-i18next';

import Link from 'next/link';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SocialLinks from '../SocialLinks/SocialLinks';

import isChineseLanguage from '../../common/utils/isChineseLanguage';

function Footer() {
  const { t } = useTranslation('footer');
  const [date, setDate] = useState<number>();

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);

  return (
    <footer
      id="footer"
      className={clsx('footer', {
        'footer--zh': isChineseLanguage(),
      })}
      itemScope
      itemType="http://schema.org/Organization"
    >
      <div className="container footer__inner">
        <div className="footer__about-us">
          <div className="footer__short-information">
            <Link href="/">
              <a className="footer__logo" aria-label="Footer logo">
                <Image
                  src="/images/logo.png"
                  layout="fill"
                />
              </a>
            </Link>

            <span className="footer__description">{t('description')}</span>
          </div>

          <div className="footer__links">
            <span>{t('writeUs')}</span>
            <SocialLinks />
          </div>
        </div>

        <div className="footer__copyright">
          <span>
            {`© 2019-${date} Tourmaline Core`}
          </span>
          <span className="footer__location">
            {t('location')}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
