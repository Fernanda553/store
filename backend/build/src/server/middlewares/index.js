"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forRoutes = (req, res, next) => {
    console.log(`${req.method} url:: ${req.url}`);
    next();
};
exports.default = forRoutes;
