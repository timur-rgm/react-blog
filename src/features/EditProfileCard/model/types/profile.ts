import { Profile } from 'entities/Profile'

export interface ProfileState {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validationErrors?: string[]
}
