import React from 'react';
import Button from 'client/components/Button/Button';
import { shallow } from 'enzyme';

test('Button render disabled', () => {
  const isDisabled = true;
  const wrapper = shallow(
    <Button disabled={isDisabled} theme="homepageClick"/>,
  );
  console.log(wrapper);
  const expected = wrapper.contains(
    <button className="root homepageClick disabled" disabled={true}>
    </button>,
  );
  expect(expected).toEqual(true);
});

test('Button render enabled', () => {
  const isDisabled = false;
  const wrapper = shallow(
    <Button disabled={isDisabled} theme="homepageClick"/>,
  );
  console.log(wrapper);
  const expected = wrapper.contains(
    <button className="root homepageClick" disabled={false}>
    </button>,
  );
  expect(expected).toEqual(true);
});
