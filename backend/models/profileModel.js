
const { models } = require('./index');
module.exports = {
    createProfile: async (body) => {
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
    getProfiles: async (offset, query) => {
        try {
            const getProfiles = await models.Profile.findAll({
                offset: offset,
                limit: query.limit,
            });

            const count = await models.Profile.count()
            return {
                response: getProfiles,
                count: count
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