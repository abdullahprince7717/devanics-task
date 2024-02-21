// Reducer will be called first before the store is created. So, we need to set the initial state of the store.


const INITIAL_STATE = {
    activeProfiles: [],
    archivedProfiles: []
}

const profileReducer = (state = INITIAL_STATE, action) => {

    if (action.type === 'ARCHIVE_PROFILE') {
        const activeProfiles = state.activeProfiles.filter(
            profile => profile.profileId !== action.payload.profile.profileId
        );
        const updatedArchivedProfiles = [...state.archivedProfiles, action.payload.profile];

        return {
            activeProfiles: activeProfiles,
            archivedProfiles: updatedArchivedProfiles
        }

    } else if (action.type === 'ACTIVE_PROFILE') {
        const updatedArchivedProfiles = action.payload.profiles.filter(
            profile => profile.profileId !== state.archivedProfiles.profileId
        );
        const updatedProfiles = action.payload.profiles;

        return {
            activeProfiles: updatedProfiles,
            archivedProfiles: updatedArchivedProfiles
        };
    }

    else if (action.type === 'SET_INITIAL_PROFILES') {
        return {
            ...state,
            activeProfiles: action.payload.profiles
        };
    }

    else {
        return state;
    }
}

export default profileReducer;