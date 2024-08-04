'use client'

import { useParams } from 'next/navigation'

const Siembra = () => {

    const { siembra } = useParams()

    return (
        <div>{ siembra }</div>
    )
}

export default Siembra