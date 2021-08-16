import React from 'react'; 
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faPollH } from '@fortawesome/free-solid-svg-icons';
import { Footerpage, Miniature, StyledButton } from './styles';

function Footer() {
  return (
    <Footerpage>
      <NavLink to='cognitive_test'>
        <StyledButton>
          <Miniature>
            <FontAwesomeIcon icon={faUser} size='lg' />
          </Miniature>
          <label>Patient Data</label>
        </StyledButton>
      </NavLink>

      <NavLink to='oct_data'>
        <StyledButton>
          <Miniature>
            <FontAwesomeIcon icon={faEye} size='lg' />
          </Miniature>
          <label>OCT data</label>
        </StyledButton>
      </NavLink>
      <NavLink to='results'>
        <StyledButton>
          <Miniature>
            <FontAwesomeIcon icon={faPollH} size='lg' />
          </Miniature>
          <label>Results Summary</label>
        </StyledButton>
      </NavLink>
    </Footerpage>
  );
}

export default Footer;
