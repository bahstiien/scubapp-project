'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import {ImAirplane} from 'react-icons/im';
import {GiEcology, GiScubaTanks} from 'react-icons/gi';
import {TbDeviceWatch} from 'react-icons/tb';
import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categoriesBlog = [
  {
    label: 'Voyage',
    icon: ImAirplane,
    description: 'Travel around the world',
  },
  {
    label: 'Ecology',
    icon: GiEcology,
    description: 'Save our planet',
  },
  {
    label: 'Materiel',
    icon: GiScubaTanks,
    description: 'Discover the new materiel',
  },
  {
    label: 'Device',
    icon: TbDeviceWatch,
    description: 'Discover the new device',
  },

 
 
]

const CategoriesBlog = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categoriesBlog.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default CategoriesBlog;