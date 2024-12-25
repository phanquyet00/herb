import React from 'react'
import styled from 'styled-components'
import { Button, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MoneyIcon from '@mui/icons-material/Money';
import Face6Icon from '@mui/icons-material/Face6';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';


export const Data = [
    {
      menu: "GIẢM GIÁ - KHUYẾN MÃI",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "CHĂM SÓC DA MẶT",
      to: "",
      iconRight: <Face6Icon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "CHĂM SÓC BODY",
      to: "gift",
      iconRight: <SelfImprovementIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "BÍ QUYẾT LÀM ĐẸP",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "CHĂM SÓC TÓC",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "TRANG ĐIỂM",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "THỰC PHẨM BẢO VỆ SỨC KHỎE",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "THỰC PHẨM SẮC ĐẸP",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "DỊCH VỤ SPA",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
    {
      menu: "THƯƠNG HIỆU",
      to: "gift",
      iconRight: <MoneyIcon />,
      iconLeft: <ChevronRightIcon />
    },
  ]

const Wraper = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 20px;
  display: flex;
`

const ButtonNav = styled(Button)``

const Sidebar = () => {
  return (
    <Wraper>
        <Title><MenuIcon />DANH MỤC SẢN PHẨM</Title>
        {Data.map((item, index) => (
          <List dense disablePadding>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {item.iconRight}
                </ListItemIcon>
                <ListItemText>{item.menu}</ListItemText>
                <ListItemIcon>
                  {item.iconLeft}
                </ListItemIcon>

                <Menu open=''>
                  <MenuItem>hello</MenuItem>
                </Menu>
              </ListItemButton>
            </ListItem>
          </List>
        ))}
    </Wraper>
  )
}

export default Sidebar
