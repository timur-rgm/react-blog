import type { FC, SVGProps } from 'react'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

import MainIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg'

interface SidebarItem {
    id: number
    title: string
    icon: FC<SVGProps<SVGSVGElement>>
    path: string
}

export const sidebarItems: SidebarItem[] = [
    { id: 1, title: 'Главная', path: RoutePath.main, icon: MainIcon },
    { id: 2, title: 'Контакты', path: RoutePath.about, icon: AboutIcon },
    { id: 3, title: 'Профиль', path: RoutePath.profile, icon: ProfileIcon }
]
