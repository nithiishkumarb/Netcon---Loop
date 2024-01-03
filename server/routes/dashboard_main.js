const router = require("express").Router();
const Industries = require("../models/Industries");
const Tanks =require("../models/Tanks");
const Generator=require("../models/generator");

router.get('/industries', async (req, res) => {
    try {
        const industries = await Industries.find({});
        if (industries.length > 0) {
            return res.status(200).json({ success: true, data: industries });
        } else {
            return res.status(404).json({ success: false, message: 'No industries found' });
        }
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

router.get('/tanks', async(req,res)=>{
    try{
        const tanks=await Tanks.find({});
        if(tanks.length>0){
            return res.status(200).json({ success:true, data:tanks});
        }else{
            return res.status(404).json({success:false, message: "No tanks found"});
        }
    }catch(error){
        return res.status(500).json({ success:false, message: 'Internal server error'})
    }
})

router.get('/generator', async(req,res)=>{
    try{
        const generator=await Generator.find({});
        if(generator.length>0){
            return res.status(200).json({ success:true, data:generator});
        }else{
            return res.status(404).json({success:false, message: "No tanks found"});
        }
    }catch(error){
        return res.status(500).json({ success:false, message: 'Internal server error'})
    }
})

//Industry_List
router.get('/industries_list', async (req, res) => {
    try {
        const industries = await Industries.aggregate([
            {
                $lookup: {
                    from: 'generators',
                    localField: 'Industry_ID',
                    foreignField: 'Industry_ID',
                    as: 'generators'
                }
            },
            {
                $lookup: {
                    from: 'tanks',
                    localField: 'Industry_ID',
                    foreignField: 'Industry_ID',
                    as: 'tanks'
                }
            },
            {
                $unwind: { path: '$generators', preserveNullAndEmptyArrays: true }
            },
            {
                $unwind: { path: '$tanks', preserveNullAndEmptyArrays: true }
            },
            {
                $project: {
                    _id: 1,
                    Industry_ID: 1,
                    Industry_name: 1,
                    Industry_place: 1,
                    Generator_ID: '$generators.Generator_ID',
                    Tank_ID: '$tanks.Tank_ID'
                }
            }
        ]);
        res.json(industries);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;