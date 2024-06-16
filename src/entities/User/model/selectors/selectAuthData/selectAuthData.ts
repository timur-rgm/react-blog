import type { RootState } from 'app/providers/StoreProvider'

export const selectAuthData = (state: RootState) => state.user.authData
