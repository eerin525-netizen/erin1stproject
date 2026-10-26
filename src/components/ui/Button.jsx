import { Link } from 'react-router-dom'
import { cx } from '../../utils/cx.js'

// One button for every call to action.
//   <Button to="/x">   router link
//   <Button href="..."> plain anchor (mailto, external)
//   <Button>           <button> (pass type="submit" etc.)
// variant: gold | ghost   size: md | sm   icon: trailing lucide icon component
export default function Button({ to, href, variant = 'gold', size = 'md', icon: Icon, className, children, ...rest }) {
  const cls = cx('btn', `btn-${variant}`, size === 'sm' && 'sm', className)
  const content = <>{children}{Icon && <Icon size={size === 'sm' ? 14 : 16} aria-hidden />}</>
  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>
  return <button className={cls} {...rest}>{content}</button>
}
