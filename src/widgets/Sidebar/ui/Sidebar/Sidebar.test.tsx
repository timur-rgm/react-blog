import { screen, fireEvent } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe('Sidebar', () => {
    test('Test render', () => {
        renderComponent(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('Test toggle', () => {
        renderComponent(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-button')
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
