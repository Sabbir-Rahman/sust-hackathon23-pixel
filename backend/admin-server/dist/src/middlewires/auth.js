"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const utils_1 = require("../utils");
const auth = (roles) => (req, res, next
// eslint-disable-next-line consistent-return
) => {
    const accessToken = (0, lodash_1.get)(req, 'headers.authorization', '').replace(/^Bearer\s/, '');
    // const refreshToken = get(req, 'headers.x-refresh')
    if (!accessToken)
        res.status(403).json({ message: 'Access Token not given' });
    const { decoded } = utils_1.jwtUtils.verifyJwt(accessToken);
    if (decoded) {
        res.locals.user = decoded;
        const jwtRoles = res.locals.user.role;
        const roleSuccess = roles.some((val) => jwtRoles.includes(val));
        if (roleSuccess) {
            console.log('user');
            return next();
        }
        return res.status(401).json({ message: 'User not assign for this role' });
    }
    return res.status(401).json({ message: 'Not authenticated' });
};
exports.default = auth;
