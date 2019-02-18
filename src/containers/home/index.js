import React, {Component} from 'react';

import {FormattedMessage} from 'react-intl';

import getBaseUrl from '../../utils/get-base-url';

import {injectIntl} from 'react-intl';

import blockstackLogo from '../../images/blockstack-bug-rev.svg'

class Home extends Component {
  signIn = () => {
    if (window.blockstack.isUserSignedIn()) {
      const {history} = this.props;
      history.push('/app/editor');
      return;
    }

    const base = getBaseUrl();
    const redir = `${base}/app/auth`;
    const manifest = `${base}/manifest.json`;
    const scope = ['store_write', 'publish_data'];

    window.blockstack.redirectToSignIn(redir, manifest, scope);
  };

  render() {
    return (
      <div className="home-wrapper">
        <div className="header">
          <span className="lander-logo">L</span>
        </div>
        <div className="content">
          <div className="showcase">
          </div>
          <div className="text-content">
            <h1 className="main-title"><FormattedMessage id="home.title"/></h1>
            <p className="description"><FormattedMessage id="home.description"/></p>
            <div onClick={this.signIn} className="login-btn">
              <img src={blockstackLogo} className="bl-icon"/> <FormattedMessage id="home.login"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default injectIntl(Home)