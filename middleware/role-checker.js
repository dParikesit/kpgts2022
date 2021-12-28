function adminChecker(req, res, next) {
    if (req.session.role === "admin") {
        next();
    } else {
        return res.status(401).json({
            error: "You are not authorized",
        });
    }
}

function userChecker(req, res, next) {
    if (req.session.role === "user") {
        next();
    } else {
        return res.status(401).json({
            error: "You are not authorized",
        });
    }
}

module.exports = {adminChecker, userChecker}