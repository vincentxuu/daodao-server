const User = require("../models/user.model")

const profile = async (req, res, next) => {
    let object = req.sessionStore.sessions
    console.log("object:",object)

    result = Object.keys(object).reduce(function (value, key) {
        return value.concat(key, object[key]);
    }, []);
    console.log("result:",result)

    let num = result.length
    console.log("num:",num)

    let newNum = Math.floor(num-1)
    console.log("newNum:",newNum,"typeof newNum:",typeof(newNum))
    let newObject = JSON.parse(result[newNum])
    let newResult = newObject["passport"]

    console.log("newResult:",newResult)

    try {
        let user = await User.findById(newResult.user);
        console.log("user:",user)
        if (user) {
            return res.status(200).json({
                user
            });
        } else {
            let error = new Error("User not found");
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
// const getPartner = async  (req, res, next) => {

//     let {params: {_id}, query: {page, pageSize,totalCount,totalPages,educationStage,location,tag}} = req;

//     console.log(_id)
//     try{
//         let user =  await User.find({_id});
//         console.log("getPartner:",user)
//         res.json(user)
//     }catch(error){
//         next(error);
//     }

// };
const getPartner = async (req, res, next) => {
    try {
        const { query: { page, pageSize, _id, educationStage, location, tag } } = req;
        const email = req.params.email;

        const filter = {};
        if( _id) {
                filter._id = _id;
        }

        if (educationStage) {
            filter.educationStage = educationStage;
        }

        if (location) {
            filter.location = location;
        }

        if (tag) {
            filter.tag = tag;
        }
        if (email) {
            filter.email = email;
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

module.exports = {
    profile,
    update,
    getPartner,
};