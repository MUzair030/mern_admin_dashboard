import clientRoutes from "./clientRoutes.js";
// import generalRoutes from "./generalRoutes";
// import managementRoutes from "./managementRoutes";
// import salesRoutes from "./salesRoutes";

const Routes = (app) => {
    app.use("/client", clientRoutes)
}

export default Routes;