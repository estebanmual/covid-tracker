import renderer from 'react-test-renderer';
import {
  render, screen,
} from '@testing-library/react';
import NotMatch from './NotMatch';

it('snapshot of homepage', () => {
  const tree = renderer.create(
    <NotMatch />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('rendering page', () => {
  render(<NotMatch />);
  expect(screen.getByText('NotMatch')).toBeInTheDocument();
});
