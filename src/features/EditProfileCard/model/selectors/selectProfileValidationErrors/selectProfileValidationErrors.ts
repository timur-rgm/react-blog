import type { RootState } from 'app/providers/StoreProvider'

export const selectProfileValidationErrors = (state: RootState) => state.profile?.validationErrors
