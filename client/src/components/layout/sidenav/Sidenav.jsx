import React, { useState } from 'react';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link } from 'react-router-dom';
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
      <SideNav.Toggle style={{ marginBottom: 30 }} />

      <SideNav.Nav defaultSelected="companies">
        <Link
          to="/companies"
          style={{ textDecoration: 'none', color: '#f8f8f8' }}
        >
          <NavItem eventKey="companies" style={{ marginBottom: 40 }}>
            <NavIcon>
              <i className="fas fa-hotel" style={{ fontSize: '26px' }} />
            </NavIcon>
            <NavText style={{ fontSize: '18px' }}>Companies</NavText>
          </NavItem>
        </Link>
        <Link
          to="/buildings"
          style={{ textDecoration: 'none', color: '#f8f8f8' }}
        >
          <NavItem eventKey="buildings" style={{ marginBottom: 40 }}>
            <NavIcon>
              <i className="far fa-building" style={{ fontSize: '26px' }} />
            </NavIcon>
            <NavText style={{ fontSize: '18px' }}>Buildings</NavText>
          </NavItem>
        </Link>
        <Link
          to="/boilers"
          style={{ textDecoration: 'none', color: '#f8f8f8' }}
        >
          <NavItem eventKey="boilers" style={{ marginBottom: 40 }}>
            <NavIcon>
              <i
                className="fas fa-temperature-high"
                style={{ fontSize: '26px' }}
              />
            </NavIcon>
            <NavText style={{ fontSize: '18px' }}>Boilers</NavText>
          </NavItem>
        </Link>
        <Link
          to="/boiler-types"
          style={{ textDecoration: 'none', color: '#f8f8f8' }}
        >
          <NavItem eventKey="boiler-types" style={{ marginBottom: 40 }}>
            <NavIcon>
              <i className="fas fa-hotel" style={{ fontSize: '26px' }} />
            </NavIcon>
            <NavText style={{ fontSize: '18px' }}>Boiler Types</NavText>
          </NavItem>
        </Link>
        <Link
          to="/technicians"
          style={{ textDecoration: 'none', color: '#f8f8f8' }}
        >
          <NavItem eventKey="technicians" style={{ marginBottom: 100 }}>
            <NavIcon>
              <i className="fas fa-hard-hat" style={{ fontSize: '26px' }} />
            </NavIcon>
            <NavText style={{ fontSize: '18px' }}>Technicians</NavText>
          </NavItem>
        </Link>
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
