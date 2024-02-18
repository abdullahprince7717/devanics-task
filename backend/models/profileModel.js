
const { models } = require('./index');
module.exports = {
    createProfile: async (body) => {
        console.log("check1 Model")
        try {
            const createProfile = await models.Profile.create({
                ...body
            });
            return {
                response: createProfile
            };
        }
        catch (err) {
            return {
                error: err,
            }
        }
    },
    getProfiles: async () => {
        try {
            const getProfiles = await models.Profile.findAll();
            return {
                response: getProfiles
            };
        }
        catch (error) {
            return {
                error: error,
            }
        }
    },
    updateProfile: async (body) => {
        try {
            const updateProfile = await models.Profile.update({
                ...body
            }, {
                where: {
                    profileId: body.profileId
                }
            });
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
            const deleteProfile = await models.Profile.destroy({
                where: {
                    profileId: query.profileId
                }
            });
            return {
                response: deleteProfile
            };
        }
        catch (error) {
            return {
                error: error
            };
        }
    }

}