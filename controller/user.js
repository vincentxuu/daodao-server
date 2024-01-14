const User = require("../models/user.model")
const getPartner = async (req, res, next) => {
    try {
        let { query: { page, pageSize, educationStage,roleList, location, tag, search } } = req;
        const _id = req.params.id;

        let filter = {};
        if( _id) {
            filter._id = _id;
        }

        if (educationStage) {
            educationStage = educationStage.split(',');
            filter.educationStage = { $in: educationStage };
        }
        if (roleList) {
            roleList =  roleList.split(',');
            filter.roleList = { $in: roleList };
        }

        if (location) {
            location = location.split(',');
            filter.location = { $in: location };
        }

        if (tag) {
            tag =  tag.split(',');
            filter.tag = { $in: tag };
        }
        if (search) {
            let searchQuery = { 
                $or: [
                  { name: new RegExp(search, 'i') },
                  { selfIntroduction: new RegExp(search, 'i') },
                  { share: new RegExp(search, 'i') },
                  { roleList: new RegExp(search, 'i') },
                  { interestList: new RegExp(search, 'i') },
                  { tagList: new RegExp(search, 'i') },
                ]
              };
            filter = searchQuery;
            console.log(filter);
        }
        

        const totalCount = await User.countDocuments(filter);

        const totalPages = Math.ceil(totalCount / pageSize);

        console.log('users_filter',filter)

        const users = await User.find(filter)
            .skip((page - 1) * pageSize)
            .limit(pageSize);

        console.log('users',users)

        console.log('res.json',{
            data: users,
            page,
            pageSize,
            totalCount,
            totalPages,
        })
        res.json({
            data: users,
            page,
            pageSize,
            totalCount,
            totalPages,
        });
    } catch (error) {
        next(error);
    }
};
const update = async (req, res, next) => {
    try {
        // console.log("req:",req)
        console.log("req.body:",req.body)
        const _id = req.params.id;
        let user = await User.findOne({_id});
        console.log("user:",user)

        if (!user) {
            throw new Error("User not found");
        }
        

        user.birthDay = req.body.birthDay || user.birthDay;
        user.contactInformationList = req.body.contactInformationList || user.contactInformationList;
        user.educationStage = req.body.educationStage || user.educationStage;
        user.email = req.body.email || user.email;
        user.gender = req.body.gender || user.gender;
        user.googleID = req.body.googleID || user.googleID;
        user.name = req.body.name || user.name;
        user.photoURL = req.body.photoURL || user.photoURL;
        user.interestList = req.body.interestList ?? user.interestList;
        user.isOpenLocation = req.body.isOpenLocation ?? user.isOpenLocation;
        user.isOpenProfile = req.body.isOpenProfile ?? user.isOpenProfile;
        user.isSubscribeEmail = req.body.isSubscribeEmail ?? user.isSubscribeEmail;
        user.location = req.body.location || user.location;
        user.roleList = req.body.roleList || user.roleList;
        user.selfIntroduction = req.body.selfIntroduction || user.selfIntroduction;
        user.share = req.body.share || user.share;
        user.tagList = req.body.tagList || user.tagList;
        user.wantToDoList = req.body.wantToDoList || user.wantToDoList;
        user.updatedDate = Date.now();

        const updatedUserProfile = await user.save();
        console.log("updatedUserProfile:",updatedUserProfile)
        res.json({data:updatedUserProfile});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getPartner,
    update,
};