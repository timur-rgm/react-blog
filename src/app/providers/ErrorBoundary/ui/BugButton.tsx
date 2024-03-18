import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const BugButton = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const handleClick = () => {
        setError((prev) => !prev)
    }

    return (
        <button onClick={handleClick} type="button">
            {t('Throw error')}
        </button>
    )
}
