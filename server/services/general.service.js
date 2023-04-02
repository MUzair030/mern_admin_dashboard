import { User } from "../model/entity/user.model.js";

export const getUserById = async(id) => {
    try{
        return await User.findById(id);
    }catch (e) {
        throw new Error(e.message);
    }
}