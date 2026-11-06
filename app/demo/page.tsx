import type { Metadata } from 'next';
import OriginalSite from '@/components/original-site';
export const metadata:Metadata={title:"عرض تجريبي"};
export default function Page(){return <OriginalSite view="demo" />;}
