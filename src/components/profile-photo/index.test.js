import React from 'react';
import ProfilePhoto from './index';
import renderer from 'react-test-renderer';

import wrapWithIntl from '../../utils/test-helper';

it('not in edit mode and image is empty. should render empty image svg ', () => {
  const props = {};

  const component = wrapWithIntl(<ProfilePhoto {...props} />);

  const tree = renderer
    .create(component)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('in edit mode and image is empty. should render empty image svg and edit btn', () => {
  const props = {
    editMode: true
  };

  const component = wrapWithIntl(<ProfilePhoto {...props} />);

  const tree = renderer
    .create(component)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('not in edit mode and image is not empty. should render image ', () => {
  const props = {
    imageUrl: 'https://foo.bar/baz.jpg'
  };

  const component = wrapWithIntl(<ProfilePhoto {...props} />);

  const tree = renderer
    .create(component)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('in edit mode and image is not empty. should render image and edit btn', () => {
  const props = {
    editMode: true,
    imageUrl: 'https://foo.bar/baz.jpg'
  };

  const component = wrapWithIntl(<ProfilePhoto {...props} />);

  const tree = renderer
    .create(component)
    .toJSON();

  expect(tree).toMatchSnapshot();
});