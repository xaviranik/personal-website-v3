import {
  SidebarContainer,
  Icon,
  SidebarCloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarLink,
  SidebarLinkR,
  SidebarBtnRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <SidebarCloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            onClick={toggle}
            to="about"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-140}
          >
            About
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="portfolio"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-140}
          >
            Projects
          </SidebarLink>
          <SidebarLink
            onClick={toggle}
            to="contact"
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-140}
          >
            Contact
          </SidebarLink>
          <SidebarLinkR onClick={toggle} to="/blog">
            Blog
          </SidebarLinkR>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtnRoute to="/resume">Resume</SidebarBtnRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
