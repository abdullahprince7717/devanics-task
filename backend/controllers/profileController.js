const profileService = require('../services/profileService');
const joi = require("joi");

const createProfileSchema = joi.object().keys({
    companyName: joi.string().required(),
    companyLogo: joi.string().required(),
    description: joi.string().required(),
    website: joi.string().required(),
    address: joi.string().required(),
    phone: joi.number().required(),
    city: joi.string().required(),
    country: joi.string().required(),
    zip: joi.number().required(),
    vatNumber: joi.number().required(),
    numberOfHires: joi.number().required()
})


const updateProfileSchema = joi.object().keys({
    profileId: joi.string().required(),
    companyName: joi.string(),
    companyLogo: joi.string(),
    description: joi.string(),
    website: joi.string(),
    address: joi.string(),
    phone: joi.number(),
    city: joi.string(),
    country: joi.string(),
    zip: joi.number(),
    vatNumber: joi.number(),
    numberOfHires: joi.number()
})

const deleteProfileSchema = joi.object().keys({
    profileId: joi.string().required()
})

const paginationSchema = joi.object().keys({
    pageNo: joi.number().positive().greater(0).required(),
    limit: joi.number().valid(),
})


module.exports = {
    createProfile: async (req, res) => {
        try {
            // console.log("req", req.body)
            const validate = await createProfileSchema.validateAsync(req.body);
            // console.log("validate", validate)
            const createProfile = await profileService.createProfile(validate);
            console.log("createProfile", createProfile)

            if (createProfile.error) {
                res.send({
                    error: createProfile.error
                })
            }
            else {
                res.send({
                    response: createProfile
                })
            }
        }
        catch (err) {
            console.log("err", err)
            res.send({
                error: err


            })
        }
    },
    getProfiles: async (req, res) => {
        console.log("req", req);
        try {

            const validate = await paginationSchema.validateAsync(req.query);
            const getProfiles = await profileService.getProfiles(validate);
            console.log("getProfiles", getProfiles);

            if (getProfiles.error) {
                res.send({
                    error: getProfiles.error
                });
            }
            else {
                res.send({
                    response: getProfiles.response,
                    count: getProfiles.count
                });
            }

        }
        catch (error) {
            res.send({
                error: error
            })
        }
    },
    updateProfile: async (req, res) => {
        try {
            const validate = await updateProfileSchema.validateAsync(req.body);
            const updateProfile = await profileService.updateProfile(validate)
            console.log("updateProfile", updateProfile)
            if (updateProfile.error) {
                res.send({
                    error: updateProfile.error
                })
            }
            else {
                res.send({
                    response: updateProfile.response
                })
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    },
    deleteProfile: async (req, res) => {
        try {
            const validate = await deleteProfileSchema.validateAsync(req.query);
            const deleteProfile = await profileService.deleteProfile(validate);
            console.log("deleteProfile", deleteProfile)

            if (deleteProfile.error) {
                res.send({
                    error: deleteProfile.error
                })
            }
            else {
                res.send({
                    response: deleteProfile.response
                })
            }
        }
        catch (error) {
            res.send({
                error: error
            })
        }
    }
}