'use client';

import type { ReactNode } from 'react';

import { useAuthStore } from '@/store/AuthStore/useAuthStore';

import type { SafeUser } from '@none/shared';

interface AuthProviderProps {
    user: SafeUser | null;
    children: ReactNode;
}
export default function AuthProvider({ user, children }: AuthProviderProps) {
    const setUser = useAuthStore((state) => state.setUser);

    setUser(user || {});

    return <>{children}</>;
}
