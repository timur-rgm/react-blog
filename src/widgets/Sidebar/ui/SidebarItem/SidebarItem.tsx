import type { FC, SVGProps } from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { AppLink } from 'shared/ui/AppLink/AppLink'
import styles from './SidebarItem.module.scss'

interface Props {
    title: string
    path: string
    icon: FC<SVGProps<SVGSVGElement>>
    isCollapsed: boolean
}

export const SidebarItem = ({ icon: Icon, isCollapsed, path, title }: Props) => {
    const { t } = useTranslation()

    return (
        <li>
            <AppLink className={cn(styles.menuLink, { [styles.collapsed]: isCollapsed })} to={path}>
                <Icon />
                <span>{t(title)}</span>
            </AppLink>
        </li>
    )
}
