'use client';

import { useEffect } from 'react';

import { getUserData } from '@/lib/api/AuthApiClient';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

export default function AuthProvider() {
    const setUser = useAuthStore((state) => state.setUser);

    useEffect(() => {
        async function authorize() {
            const userData = await getUserData();

            setUser(userData);
        }

        try {
            authorize();
        } catch {
            setUser({});
        }
    }, []);

    return null;
}
