import { LightModeOutlined,
DarkModeOutlined,
Menu,
Search,
SettingsOutlined, NotificationsOutlined, PersonOutlined
}
from "@mui/icons-material";
// import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../store/state/theme";
import {AppBar, Toolbar, Stack, InputBase, IconButton, useTheme} from "@mui/material";

const Navbar = (params) => {
    const { sidebarOpen, setSidebarOpen } = params;
    const dispatch = useDispatch();
    const theme = useTheme();

    const handleSidebar = ()=> {
        console.log("sidebarOpen before ::: ", sidebarOpen)
        setSidebarOpen(!sidebarOpen);
    }

    return(
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}>
            <Toolbar sx={{ justifyContent: "space-between",
                background: theme.palette.background.alt
            }}>

                {/* Left Side */}
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center", gap: "1rem"}}>
                   <IconButton
                   onClick={handleSidebar}>
                       <Menu/>
                    </IconButton>
                    <Stack direction="row" sx={{border: "1px solid none",
                        borderRadius: "0.5rem",
                        background:theme.palette.background.default}}>
                        <InputBase
                            sx={{pr:"1rem", pl:"1rem"}}
                            placeholder="Search..." />
                        <IconButton>
                            <Search/>
                        </IconButton>
                    </Stack>
                </Stack>

                {/* Right Side */}
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center", gap: "1rem"}}>
                    <IconButton onClick={()=>dispatch(setMode())} >
                        {
                            theme.palette.mode === 'dark' ?
                                <DarkModeOutlined/>
                                :
                                <LightModeOutlined/>
                        }

                    </IconButton>
                    <IconButton>
                        <SettingsOutlined/>
                    </IconButton>
                    <IconButton>
                        <PersonOutlined/>
                    </IconButton>
                </Stack>


            </Toolbar>
        </AppBar>
    )
}

export default Navbar;