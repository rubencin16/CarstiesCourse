import React from 'react'
import EmptyFilter from '@/app/components/EmptyFilter'

export default function SigIn({
  searchParams,
}: {
  searchParams: { callbackUrl: string }
}) {
  return (
    <EmptyFilter
      title={'You need to be logged in to do that'}
      subtitle={'Please click below to do that'}
      showLogin={true}
      callbackUrl={searchParams.callbackUrl}
    />
  )
}
