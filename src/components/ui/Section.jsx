import { cx } from '../../utils/cx.js'

const tones = {
  light: '',
  alt: 'alt',
  white: 'tone-white',
  charcoal: 'tone-charcoal',
  spotlight: 'tone-spotlight',
}

// Vertical page band with a background tone: light | alt | charcoal | spotlight.
export default function Section({ tone = 'light', className, ...rest }) {
  return <section className={cx('section', tones[tone], className)} {...rest} />
}
