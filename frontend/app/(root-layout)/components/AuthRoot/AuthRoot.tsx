'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';

import { getUserData, refreshAccessToken } from '@/lib/api/AuthApiClient';

import { useAuthStore } from '@/store/AuthStore';

export default function AuthRoot() {
    const setUser = useAuthStore((state) => state.setUser);

    const { data: userData, isError: isUserError } = useQuery({
        queryKey: ['auth'],
        queryFn: getUserData,
        retry: false,
        refetchOnWindowFocus: false,
        refetchInterval: 20 * 60 * 1000,
    });

    const { isError: isRefreshError } = useQuery({
        queryKey: ['refresh'],
        queryFn: refreshAccessToken,
        retry: false,
        refetchOnWindowFocus: true,
        refetchInterval: 11 * 60 * 1000,
    });

    useEffect(() => {
        if (userData) {
            setUser(userData);
        } else if (isUserError) {
            setUser({});
        }
    }, [userData, isUserError]);

    return null;
}
