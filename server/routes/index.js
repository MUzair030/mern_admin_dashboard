import clientRoutes from "./clientRoutes.js";
import generalRoutes from "./generalRoutes.js";
// import managementRoutes from "./managementRoutes";
// import salesRoutes from "./salesRoutes";

const Routes = (app) => {
    app.use("/general", generalRoutes)
    app.use("/client", clientRoutes)
}

export default Routes;