import type { RootState } from 'app/providers/StoreProvider'

export const selectProfileData = (state: RootState) => state.profile?.data
