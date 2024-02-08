'use client'
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';

const Website = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
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
            } catch (error) {
                console.log(error);
            }
        };

        if (website) {
            fetchData();
        }
    }, [website]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            {data ? (
                <div>
                    <h1>{data}</h1>
                    {/* Render other data fields as needed */}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
}
export default Website;