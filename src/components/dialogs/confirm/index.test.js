import React from 'react';
import ReactDOM from 'react-dom';

import wrapWithIntl from '../../../utils/test-helper';

import ConfirmDialog from './index';

it('Render dialog', () => {
  const props = {
    toggleUiProp: () => {
    }
  };

  const div = document.createElement('div');
  ReactDOM.render(wrapWithIntl(<ConfirmDialog {...props} />), div);
});