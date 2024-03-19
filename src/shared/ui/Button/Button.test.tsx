import { render, screen } from '@testing-library/react'
import { Button } from 'shared/ui/Button/Button'

describe('Button test', () => {
    test('with variant only', () => {
        render(<Button variant="clear">Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })
})
