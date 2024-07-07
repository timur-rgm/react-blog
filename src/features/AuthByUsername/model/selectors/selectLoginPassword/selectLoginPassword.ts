import type { RootState } from 'app/providers/StoreProvider'

export const selectLoginPassword = (state: RootState) => state.login?.password || ''