const ProfileModel = require('../models/profileModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createProfile: async (body) => {
        try {
            const profileId = uuidv4();
            const createProfile = await ProfileModel.createProfile(...body, profileId);
            if (createProfile.error) {
                return {
                    error: createProfile.error
                }
            }
            else {
                return {
                    response: createProfile.response
                }
            }
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    getProfiles: async () => {
        try {
            // console.log("getRole Service")
            const getProfiles = await ProfileModel.getProfiles();
            // console.log(getRoles);
            if (getProfiles.error) {
                return {
                    error: getProfiles.error
                };
            }
            else {
                return {
                    response: getProfiles.response
                };

            }
        }
        catch (error) {
            return {
                error: error,
            }
        }
    },
    updateProfile: async (body) => {
        try {
            const updateProfile = await ProfileModel.updateProfile(body);
            return {
                response: updateProfile
            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    },
    deleteProfile: async (query) => {
        try {
            // check if role exists or not! then delete it!
            const deleteProfile = await ProfileModel.deleteProfile(query);
            return {
                response: deleteProfile
            };
        }
        catch (error) {
            return {
                error: error
            }
        }
    }
}