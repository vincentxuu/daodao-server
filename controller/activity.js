const Activity = require("../models/activity.model");
const User = require("../models/user.model");

const getActivity = async (req, res, next) => {
    try {
        const { query: { page, pageSize,area, partnerEducationStep, isGrouping, category } } = req;
        const id = req.params.id;
        const userId = req.params.userId;
        console.log('getActivity',userId);

        const filter = {};
        if(userId) {
            filter.userId = userId;
        }
        if(id) {
            filter._id = id;
        }
        if (area) {
            filter.area = area;
        }

        if (partnerEducationStep) {
            filter.partnerEducationStep = partnerEducationStep;
        }

        if (isGrouping) {
            filter.isGrouping = isGrouping;
        }
        if (category) {
            filter.category = category;
        }
        

        const totalCount = await Activity.countDocuments(filter);

        const totalPages = Math.ceil(totalCount / pageSize);

        console.log('activity_filter',filter)

        const activity = await Activity.find(filter)
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        console.log('activity',activity)

        console.log('res.json',{
            data: activity,
            page,
            pageSize,
            totalCount,
            totalPages,
        })
        res.json({
            data: activity,
            page,
            pageSize,
            totalCount,
            totalPages,
        });
    } catch (error) {
        next(error);
    }
};

const createActivity = async(req, res, next) => {
    try {
        const title = req.body.title
        let activity = await Activity.findOne({title});
        if (activity) {
            console.log("活動已建立");
            res.json("活動已建立");
        } else {
            console.log("新活動建立");
            let newActivity = new Activity(req.body);
            let data = await newActivity.save();
            res.json({data});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
    
};

const updateActivity = async (req, res, next) => {
    try {
        // console.log("req:",req)
        console.log("req.body:",req.body)
        const userId  = req.body.userId
        let activity = await Activity.findOne({userId});
        console.log("activity:",activity)

        if (!activity) {
            throw new Error("Activity not found");
        }
        activity.title = req.body.title || activity.title; 
        activity.photoURL = req.body.photoURL || activity.photoURL;
        activity.photoAlt = req.body.photoAlt || activity.photoAlt;  
        activity.category = req.body.category || activity.category;
        activity.area = req.body.area || activity.area;
        activity.time = req.body.time || activity.time;
        activity.partnerStyle = req.body.partnerStyle || activity.partnerStyle;
        activity.partnerEducationStep = req.body.partnerEducationStep || activity.partnerEducationStep;
        activity.description = req.body.description || activity.description;
        activity.tagList = req.body.tagList || activity.tagList;
        activity.isGrouping = req.body.isGrouping || activity.isGrouping;

        const data = await activity.save();
        console.log("updatedActivity:",data)
        res.json({
            data
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

const deleteActivity = async (req, res) => {
    console.log(req.params.id);
    try {
        const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
    
        if (!deletedActivity) {
          return res.status(404).json({ error: "Activity not found" });
        }
    
        res.json(deletedActivity);
      } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
      }
};

module.exports = {
    createActivity,
    getActivity,
    updateActivity,
    deleteActivity,
};