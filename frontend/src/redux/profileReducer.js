// Reducer will be called first before the store is created. So, we need to set the initial state of the store.


const INITIAL_STATE = {
    activeProfiles: [],
    archivedProfiles: []
}

const profileReducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    console.log(state);

    if (action.type === 'ARCHIVE_PROFILE') {
        const activeProfiles = state.activeProfiles.filter(
            profile => profile.profileId !== action.payload.profile.profileId
        );
        const updatedArchivedProfiles = [...state.archivedProfiles, action.payload.profile];

        return {
            profiles: activeProfiles,
            archivedProfiles: updatedArchivedProfiles
        }

    } else if (action.type === 'ACTIVE_PROFILE') {
        const updatedArchivedProfiles = action.payload.profiles.filter(
            profile => profile.profileId !== state.archivedProfiles.profileId
        );
        const updatedProfiles = action.payload.profiles;

        return {
            profiles: updatedProfiles,
            archivedProfiles: updatedArchivedProfiles
        };
    }

    else if (action.type === 'SET_INITIAL_PROFILES') {
        return {
            ...state,
            profiles: action.payload.profiles
        };
    }

    else {
        return state;
    }
}

export default profileReducer;