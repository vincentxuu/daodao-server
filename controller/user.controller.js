const User = require("../models/user.model")

const profile = async (req, res, next) => {
    console.log("req.sessionStore.sessions:",req.sessionStore.sessions)
    console.log("req.sessionStore.sessions.passport.user:",req.sessionStore.sessions.passport.user)
    try {
        let user = await User.findById(req.session.passport.user);
        console.log("user:",user)
        if (user) {
            return res.status(201).json({
                user
            });
        } else {
            let error = new Error("User not found");
            error.statusCode = 404;
            next(error);
        }
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        // console.log("req:",req)
        console.log("req.body:",req.body)
        const  email  = req.body.email
        let user = await User.findOne({email});
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
        user.interestList = req.body.interestList || user.interestList;
        user.isOpenLocation = req.body.isOpenLocation || user.isOpenLocation;
        user.isOpenProfile = req.body.isOpenProfile || user.isOpenProfile;
        user.isSubscribeEmail = req.body.isSubscribeEmail || user.isSubscribeEmail;
        user.location = req.body.location || user.location;
        user.roleList = req.body.roleList || user.roleList;
        user.selfIntroduction = req.body.selfIntroduction || user.selfIntroduction;
        user.share = req.body.share || user.share;
        user.tagList = req.body.tagList || user.tagList;
        user.wantToDoList = req.body.wantToDoList || user.wantToDoList;

        const updatedUserProfile = await user.save();
        console.log("updatedUserProfile:",updatedUserProfile)
        res.json({
            _id: updatedUserProfile._id,
            birthDay: updatedUserProfile.birthDay,
            contactInformationList: updatedUserProfile.contactInformationList,
            educationStage: updatedUserProfile.educationStage,
            email: updatedUserProfile.email,
            gender: updatedUserProfile.gender,
            name: updatedUserProfile.name,
            photoURL: updatedUserProfile.photoURL,
            interestList: updatedUserProfile.interestList,
            isOpenLocation: updatedUserProfile.isOpenLocation,
            isOpenProfile: updatedUserProfile.isOpenProfile,
            isSubscribeEmail: updatedUserProfile.isSubscribeEmail,
            location: updatedUserProfile.location,
            roleList: updatedUserProfile.roleList,
            selfIntroduction: updatedUserProfile.selfIntroduction,
            share: updatedUserProfile.share,
            tagList: updatedUserProfile.tagList,
            wantToDoList: updatedUserProfile.wantToDoList,
        });
    } catch (error) {
        next(error);
    }
};


const getAllUser = async  (req, res, next) => {
    try{
        let user =  await User.find({});
        res.json(user)
    }catch(error){
        next(error);
    }

};

module.exports = {
    profile,
    update,
    getAllUser
};