import {
  useState, useRef, useMemo,
} from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';

import { useAutoClose } from '../../common/hooks/useAutoClose';
import { languages } from '../../utils/consts/languages';

import IconArrow from '../../icons/icon-arrow.svg';
import { DEFAULT_LOCALE } from '../../utils/consts/const';
import useIsChineseLanguage from '../../common/hooks/useIsChineseLanguage';

function LangSwitch() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [isTooltipOpened, setIsTooltipOpened] = useState(false);

  useAutoClose(containerRef, setIsTooltipOpened);

  const routerLocale = useMemo(() => {
    if (!router.locale) {
      return DEFAULT_LOCALE;
    }

    return router.locale;
  }, [router.locale]);

  return (
    <div
      ref={containerRef}
      className={clsx('lang-switch', {
        'lang-switch--zh': useIsChineseLanguage(),
      })}
    >
      <button
        type="button"
        className="lang-switch__active"
        onClick={() => setIsTooltipOpened(!isTooltipOpened)}
      >
        {languages[routerLocale].icon()}
        {languages[routerLocale].shortName}
        <IconArrow
          className={clsx(
            'lang-switch__arrow',
            { 'lang-switch__arrow--open': isTooltipOpened },
          )}
        />
      </button>

      {router.locales && isTooltipOpened && (
        <ul className="lang-switch__list">
          {router.locales.map((locale) => (
            <li
              key={locale}
              className="lang-switch__option"
            >
              <a
                className={clsx(
                  'lang-switch__link',
                  { 'lang-switch__link--active': routerLocale === locale },
                )}
                href={router.pathname + locale}
              >
                {languages[locale].icon()}
                {languages[locale].name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LangSwitch;
