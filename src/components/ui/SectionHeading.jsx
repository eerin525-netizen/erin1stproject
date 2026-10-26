import { cx } from '../../utils/cx.js'
import AnimatedHeading from './AnimatedHeading.jsx'
import Eyebrow from './Eyebrow.jsx'
import Reveal from './Reveal.jsx'

// Eyebrow + serif heading with an italic gold accent: title <em>em</em>.
// `note` adds a side paragraph (split layout); `spaced={false}` drops the bottom margin.
export default function SectionHeading({ eyebrow, title, em, note, spaced = true, className }) {
  return (
    <div className={cx(spaced && 'head', note && 'split', className)}>
      <div>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <AnimatedHeading title={title} em={em} />
      </div>
      {note && <Reveal as="p" delay={200} className="head-note">{note}</Reveal>}
    </div>
  )
}
