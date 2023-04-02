import * as generalService from "../services/general.service.js";

export const getUserById = async(req, res) => {
    try{
        const user = await generalService.getUserById(req.params.userId);
        res.status(200).send(user);
    }
    catch (e) {
        console.log(e);
        res.status(404).json({ msg: e.message });
    }
}