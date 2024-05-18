import type { RootState } from 'app/providers/StoreProvider/config/store'

export const selectValue = (state: RootState) => state.counter.value
