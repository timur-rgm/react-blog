import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";
import cn from 'classnames'

import { useTheme } from "../theme/useTheme";

export const MainLayout = () => {
    const { theme, onThemeToggle } = useTheme()

    return (
        <div className={cn('app', theme)}>
            <header>
                <nav>
                    <ul style={{ display: 'flex', columnGap: '10px'}}>
                        <Link to={`/`}>Главная</Link>
                        <Link to={`/about`}>Контакты</Link>
                    </ul>
                </nav>
            </header>

            <main>
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </main>

            <button onClick={onThemeToggle}>
                Toggle theme
            </button>
        </div>
    )
}
