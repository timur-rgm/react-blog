import { useTranslation } from 'react-i18next'
// import { Counter } from 'entities/Counter'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <>
            <h1>{t('Главная страница')}</h1>
            {/*<Counter />*/}
        </>
    )
}

export default MainPage
