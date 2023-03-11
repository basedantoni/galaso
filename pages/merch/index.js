import Shirt from '../../components/Shirt';
import MerchLayout from '../../components/layouts/merchLayout';
import { motion } from 'framer-motion';

export default function Merch() {
  return (
    <MerchLayout>
      <Shirt />
    </MerchLayout>
  );
}