import { useTranslation } from 'react-i18next'
import cn from 'classnames'

import { Button } from 'shared/ui/Button/Button'
import styles from './LanguageSwitcher.module.scss'

interface Props {
    className?: string
    isShort?: boolean
}

export const LanguageSwitcher = ({ className, isShort }: Props) => {
    const { t, i18n } = useTranslation()

    const handleSwitch = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button className={cn(styles.root, className)} onClick={handleSwitch} variant="clear-inverted">
            {t(isShort ? 'Язык сокр.' : 'Язык')}
        </Button>
    )
}
