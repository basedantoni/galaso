import Shirt from '../../components/Shirt';
import BaseLayout from '../../components/layouts/baseLayout';
import MerchLayout from '../../components/layouts/merchLayout';
import { motion } from 'framer-motion';

export default function Merch() {
  return (
    <BaseLayout>
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className='mt-36 sm:mt-60 mb-8 text-xl md:text-4xl lg:text-6xl'>MERCH IS SOLD OUT</h1>
        <h2 className='text-base md:text-2xl'>New drop coming soon</h2>
      </div>
    </BaseLayout>
  );
}