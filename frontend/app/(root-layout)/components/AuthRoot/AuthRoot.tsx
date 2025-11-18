'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getUserData } from '@/lib/api/AuthApiClient';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

export default function AuthRoot() {
    const setUser = useAuthStore((state) => state.setUser);

    const { data: userData, isError } = useQuery({
        queryKey: ['auth'],
        queryFn: getUserData,
        retry: false,
        refetchOnWindowFocus: true,
        refetchInterval: 12 * 60 * 1000,
    });

    useEffect(() => {
        if (userData) {
            setUser(userData);
        } else if (isError) {
            setUser({});
        }
    }, [userData, isError]);

    return null;
}
