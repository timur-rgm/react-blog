import type { RootState } from 'app/providers/StoreProvider'

export const selectValue = (state: RootState) => state.counter.value
