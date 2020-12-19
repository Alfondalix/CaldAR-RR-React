import React, { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

const Sidenav = () => {
  const date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const [currentTime, setCurrentTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <SideNav style={{ top: 80, justifyContent: 'center' }}>
      <SideNav.Toggle style={{ fontSize: '1.75em', marginBottom: 20 }} />
      <SideNav.Nav defaultSelected="companies">
        <NavItem eventKey="companies" style={{ marginBottom: 40 }}>
          <NavIcon>
            <i className="fas fa-hotel" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText style={{ fontSize: '1.75em' }}>Companies</NavText>
        </NavItem>
        <NavItem eventKey="buildings" style={{ marginBottom: 40 }}>
          <NavIcon>
            <i className="far fa-building" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText style={{ fontSize: '1.75em' }}>Buildings</NavText>
        </NavItem>
        <NavItem eventKey="boilers" style={{ marginBottom: 40 }}>
          <NavIcon>
            <i
              className="fas fa-temperature-high"
              style={{ fontSize: '1.75em' }}
            />
          </NavIcon>
          <NavText style={{ fontSize: '1.75em' }}>Boilers</NavText>
        </NavItem>
        <NavItem eventKey="technicians" style={{ marginBottom: 150 }}>
          <NavIcon>
            <i className="fas fa-hard-hat" style={{ fontSize: '1.75em' }} />
          </NavIcon>
          <NavText style={{ fontSize: '1.75em' }}>Technicians</NavText>
        </NavItem>
        <NavItem>
          <NavText style={{ textAlign: 'center' }}>
            <p>{date}</p>
            <p>{currentTime}</p>
          </NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};

export default Sidenav;
