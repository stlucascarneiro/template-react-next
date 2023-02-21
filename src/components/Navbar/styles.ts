import styled from 'styled-components'

export const Navbar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 56px;
  background-color: ${({ theme }) => theme.color.background.card};
  border-radius: 4px;
  flex-grow: 1;
  margin: 0.5rem ;
  overflow-x: hidden;
`

export const TopNavbar = styled.div`
  display: flex;
  flex-direction: column;
`

export const BottomNavbar = styled.div`
  border-top: 1px solid ${({ theme }) => theme.color.element.lighter};
`

export const Button = styled.button<{selected: boolean}>`
  fill: ${({ theme, selected }) => selected ? theme.color.brand.primary : theme.color.element.light};
  transition: .3s;
  border-radius: 4px;
  margin: 0.75rem 0;

  :hover{
    background-color: ${({ selected }) => selected ? '' : 'rgba(255, 255, 255, 0.02)'};
    fill: ${({ theme }) => theme.color.brand.primary};
    transition: .3s;
  }
`

export const Indicator = styled.div<{i: number}>`
  position: absolute;
  width: 2px;
  height: 28px;
  right: 0px;
  top: ${({ i }) => `calc(7px + ${i}px + 12px)`};
  transition: .3s;

  background: rgba(120, 242, 244, 0.73);
  box-shadow: 0px 0px 16px 1px #78F2F4;
  border-radius: 12px;
`