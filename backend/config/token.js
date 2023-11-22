const jwt= require('jsonwebtoken');
const generateToken=(user)=>{
    return jwt.sign(
        {
            _id:user._id,
            firstname:user.firstname,
            lastname:user.lastname,
            email:user.email,
            role:user.role,

        },
        "BiblioSecretKey",
        {
            expiresIn:'30d',
        }
    );
}
module.exports=generateToken;