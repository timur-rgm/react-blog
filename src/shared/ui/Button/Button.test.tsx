import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'

describe('Button test', () => {
    test('with no props', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('with clear variant', () => {
        render(<Button variant="clear">Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
        screen.debug()
    })
})
