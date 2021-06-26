import {
  SidebarContainer,
  Icon,
  SidebarCloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarLink,
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
          <SidebarLink onClick={toggle} to="about">
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to="projects">
            Projects
          </SidebarLink>
          <SidebarLink onClick={toggle} to="contact">
            Contact
          </SidebarLink>
          <SidebarLink onClick={toggle} to="blog">
            Blog
          </SidebarLink>
        </SidebarMenu>
        <SidebarBtnWrap>
          <SidebarBtnRoute to="/resume">Resume</SidebarBtnRoute>
        </SidebarBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
