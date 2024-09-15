import { useAppSelector } from 'app/providers/StoreProvider'
import { ProfileCard } from 'entities/Profile'
import { selectProfileData, selectProfileIsLoading, selectProfileError } from '../../model/selectors'

export const EditableProfileCard = () => {
    const data = useAppSelector(selectProfileData)
    const isLoading = useAppSelector(selectProfileIsLoading)
    const error = useAppSelector(selectProfileError)

    return <ProfileCard data={data} error={error} isLoading={isLoading} />
}
