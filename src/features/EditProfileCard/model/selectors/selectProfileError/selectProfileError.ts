import type { RootState } from 'app/providers/StoreProvider'

export const selectProfileError = (state: RootState) => state.profile?.error
