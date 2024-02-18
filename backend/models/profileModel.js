
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
    getProfile: async () => {
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
                ProfileName: body.ProfileName,
                ProfileDescription: body.ProfileDescription,
                ProfileImage: body.ProfileImage
            }, {
                where: {
                    ProfileId: body.ProfileId
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
                    ProfileId: query.ProfileId
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