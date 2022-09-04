import React, { FC } from 'react';
import Searcher from '../components/Searcher';
import { render } from '@testing-library/react';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

jest.mock('antd', (): { [x: string]: FC } => ({
  Input: (props: any) => <span {...props} />,
  'Input.Search': (props: any) => <span {...props}>{props.children}</span>,
}));

describe('Searcher', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Searcher />);
    expect(asFragment()).toMatchSnapshot();
  });
});
