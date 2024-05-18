import { useAppSelector, useAppDispatch } from 'app/providers/StoreProvider'
import { Button } from 'shared/ui/Button/Button'

import { increment, decrement } from '../model/slice/counterSlice'
import { selectValue } from '../model/selectors/selectValue'

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
            <h1>{value}</h1>
            <Button onClick={handleInc}>Inc</Button>
            <Button onClick={handleDec}>Dec</Button>
        </div>
    )
}
