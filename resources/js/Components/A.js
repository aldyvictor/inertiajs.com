import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

export default function A(props) {
  return props.href.startsWith('http') || props.href.startsWith('#') ? (
    <a {...props} className="text-blue-700 hover:text-orange-700 font-medium underline" />
  ) : (
    <InertiaLink {...props} className="text-blue-700 hover:text-orange-700 font-medium underline" />
  )
}