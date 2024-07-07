import type { RootState } from 'app/providers/StoreProvider'

export const selectLoginIsError = (state: RootState) => state.login?.error || ''