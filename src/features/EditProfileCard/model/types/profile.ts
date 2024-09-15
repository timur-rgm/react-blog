import { Profile } from 'entities/Profile'

export interface ProfileState {
    data?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
}
