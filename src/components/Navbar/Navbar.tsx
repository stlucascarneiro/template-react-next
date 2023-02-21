// Config

// Components
import { BottomNavbar, Button, Indicator, Navbar, TopNavbar } from './styles'
// Assets
import Icons from 'atoms/icons'
import { useState } from 'react'
import { Tooltip } from '@chakra-ui/react'

const pages = [
  {
    title: 'Gerador de NPC',
    icon: Icons.npc
  },
  {
    title: 'Sugestão de Cenas',
    icon: Icons.random
  },
  {
    title: 'Ficha de Personagem',
    icon: Icons.character
  },
  {
    title: 'Gerador de Encontros',
    icon: Icons.encounter
  }
]

export const ComponentNavbar = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <Navbar>
      <TopNavbar>
        {pages.map((page, index) => (
          <Tooltip
          key={index}
          label={page.title}
          placement='right'
          openDelay={200}
          hasArrow>
            <Button
              selected={selectedIndex === index}
              onClick={() => setSelectedIndex(index)}>
              <page.icon />
            </Button>
          </Tooltip>
        ))}
      </TopNavbar>
      <BottomNavbar>
        <Tooltip
          label="Sair"
          placement='right'
          hasArrow>
          <Button selected={false}>
            <Icons.exit/>
          </Button>
        </Tooltip>
      </BottomNavbar>
      <Indicator i={selectedIndex * 66}/>
    </Navbar>
  )
}