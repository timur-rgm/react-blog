import { useEffect, Suspense,  } from 'react'
import { Outlet } from 'react-router-dom'

import { useAppDispatch } from 'app/providers/StoreProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { PageLoader } from 'widgets/PageLoader'
import { initAuthData } from 'entities/User'

import styles from './MainLayout.module.scss'

export const MainLayout = () => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch])

    return (
        <>
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
        </>
    )
}
