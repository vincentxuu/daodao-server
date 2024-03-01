const Activity = require("../models/activity.model");
const User = require("../models/user.model");

const handleErrors = (res, error) => {
    console.error(error);
    res.status(500).json({ error });
};

const getActivity = async (req, res) => {
    try {
        const { query: { page, pageSize, area, partnerEducationStep, isGrouping, category } } = req;
        const id = req.params.id;
        const userId = req.params.userId;

        const filter = {};
        if (userId) filter.userId = userId;
        if (id) filter._id = id;
        if (area) filter.area = area;
        if (partnerEducationStep) filter.partnerEducationStep = partnerEducationStep;
        if (isGrouping) filter.isGrouping = isGrouping;
        if (category) filter.category = category;

        const totalCount = await Activity.countDocuments(filter);
        const totalPages = Math.ceil(totalCount / pageSize);

        const activity = await Activity.find(filter)
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        const userIds = Array.from(new Set(activity?.map(item => item.userId)));
        console.log('userIds',userIds);
            
        const users = await User.find({ _id: { $in: userIds } });
        console.log('users',users);

            
        const combinedData = activity?.map(activityItem => {
            const user = users?.find(userItem => userItem._id?.toString() === activityItem.userId?.toString());
            console.log('combinedData_users',users)
            if (user) {
                return {
                    ...activityItem.toObject(), 
                    user: {
                        photoURL: user.photoURL,
                        name: user.name,
                        email: user.email,
                        educationStage: user.educationStage,
                        location: user.location,
                        roleList: user.roleList,
                    },
                };
            } else {
                console.error('User not found for userId:', activityItem.userId);
                return {
                    ...activityItem.toObject(),
                    user: null,
                };
            }
        });

        console.log('combinedData',combinedData);
        res.json({
            data: combinedData,
            page,
            pageSize,
            totalCount,
            totalPages,
        }); 
    } catch (error) {
        handleErrors(res, error);
    }
};

const createActivity = async (req, res) => {
    try {
        const title = req.body.title;
        const existingActivity = await Activity.findOne({ title });

        if (existingActivity) {
           res.json({"通知":"活動已建立"});
        } else {
            const newActivity = new Activity(req.body);
            const data = await newActivity.save();
            res.json ({ data });
        }
    } catch (error) {
        handleErrors(res, error);
    }
};

const updateActivity = async (req, res) => {
    try {
        const _id = req.params.id;
        const updatedActivity = await Activity.findByIdAndUpdate(_id, req.body, { new: true });

        if (!updatedActivity) {
            return res.status(404).json({ error: "Activity not found" });
        }

        res.json({
            data: updatedActivity,
        });
    } catch (error) {
        handleErrors(res, error);
    }
};

const deleteActivity = async (req, res) => {
    try {
        const deletedActivity = await Activity.findByIdAndDelete(req.params.id);

        if (!deletedActivity) {
            return res.status(404).json({ error: "Activity not found" });
        }
        res.json({deletedActivity});
    } catch (error) {
        handleErrors(res, error);
    }
};

module.exports = {
    createActivity,
    getActivity,
    updateActivity,
    deleteActivity,
};
