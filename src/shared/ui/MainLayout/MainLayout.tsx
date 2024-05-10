import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import cn from 'classnames'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'

import styles from './MainLayout.module.scss'

import { Modal } from 'shared/ui/Modal/Modal'

export const MainLayout = () => {
    const { theme } = useTheme()

    const [isOpen, setIsOpen] = useState(false)
    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <div className={cn('app', theme)}>
            <header>
                <Navbar />
            </header>
            <button onClick={handleToggle}>Открыть</button>

            <main className={styles.main}>
                <Sidebar />
                <Modal isOpen={isOpen} onClose={handleToggle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Modal>

                <div className={styles.content}>
                    <ErrorBoundary>
                        <Suspense fallback={<PageLoader />}>
                            <Outlet />
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </main>
        </div>
    )
}
