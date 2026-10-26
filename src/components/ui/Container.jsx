import { cx } from '../../utils/cx.js'

export default function Container({ as: Tag = 'div', className, ...rest }) {
  return <Tag className={cx('container', className)} {...rest} />
}
