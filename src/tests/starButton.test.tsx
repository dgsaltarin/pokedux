import React from 'react';
import { render } from '@testing-library/react';
import StarButton from '../components/StarButton';

jest.mock('antd', () => ({
  Button: (props: any) => <span {...props} />,
}));

describe('Star Button', () => {
  it('should match snapshot', () => {
    const wrapper = render(<StarButton isFavorite={false} OnClick={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
