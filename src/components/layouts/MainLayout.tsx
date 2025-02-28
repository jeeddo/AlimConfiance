import { Children } from '../../types/common'
import FooterLayout from './footer/FooterLayout'
import HeaderLayout from './header/HeaderLayout'
import { Fragment } from 'react/jsx-runtime'

export default function MainLayout({ children }: Children) {
  return (
    <Fragment>
      {' '}
      <HeaderLayout />
      {children}
      <FooterLayout />{' '}
    </Fragment>
  )
}
