import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useEffect, useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import checkGray from './assets/check_gray.svg';
import checkGreen from './assets/check_green.svg';
import checkWhite from './assets/check_white.svg';
import clock from './assets/clock.svg';
import uncheckRed from './assets/uncheck_red.svg';
import uncheckWhite from './assets/uncheck_white.svg';
import { DotsFrame } from './DotsFrame';
import { appSt } from './style.css';

const options = [
  {
    title: 'Копилка',
    subtitle: 'Открыта',
  },
  {
    title: '1-ый месяц',
    subtitle: '+ 50 ₽',
  },
  {
    title: '2-ой месяц',
    subtitle: '+ 300 ₽',
  },
  {
    title: '3-ий месяц',
    subtitle: '0 ₽',
  },
  {
    title: '4-ый месяц',
    subtitle: '+ 500 ₽',
  },
  {
    title: '5-ый месяц',
    subtitle: '+ 500 ₽',
  },
  {
    title: '6-ой месяц',
    subtitle: '+ 500 ₽',
  },
  {
    title: '7-ой месяц',
    subtitle: '+ 500 ₽',
  },
  {
    title: '8-ой месяц',
    subtitle: '+ 500 ₽',
  },
];

const texts = [
  {
    title: 'Малое — начало великого',
    subtitle: <>Росток, посаженный сегодня, даст плоды завтра. Начните с малого — и увидите, как растёт ваш капитал</>,
    step: 0,
  },
  {
    title: 'Начни путь, и путь откроется',
    subtitle: (
      <>Как путь начинается с шага, так и рост начинается с первого вложения. Пополните копилку — и дерево начнёт цвести</>
    ),
    step: 1,
  },
  {
    title: 'Лучше капля в день, чем ливень раз в год',
    subtitle: <>Небольшие, но регулярные пополнения, как капли дождя, питают дерево, чтобы оно давало плоды</>,
    step: 2,
  },
  {
    title: 'Засуха лишает плодов',
    subtitle: (
      <>Дерево без дождя слабеет. Так и капитал без пополнений теряет силу. Не забывайте регулярно поливать дерево</>
    ),
    step: 3,
  },
  {
    title: 'Пусть рост не прекращается',
    subtitle: <>Подключите автонакопление, чтобы дерево стало бесконечным потоком изобилия — без лишних тревог и усилий</>,
    step: 7,
  },
];

