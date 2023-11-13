// middleware/authorization.js
const authorizeUser = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;

        if (!roles.includes(userRole)) {
            return res.status(403).json({ error: 'Forbidden - Insufficient permissions' });
        }

        next();
    };
};

module.exports = authorizeUser;
