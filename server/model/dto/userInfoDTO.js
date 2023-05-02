export const userInfoDTO = (data) => {
     return {
         id: data._id,
         name: data.name,
         email: data.email,
         country: data.country,
         roles: data.role,
         transactions: data.transactions
     }
}