export const App = () => {
  const [step, setStep] = useState<0 | 1 | 2 | 3 | 7>(0);
  const [controlledSwiper, setControlledSwiper] = useState<SwiperClass | null>(null);

  const textData = texts.find(t => t.step === step);

  useEffect(() => {
    if (controlledSwiper) {
      controlledSwiper.slideTo(step);
    }
  }, [step]);

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive className={appSt.mainTitle} tag="h1" view="large" font="system" weight="bold">
          {textData?.title}
        </Typography.TitleResponsive>

        <div className={appSt.dotContainer}>
          <div className={appSt.dot({ selected: step === 0 })} />
          <div className={appSt.dot({ selected: step === 1 })} />
          <div className={appSt.dot({ selected: step === 2 })} />
          <div className={appSt.dot({ selected: step === 3 })} />
          <div className={appSt.dot({ selected: step === 7 })} />
        </div>
        <Typography.Text className={appSt.subtitle} view="component" color="secondary">
          {textData?.subtitle}
        </Typography.Text>

        <div style={{ margin: '3rem 0' }} className={appSt.dotContainer}>
          <DotsFrame lvl={step} lvlFill={step === 3 ? '#EF4F1D' : '#90AE10'} containerClassName={appSt.frame}>
            <div
              className={appSt.imgTree({ grow: step === 7 ? 3 : step === 3 ? 1 : step, tree: step === 3 ? 'red' : 'green' })}
            />
            {step === 1 && (
              <div className={appSt.chip({ color: 'green' })}>
                <img src={checkWhite} alt="check" width={24} height={24} />
                <Typography.Text view="primary-medium" weight="medium">
                  x 1
                </Typography.Text>
              </div>
            )}
            {step === 3 && (
              <div className={appSt.chip({ color: 'red' })}>
                <img src={uncheckWhite} alt="check" width={24} height={24} />
                <Typography.Text view="primary-medium" weight="medium">
                  x 2
                </Typography.Text>
              </div>
            )}
            {step === 2 && (
              <>
                <div className={appSt.chip({ color: 'green' })}>
                  <img src={checkWhite} alt="check" width={24} height={24} />
                  <Typography.Text view="primary-medium" weight="medium">
                    x 2
                  </Typography.Text>
                </div>
                <div className={appSt.chipText}>
                  <Typography.Text view="primary-medium" weight="medium">
                    Комбо
                  </Typography.Text>
                </div>
              </>
            )}
            {step === 7 && (
              <>
                <div className={appSt.chip({ color: 'green' })}>
                  <img src={checkWhite} alt="check" width={24} height={24} />
                  <Typography.Text view="primary-medium" weight="medium">
                    x 7
                  </Typography.Text>
                </div>
                <div className={appSt.chipText}>
                  <Typography.Text view="primary-medium" weight="medium">
                    Авто
                  </Typography.Text>
                </div>
              </>
            )}
          </DotsFrame>
        </div>

        <Swiper
          modules={[Controller]}
          onSwiper={setControlledSwiper}
          spaceBetween={8}
          slidesPerView="auto"
          style={{ margin: '.5rem 0' }}
          centeredSlidesBounds
          centeredSlides
          centerInsufficientSlides
        >
          {options.map((o, index) => (
            <SwiperSlide
              style={index === 3 && step === 3 ? { border: '2px solid #EF4F1D' } : undefined}
              className={appSt.swSlide({ selected: step === 3 ? index === 3 : index === step })}
              key={o.title}
            >
              <Typography.Text view="primary-small">{o.title}</Typography.Text>
              <Typography.Text view="primary-medium" weight="medium">
                {o.subtitle}
              </Typography.Text>
              <img
                src={
                  index === 3 && step === 3
                    ? uncheckRed
                    : step !== 3 && index === step
                    ? checkGreen
                    : index > step
                    ? clock
                    : checkGray
                }
                alt={o.title}
                width={24}
                height={24}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        {step !== 0 && (
          <button
            className={appSt.btn({ color: 'secondary' })}
            style={{ width: '56px', height: '56px' }}
            onClick={() => {
              if (step === 7) {
                window.gtag('event', 'back_3804_click_p5');
              } else {
                window.gtag('event', `back_3804_click_p${step + 1}`);
              }

              setStep(step === 7 ? 3 : ((step - 1) as 0 | 1 | 2 | 3 | 7));
            }}
          >
            <CDNIcon name="glyph_chevron-left_m" />
          </button>
        )}
        {step === 7 ? (
          <>
            <ButtonMobile
              block
              view="primary"
              className={appSt.btn({ color: 'finished' })}
              href="alfabank://autoaccumulation_settings?accountNumber=-1"
              onClick={() => window.gtag('event', 'activate_3804_click_p5')}
            >
              Подключить
            </ButtonMobile>
            <a
              className={appSt.btn({ color: 'secondary' })}
              style={{ height: '56px', minWidth: '138px', textAlign: 'center', color: 'inherit', textDecoration: 'none' }}
              onClick={() => window.gtag('event', 'no_activate_3804_click_p5')}
              href="alfabank://account_details_on_widgets?url=v1/screen-details-prefiller/invest-details/&accountNumber=-1"
            >
              <Typography.Text view="primary-medium" weight="bold">
                Неинтересно
              </Typography.Text>
            </a>
          </>
        ) : (
          <ButtonMobile
            block
            view="primary"
            className={appSt.btn()}
            onClick={() => {
              window.gtag('event', `next_3804_click_p${step + 1}`);

              setStep(step + 1 === 4 ? 7 : ((step + 1) as 0 | 1 | 2 | 3 | 7));
            }}
          >
            <div className={appSt.btnContainer}>
              <div>
                <Typography.Text color="primary-inverted" weight="medium" view="primary-medium" defaultMargins={false}>
                  Дальше
                </Typography.Text>
              </div>
              <CDNIcon name="glyph_chevron-right_m" />
            </div>
          </ButtonMobile>
        )}
      </div>
    </>
  );
};
