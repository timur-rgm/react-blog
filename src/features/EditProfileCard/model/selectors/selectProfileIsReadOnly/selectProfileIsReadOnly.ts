import type { RootState } from 'app/providers/StoreProvider'

export const selectProfileIsReadOnly = (state: RootState) => state.profile?.readonly