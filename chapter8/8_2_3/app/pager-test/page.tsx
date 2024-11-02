// app/pager-test/page.tsx
import { redirect } from 'next/navigation';

export default function PagerTestRedirect() {
  redirect('/pager-test/1');
  return null;
}
