import { getById } from "../../models/userModel.js"

const userById = async (req, res) => {

    const id = req.params.id
    console.log(id)
    const user = await getById(+id)
    
    if(user)
    res.json({message: "user get by id",
        user
    })
    else 
    res.status(404).json({message: "User not Found"
    })
}
export default userById