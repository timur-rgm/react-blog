import { Component, ReactNode, ErrorInfo } from 'react'
import { PageError } from 'widgets/PageError'

interface Props {
    children: ReactNode
}

interface State {
    hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { error, hasError: true }
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error, info.componentStack)
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return <PageError />
        }

        return this.props.children
    }
}
