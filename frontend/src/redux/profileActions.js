
import { SET_INITIAL_PROFILES, ARCHIVE_PROFILE, ACTIVE_PROFILE } from './profileActionTypes';

const setInitialProfiles = (profiles) => {
    return {
        type: SET_INITIAL_PROFILES,
        payload: profiles

    };
};

const archiveProfile = (profiles) => {
    return {
        type: ARCHIVE_PROFILE,
        payload: profiles
    }

};

const unArchiveProfile = (profiles) => {
    console.log("profiles innaction", profiles)
    return {
        type: ACTIVE_PROFILE,
        payload: profiles
    };
};

export { setInitialProfiles, archiveProfile, unArchiveProfile }