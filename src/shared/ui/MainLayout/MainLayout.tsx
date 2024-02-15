import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import cn from "classnames";

import { useTheme } from "app/providers/ThemeProvider";
import { Navbar } from "widgets/Navbar";

export const MainLayout = () => {
  const { theme, onThemeToggle } = useTheme();

  return (
    <div className={cn("app", theme)}>
      <header>
        <Navbar />
      </header>

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

      <button onClick={onThemeToggle}>Toggle theme</button>
    </div>
  );
};
