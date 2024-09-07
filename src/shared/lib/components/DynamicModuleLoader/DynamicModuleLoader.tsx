import { useEffect, ReactNode } from 'react'

import { useStore } from 'react-redux'
import type { Reducer } from '@reduxjs/toolkit'

import { useAppDispatch, StateKey } from 'app/providers/StoreProvider'

export type ReducersList = { [key in StateKey]?: Reducer }
type ReducerEntry = [string, Reducer]

interface Props {
    children: ReactNode
    reducers: ReducersList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = ({ children, reducers, removeAfterUnmount = true }: Props) => {
    const dispatch = useAppDispatch()
    const store = useStore()

    useEffect(() => {
        const reducersEntries = Object.entries(reducers)

        reducersEntries.forEach(([key, reducer]: ReducerEntry) => {
            // @ts-expect-error eslint-disable-line
            store.reducerManager.add(key, reducer)
            dispatch({ type: `@INIT ${key} reducer` })
        })

        return () => {
            if (removeAfterUnmount) {
                reducersEntries.forEach(([key]: ReducerEntry) => {
                    // @ts-expect-error eslint-disable-line
                    store.reducerManager.remove(key)
                    dispatch({ type: `@DESTROY ${key} reducer` })
                })
            }
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return children
}
