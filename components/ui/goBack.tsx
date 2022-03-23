import * as React from 'react';
import { useRouter } from "next/router"

export const GoBack =()=> {
    const router = useRouter()

    return(
        <React.Fragment>
            <button className="flex mt-2 h-6 w-30" onClick={() => router.back()}> 
                <span className="animate-ping absolute inline-flex h-6 w-24 rounded-full bg-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full bg-blue hover:bg-blue text-white px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>          
                    &nbsp;Back
                </span>
            </button>
        </React.Fragment>
    )
}