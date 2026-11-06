import type { Metadata } from 'next';
import OriginalSite from '@/components/original-site';
export const metadata:Metadata={title:"تجربة كل طرف"};
export default function Page(){return <OriginalSite view="experiences" />;}
