function authUser(req, res, next){
    if( req.user == null) {
        res.status(403) //403 is code saying you don't have access
        return res.send('You need to sign in')
    }
    next()
}

function authRole(role){
    return (req, res, next) => {
        if(req.user.role !== role){
            res.status(401)
            return res.send('Not allowed')
        }
        next()
    }
}

module.exports = {
    authUser,
    authRole
}