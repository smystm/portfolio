'use client';
import { useScrollSpy } from './sectracking';

export function ScrollSpyManager({ ids }: { ids: string[] }) {
  useScrollSpy(ids);
  return null;
}
