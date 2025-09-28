// 'use client'

// import { useEffect } from 'react'
// import { useRouter } from 'next/navigation'

// export default function NotFound() {
//     const router = useRouter()

//     useEffect(() => {
//         router.replace('/oops-wrong-turn')
//     }, [router])

//     return null
// }

// app/[locale]/not-found.tsx
import { redirect } from 'next/navigation';

export default function NotFound() {
    redirect('/oops-wrong-turn');
}
