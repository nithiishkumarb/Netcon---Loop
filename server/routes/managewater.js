const router = require("express").Router();
const Tanks =require("../models/Tanks");

router.get('/tankslist', async (req, res) => {
    try {
        const tanks = await Tanks.find({});
        if (tanks.length > 0) {
            return res.status(200).json({ success: true, data: tanks });
        } else {
            return res.status(404).json({ success: false, message: 'No tanks found' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});
module.exports = router;