'use client'
import { useSearchParams } from 'next/navigation';
import React from 'react';

const Test = () => {
    const searchParams = useSearchParams();
    const website = searchParams.get('q');

    return (
        <div>
            {website}
        </div>
    );
};

export default Test;

