'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getUserData } from '@/lib/api/AuthApiClient';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

export default function AuthRoot() {
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {
        async function authorize() {
            try {
                const userData = await getUserData();
                setUser(userData);
            } catch (error) {
                setUser({});
            }
        }
        authorize();
    }, []);

    return null;
}
