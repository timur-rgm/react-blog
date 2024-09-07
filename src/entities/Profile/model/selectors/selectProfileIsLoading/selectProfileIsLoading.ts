import type { RootState } from 'app/providers/StoreProvider'

export const selectProfileIsLoading = (state: RootState) => state.profile?.isLoading
