import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: rgba(3, 8, 17, 0.65);
  backdrop-filter: saturate(180%) blur(19px);
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarCloseIcon = styled(FaTimes)`
  color: #e5e7eb;
`;

export const SidebarWrapper = styled.div`
  color: #e5e7eb;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.5s ease-in-out;
  color: #e5e7eb;
  cursor: pointer;

  &:hover {
    color: #64ffda;
    transition: 0.5s ease-in-out;
  }

  &.active {
    color: #64ffda;
    transition: 0.5s ease-in-out;
  }
`;

export const SidebarLinkR = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.5s ease-in-out;
  color: #e5e7eb;
  cursor: pointer;

  &:hover {
    color: #64ffda;
    transition: 0.5s ease-in-out;
  }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarBtnRoute = styled(LinkR)`
  border: 2px solid #64ffda;
  color: #64ffda;
  padding: 0.7rem 1.2rem;
  border-radius: 8px;
  font-weight: 500;
`;
