import { Box, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer,  List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import logo from '../assets/Mark.png';
import {Link, NavLink} from 'react-router-dom'
import '../index.css';

export default function NavBar() {
  const links =[ 
    {
      name:'XYZ COLLEGE',
      link:'/'
    },
    {
    name:'Students',
    link:'/students'
  },
  {
    name:'Courses',
    link:'/course'
  },
  {
    name:'Grades',
    link:'/grades'
  },
  {
    name:'Analytics',
    link:'/analytics'
  }
]
  const isLargeScreen = useMediaQuery('(min-width:720px)');
  
  const [state,setState] = useState(false);



  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {

      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        
        return;
      }

      setState(open);
    };


  

    const list = () => (
      <Box
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {links.map((link,indx) => (
            
            <Link
            to={link.link}
            >
            
            <ListItem key={indx} disablePadding>
              <ListItemButton className='text-center'>
                {
                  link.name == "XYZ COLLEGE" && (
                  <ListItemIcon>
                    <img src={logo} width={30} height={30}/>
                  </ListItemIcon>
                  )
                }
                
                <ListItemText primary={link.name} />
              </ListItemButton>
            </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    );
 
    
    const drawer = () => (
        <div>
        <MenuIcon onClick={toggleDrawer(!state)}></MenuIcon>
        <Drawer
          anchor='left'
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </div>
    )

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color={'transparent'} elevation={0} >
        <div className='flex justify-between p-3' >
          {isLargeScreen ? (
            <div className='flex justify-between w-1/2'>
            <Link
            to="/"
            >
            <div className='flex gap-2 text-[17px] font-[700]'>
              <img src={logo} width={30} height={30}/>
              XYZ COLLEGE
            </div>
            </Link>
             <div className='flex justify-around w-3/4 text-[16px]  font-[500] text-[#6B7280]'>
                <div>
                  <NavLink
                  to='/course'
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active border-b-2 border-[#424242]" : ""
                  }
                  >
                  Course
                  </NavLink>

                </div>
                <div>
                  <NavLink
                  to='/student'
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  >
                  Students
                  </NavLink>
                </div>
                <NavLink
                  to='/grades'
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  >
                  Grades
                  </NavLink>
                <div>
                <NavLink
                  to='/analytics'
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  >
                  Analytics
                  </NavLink>
                </div>
             </div>
  
             </div>
          ):
          (
            drawer()
          )
             
          }

           <div className='mr-5'>
              <select>
                 <option>Eng</option>
                 <option>Amh</option>
                 <option>Oro</option>
              </select>
           </div>
        </div>
      </AppBar>
    </Box>
  );
}




