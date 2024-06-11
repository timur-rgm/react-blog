import { useTranslation } from 'react-i18next'
import cn from 'classnames'
import styles from './NotFoundPage.module.scss'

interface Props {
    className?: string
}

const NotFoundPage = ({ className }: Props) => {
    const { t } = useTranslation()

    return <div className={cn(styles.root, className)}>{t('Страница не найдена')}</div>
}

export default NotFoundPage
