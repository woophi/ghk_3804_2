import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const mainTitle = style({
  marginTop: '1rem',
  textAlign: 'center',
  maxWidth: '288px',
  alignSelf: 'center',
});
const subtitle = style({
  textAlign: 'center',
  alignSelf: 'center',
});

const dot = recipe({
  base: {
    width: '6px',
    height: '6px',
    backgroundColor: '#D9D9D9',
    borderRadius: '20px',
    transition: 'all 0.3s ease-in-out',
  },

  variants: {
    selected: {
      true: {
        width: '40px',
        backgroundColor: '#000000',
      },
    },
  },
});

const dotContainer = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '8px',
  alignItems: 'center',
});

const frame = style({
  position: 'relative',
});

const imgTree = recipe({
  base: {
    width: '192px',
    height: '192px',
    borderRadius: '50%',
    position: 'absolute',
    left: '14px',
    top: '15px',
    transition: 'all 0.3s ease-in-out',
  },
  variants: {
    grow: {
      0: {
        transform: 'rotate(0deg)',
        backgroundPosition: '-188px -580px',
      },
      1: {
        transform: 'rotate(270deg)',
        backgroundPosition: '-936px -192px',
      },
      3: {
        transform: 'rotate(90deg)',
        backgroundPosition: '-580px -188px',
      },
    },
    tree: {
      green: {
        backgroundImage: 'url(./assets/tree_green.svg)',
      },
      red: {
        backgroundImage: 'url(./assets/tree_red.svg)',
      },
    },
  },
  defaultVariants: {
    tree: 'green',
    grow: 0,
  },
});

const swSlide = recipe({
  base: {
    minWidth: '120px',
    maxWidth: '120px',
    height: '108px',
    padding: '16px 16px 12px 16px',
    borderRadius: '20px',
    textAlign: 'center',
    transition: 'all .25s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: '2px solid #F3F4F5',
    gap: '8px',
  },
  variants: {
    selected: {
      true: {
        border: '2px solid #90AE10',
      },
    },
  },
});

const btn = recipe({
  base: {
    padding: '1rem',
    borderRadius: '20px',
  },
  variants: {
    color: {
      finished: {
        backgroundColor: '#90AE10',
        color: '#fff',
      },
      secondary: {
        backgroundColor: '#F3F4F5',
        outline: 'none',
        border: 'none',
      },
    },
  },
});

const btnContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  textAlign: 'left',
  gap: '1rem',
});

const chip = recipe({
  base: {
    width: '62px',
    height: '32px',
    padding: '4px 8px 4px 4px',
    borderRadius: '16px',
    color: '#fff',
    position: 'absolute',
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    top: '10px',
    left: '161px',
    zIndex: 1,
  },
  variants: {
    color: {
      green: {
        backgroundColor: '#90AE10',
      },
      red: {
        backgroundColor: '#EF4F1D',
        transform: 'rotate(-8deg)',
      },
    },
  },
});
const chipText = style({
  width: 'max-content',
  height: '32px',
  padding: '4px 8px',
  borderRadius: '16px',
  color: '#90AE10',
  backgroundColor: '#fff',
  position: 'absolute',
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  top: '40px',
  left: '167px',
  transform: 'rotate(-8deg)',
});

export const appSt = {
  bottomBtn,
  container,
  mainTitle,
  dotContainer,
  dot,
  subtitle,
  imgTree,
  frame,
  swSlide,
  btn,
  btnContainer,
  chip,
  chipText,
};
