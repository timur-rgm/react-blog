import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import cn from 'classnames'

import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { useTheme } from 'app/providers/ThemeProvider'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'

import styles from './MainLayout.module.scss'

export const MainLayout = () => {
    const { theme } = useTheme()

    return (
        <div className={cn('app', theme)}>
            <header>
                <Navbar />
            </header>

            <main className={styles.main}>
                <Sidebar />

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
