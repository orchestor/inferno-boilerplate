import Inferno from 'inferno';

import Nav from './Nav';
import Wrapper from './Wrapper';

/**
 * Renders the header text and navigations over a solid color
 *
 * @export
 */
export default function Header({ children, auth, ...props }) {
  return (
    <Wrapper { ...props }>
      { children }
      <Nav auth={ auth } { ...props }/>
    </Wrapper>
  );
}
