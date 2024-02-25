
import { SET_INITIAL_PROFILES, ARCHIVE_PROFILE, ACTIVE_PROFILE } from './profileActionTypes';

const setInitialProfiles = (profiles) => {
    console.log("profiles", profiles)
    return {
        type: SET_INITIAL_PROFILES,
        payload: { profiles: profiles }

    };
};

const archiveProfile = (profiles) => {
    return {
        type: ARCHIVE_PROFILE,
        payload: { profiles: profiles }
    }

};

const unArchiveProfile = (profiles) => {
    return {
        type: ACTIVE_PROFILE,
        payload: { profiles: profiles }
    };
};

export { setInitialProfiles, archiveProfile, unArchiveProfile }