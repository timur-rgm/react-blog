import { AsyncThunkAction, Dispatch } from '@reduxjs/toolkit'
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk'
import { RootState } from 'app/providers/StoreProvider'

type ActionCreator<Return, Arg> = (arg: Arg) => AsyncThunkAction<Return, Arg, AsyncThunkConfig>

export class TestAsyncThunk<Return, Arg> {
    dispatch: Dispatch
    getState: () => RootState
    actionCreator: ActionCreator<Return, Arg>

    constructor(actionCreator: ActionCreator<Return, Arg>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const result = await action(this.dispatch, this.getState, undefined)

        return result
    }
}
