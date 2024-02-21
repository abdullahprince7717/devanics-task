const profileModel = require('../models/profileModel');
const { v4: uuidv4 } = require('uuid');

module.exports = {
    createProfile: async (body) => {
        try {
            const profileId = uuidv4();
            const createProfile = await profileModel.createProfile({ ...body, profileId });
            console.log("createProfile", createProfile)
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
    getProfiles: async (query) => {
        try {
            const offset = (query.pageNo - 1) * query.limit;
            const getProfiles = await profileModel.getProfiles(offset, query);
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
            const updateProfile = await profileModel.updateProfile(body);
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
            const deleteProfile = await profileModel.deleteProfile(query);
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