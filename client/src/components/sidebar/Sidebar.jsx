import {
    Box, Stack, Divider, Drawer, List,
    ListItem, ListItemButton, ListItemIcon,
    ListItemText, Typography, useTheme, IconButton
} from "@mui/material";
import { NavigateBefore} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "./menuItems";

const Sidebar = (params) => {
    const { drawerWidth, isNonMobile, sidebarOpen, setSidebarOpen } = params;
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme = useTheme();


    useEffect(()=>{
        setActive(pathname.substring(1));
        console.log(sidebarOpen)
    }, [pathname, sidebarOpen]);

    const handleButtonClick = (item) => {
        navigate(`/${item.toLowerCase()}`)
        setActive(item.toLowerCase());
    }

    const handleSideBar = () => {
        setSidebarOpen(!sidebarOpen);
    }

    return(

        sidebarOpen &&
        <Box sx={{
            zIndex: "9999",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
        }}>
            {/*     logo    */}
            <Drawer
                open={sidebarOpen}
                onClose={()=> setSidebarOpen(false)}
                variant="persistent"
                anchor="left"
                sx={{
                    width: drawerWidth,
                    "& .MuiDrawer-paper": {
                        color: theme.palette.secondary[200],
                        backgroundColor: theme.palette.background.alt,
                        boxSizing: "border-box",
                        borderWidth: isNonMobile? 0 : "2px",
                        width: drawerWidth
                    }
                }}
            >

                <Box width="100%">

                    {/*     logo    */}
                    <Box width="100%" sx={{
                        display: "block",
                        p:"1rem 0.1rem",
                        textAlign: "center",
                    }}>
                        <Stack direction="row" sx={{
                            justifyContent: "center"
                        }}>
                            <Typography sx={{fontSize: theme.typography.h3.fontSize}}>
                                ECOM VISION
                            </Typography>
                            {
                                !isNonMobile &&
                                <Stack sx={{
                                    justifyContent: "right"
                                }}>
                                    <IconButton
                                        onClick={handleSideBar}>
                                        <NavigateBefore/>
                                    </IconButton>
                                </Stack>
                            }
                        </Stack>
                    </Box>

                    {/*    menu items   */}
                    <Stack m="0rem 1.5rem" >
                        {
                            menuItems.map(({name, icon}) => (
                                <List sx={{
                                    padding: "0px"
                                }}>
                                    <Stack direction="row" sx={{
                                        background: active === name.toLowerCase()? theme.palette.selectedItem.default : "none",
                                        borderRadius: "0.5rem",
                                        justifyContent: "left",
                                        alignItems: "center",
                                        "& :hover": {
                                            borderRadius: "0.5rem"
                                        }
                                        }}>
                                            {
                                                icon ?
                                                    <ListItemButton
                                                    onClick={()=>handleButtonClick(name)}>
                                                        <ListItemIcon sx={{minWidth: "35px"}}>
                                                        {icon}
                                                    </ListItemIcon>
                                                        <ListItemText primary={name} />
                                                    </ListItemButton>
                                                :
                                                <Typography sx={{
                                                    fontSize: theme.typography.fontSize,
                                                    marginTop: "1.5rem"
                                                }}>
                                                {name}
                                                </Typography>
                                            }

                                    </Stack>
                                </List>
                            ))
                        }
                    </Stack>
                </Box>

            </Drawer>
        </Box>
    )
}

export default Sidebar;
