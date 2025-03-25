'use client'

import React from 'react'
import { Pagination } from 'flowbite-react'

type props = {
  currentPage: number
  pageCount: number
  pageChanged: (e: number) => void
}

export default function AppPagination({
  currentPage,
  pageCount,
  pageChanged,
}: props) {
  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={(e) => pageChanged(e)}
      totalPages={pageCount}
      layout="pagination"
      showIcons={true}
      className="text-blue-500 mb-5"
    />
  )
}
