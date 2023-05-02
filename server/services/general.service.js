import * as userRepository from "../repository/userRepository.js";
import {userInfoDTO} from "../model/dto/userInfoDTO.js";


export const getUserById = async(id) => {
    try{
        return userInfoDTO(await userRepository.getUserById(id));
    }catch (e) {
        throw new Error(e.message);
    }
}