'use client'

import { useSectionInView } from '@/lib/hooks';
import React from 'react'

type AboutSpanProps = {
  id: 'Home'|"About";
  className: string;
  threshold?: number | undefined;
}

export default function AboutSpan({ id, className, threshold }:AboutSpanProps) {
  const { ref } = useSectionInView(id, threshold);
  return (
    <span id={id} ref={ref} className={className}></span>
  )
}
