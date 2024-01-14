import { ImageWithFallback } from '.';
import { axeValidation, render, screen } from '../../test/utils';

describe('<ImageWithFallback />', () => {
  axeValidation(<ImageWithFallback src="" alt="test" />);

  it('renders image', () => {
    render(
      <ImageWithFallback
        src="https://static.tvmaze.com/uploads/images/medium_portrait/481/1204342.jpg"
        alt="The Office"
      />,
    );

    expect(screen.getByAltText('The Office')).toBeInTheDocument();
  });

  it('renders fallback image', () => {
    render(<ImageWithFallback src="" alt="The Office" />);

    expect(screen.getByAltText('placeholder-image')).toBeInTheDocument();
  });
});
