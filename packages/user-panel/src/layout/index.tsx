import React from 'react';
import type { FC } from 'react';
import type { FooterProps, HeaderProps } from '../components';
import { IntlWrapper, Header, Footer } from '../components';
import './style.less';

export interface LayoutProps extends FooterProps, HeaderProps {
  /**
   * 显示底部
   */
  showFooter?: boolean;
}

const Layout: FC<LayoutProps> = ({
  logo,
  logoUrl,
  wechatLogin,
  children,
  showFooter,
  type,
  registerUrl,
}) => {
  return (
    <IntlWrapper>
      <div className="avx-user-panel-container">
        <Header type={type} logo={logo} logoUrl={logoUrl} />
        {children}
        {showFooter ? (
          <Footer
            type={type}
            wechatLogin={wechatLogin}
            registerUrl={registerUrl}
          />
        ) : null}
      </div>
    </IntlWrapper>
  );
};

export default Layout;
