import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import clsx from 'clsx';
import { CompletedProject } from '../../../../utils/consts/completedProjects';

import IconLargeArrow from '../../../../icons/large-arrow.svg';
import IconArrow from '../../../../icons/long-arrow.svg';
import useIsChineseLanguage from '../../../../common/hooks/useIsChineseLanguage';

function CompletedProjectsCard({
  completedProject,
}: {
  completedProject: CompletedProject;
}) {
  const { t } = useTranslation('completedProjects');

  return (
    <a
      href={completedProject.link}
      target="_blank"
      className={clsx('completed-project-card', {
        'completed-project-card--zh': useIsChineseLanguage(),
      })}
      rel="noreferrer"
    >
      <h3 className="title-type-3 completed-project-card__title">{completedProject.title}</h3>
      <span className="completed-project-card__description">{t(completedProject.descriptionName)}</span>

      <div className="completed-project-card__image">
        <Image
          src={`/images/${completedProject.image}.png`}
          alt={completedProject.alt}
          layout="fill"
          loading="lazy"
        />
      </div>
      <span className="completed-project-card__link">
        {t('goToProject')}
        <IconLargeArrow className="completed-project-card__arrow-large" />
        <IconArrow className="completed-project-card__arrow-long" />
      </span>
    </a>
  );
}

export default CompletedProjectsCard;
