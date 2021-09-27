/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../img/logo-black.png'
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { AddOutlined } from '@material-ui/icons';

const style = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: 600,
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  /*const style2 = {
    position: 'absolute',
    top: '0',
    right: '0',
    width: 600,
    height: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };*/

function MenuLateral() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
            <div className="menu-burguer" onClick={handleOpen}>
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
            </div>

        
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="menu-lateral">
        <Box sx={style}>
          <AddOutlined id="icon-add" onClick={handleClose}/>
          <Typography id="modal-title" variant="h6" component="h2">
          <img src={logo} alt="Logo Arredo"/>
          </Typography>
          <Typography id="modal-description">
              <h4>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat.</h4>
          </Typography>
          <Typography>
            <ul className="modal-links">
                <li>Monday to Friday: 9-20</li>
                <li>Saturday to Sunday: closed</li>
                <br/>
                <li><a href="#">arredo@qode.com</a></li>
                <li><a href="#">+1 333 555</a></li>
            </ul>
          </Typography>
        </Box>
        </div>

        {/*<div className="menu-responsivo">
        <Box sx={style2}>
        <Typography>
              <ul>
                  <li><a  href="#">Home</a></li>
                  <li><a href="#">Pages</a></li>
                  <li><a href="#">Shop</a></li>
                  <li><a href="#">Portfolio</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Elements</a></li>
                </ul>
        </Typography>
        </Box>
    </div>*/}
      </Modal>
      

            {/*<section>
                <div className="one"></div>
                <div className="two"></div>

                <img src={logo} alt="Logo Arredo"/>

                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco ommodo consequat.</p>

                <ul>
                    <li>Monday to Friday: 9-20</li>
                    <li>Saturday to Sunday: closed</li>
                    <br/>
                    <li><a href="#">arredo@qode.com</a></li>
                    <li><a href="#">+1 333 555</a></li>
                </ul>
            </section>*/}
        </>
    );
}

export default MenuLateral;