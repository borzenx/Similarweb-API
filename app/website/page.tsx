'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Website = () => {
    const searchParams = useSearchParams();
    const website = searchParams.get('q');

    return (
        <div>
            {website}
        </div>
    );
};

export default Website;

