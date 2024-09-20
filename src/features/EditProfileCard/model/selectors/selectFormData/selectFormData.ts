import type { RootState } from 'app/providers/StoreProvider'

export const selectFormData = (state: RootState) => state.profile?.form
