'use client'
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Website = () => {
    const [data, setData] = useState(null);
    const searchParams = useSearchParams();
    const website = searchParams.get('q');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://data.similarweb.com/api/v1/data?domain=${website}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            }
            catch{
                console.log('erorr');
            }
        };

        if (website) {
            fetchData();
        }
    }, [website]);


    return (
        <div>
            gf
        </div>
    );
};

export default Website;
