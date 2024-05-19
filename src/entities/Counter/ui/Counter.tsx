import { useAppSelector, useAppDispatch } from 'app/providers/StoreProvider'
import { Button } from 'shared/ui/Button/Button'

import { increment, decrement } from '../model/slice/counterSlice'
import { selectValue } from '../model/selectors/selectValue/selectValue'

export const Counter = () => {
    const value = useAppSelector(selectValue)
    const dispatch = useAppDispatch()

    const handleInc = () => {
        dispatch(increment())
    }

    const handleDec = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid="title">{value}</h1>
            <Button data-testid="inc-button" onClick={handleInc}>
                Inc
            </Button>
            <Button data-testid="dec-button" onClick={handleDec}>
                Dec
            </Button>
        </div>
    )
}
