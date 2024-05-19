import { screen } from '@testing-library/react'
import { userEvent } from '@storybook/test'

import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent'
import { Counter } from './Counter'

describe('Counter', () => {
    test('Test render', () => {
        renderComponent(<Counter />, { preloadedState: { counter: { value: 10 }}})
        expect(screen.getByTestId('title')).toHaveTextContent('10')
    })

    // test('Test increment', () => {
    //     renderComponent(<Counter />, { preloadedState: { counter: { value: 10 }}})
    //     userEvent.click(screen.getByTestId('inc-button'))
    //     expect(screen.getByTestId('inc-button')).toHaveTextContent('11')
    // })
    //
    // test('Test decrement', () => {
    //     renderComponent(<Counter />, { preloadedState: { counter: { value: 10 }}})
    //     userEvent.click(screen.getByTestId('dec-button'))
    //     expect(screen.getByTestId('dec-button')).toHaveTextContent('09')
    // })
})
