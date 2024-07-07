import type { RootState } from 'app/providers/StoreProvider'

export const selectLoginIsLoading = (state: RootState) => state.login?.isLoading || false