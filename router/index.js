const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
    const message = { greating: "Hello", person: "Heicha" };
    return res.status(200).json(message);
});

module.exports = router;