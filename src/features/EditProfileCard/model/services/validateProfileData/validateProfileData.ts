import type { Profile } from 'entities/Profile'

export const validateProfileData = (profile?: Profile) => {
    if (!profile) return

    const { username, first, lastname, age } = profile
    const errors: string[] = []

    if (!username) {
        errors.push('Username error')
    }

    if (!first) {
        errors.push('Firstname error')
    }

    if (!lastname) {
        errors.push('Lastname error')
    }

    if (!age || !Number.isInteger(age)) {
        errors.push('Age error')
    }

    return errors
}
