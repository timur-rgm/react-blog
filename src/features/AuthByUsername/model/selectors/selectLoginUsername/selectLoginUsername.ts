import type { RootState } from 'app/providers/StoreProvider'

export const selectLoginUsername = (state: RootState) => state.login?.username || ''