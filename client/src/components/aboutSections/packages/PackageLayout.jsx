import { useState } from 'react'
import PackageNavbar from '../../common/PackageNavbar'
import PackageCard from './PackageCard'
import TripForm from '../../forms/TripForm'
import Plane from '../../../assets/PackageDetails/plane.png'
import Icon1 from '../../../assets/Packages/Icon0.png'
import Icon2 from '../../../assets/Packages/Icon2.png'
import Icon3 from '../../../assets/Packages/Icon3.png'  
import Icon4 from '../../../assets/Packages/Icon4.png'

const dummyPackages = [
  {
    image: 'https://s3-alpha-sig.figma.com/img/19f1/ae4d/31244c950ff7e55191281f458c18611a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hB2IGMureVtmRwHXQGJ2NjKiTchRWVgN5GF94lgP3QczO1GRR0MF4IqiCqd6nUVm-jCs09j4Af8u2Z2B0886tL31~sj3z-Nq3TgYTxKeA3sogZrPeNXZew7LWKEihKTfOqt6PN-W81Uk8AQ5uhDiPnc588bMtxY2qiHJhWQQoAH6foAX52YMyJcxL3~0ZfYF5OpMixVJRpba1I-VJAfB4yY2JdJDC6J65TPwzTEL0fp5P1hODO0ZENP83A7Ya~BEJmxGAOww-pVSjv2HzuuFBFew4iAUCkkmMOUJDJ2M1MbKbrHdBrbwPLGzZ2kcRZ0ezTAFHo6fqjp8IShJB588Lw__',
    date: '12, September 2022',
    people: '120+',
    title: 'Switzerland',
    description: 'Experience the serene beauty of the seaside.',
    price: 1100,
    rating: '4.5',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/6d42/1feb/d53d0cdd0c3e1963055bd1d482d8ec30?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oHeU7V3JfC4RJFYLh3DQbqgDdjH1Qm6UD1ZXSMg2bv8dHCBc5WDHrsMCz671Z0PVmzMaDyyprILbooe8YT1RNKIfeyxjIBZjp9HPZHaHTvb5O~PFjHvACkL2CHYM5TptjdjbYfdzAnFaHhdGgvwlz1f6K3TckkbPpCouuV6v7OBhJHomIboOqaS3DtN57EtQZEu0pkh-79aZOJyvI95YsjCfWHzvBJVT1rNI6NtlUAPBml2kkAITJWFbVLYXtZ4LiKBqkRnI9txBECNnFlK8uPg2b9iirgm2vk5afj9~z-HeFTdzHUrm5jgVu5OuWCNuhTqsYK~dH9VOn-sgEicojw__',
    date: '15, October 2022',
    people: '80+',
    title: 'Berlin',
    description: 'Find peace and adventure in the mountains.',
    price: 2000,
    rating: '4.8',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/38a4/0309/d84450448dec0a158b60efb905718d98?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H1DGalfm~7mDZUdKqvxGZOoRARIeO9hb6H-c3Pb6xfcBMesn5RlJF8JjCO8eil8GDgJ45AuCODHza~QEVY6ygPo9xLRGzAulHjlUC26HqjgrH4Y~VRTtqWTeKgW7~tMrXDjfpuSlfbyEZjvtjln2~m7RjV4ZZFNCtvlSh5ppfzuO9NC5b0AjPq3W7iuFzUyMZ5-L-ZRsAdW0Ps1LDnP7y52l7vSSnt2vJNT5BfR5kWyR8Ws1Q1AWODrrFf7HYQJnzGkXqDvaOIAMmRLnDDuGVoA9BVsaRoGl9KqlNboVc73mJ4DVoMRdSYP~FfFmbmNKOUNsZG83thpGogST9pc9bg__',
    date: '01, December 2022',
    people: '50+',
    title: 'Maldives',
    description: 'Explore the bustling life of the big city.',
    price: 12000,
    rating: '4.3',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/52aa/0515/a05880e74bcdbe82747783b174c1109b?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPB0Fbp5Dz5q5dWafyTeQ7QrIsqUHe8-YavHT48foLZq8eR-HA-Uc~mj47FRZjpODQttGHhzDsi7tm4GyeYISPagNzlkYTDiW83FfsMe-6JgZ7Sx8xaM2IF3KzvBbXxPqTdVGhxErmd0JSxii6o2hihw0viokrX5qn2qHSIN8kemdNLdCRN16-zq-Ph1foRwGHvmdixDDaIXi4173u1OfW0iRkpuftxirH-6V1CVU9Fs8QdP7gHU10DtRfG8SikOCmZM18iDh9Ey4yCX1eZ1deGVKCMJ1mJCOTvniyHhVcMaa7jtIKAU0HposVFTlxnwBNYF-niQH5OICF4rQBA~fw__',
    date: '22, November 2022',
    people: '30+',
    title: 'Toronto',
    description: 'Discover the thrill of desert adventures.',
    price: 9000,
    rating: '4.9',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/7b3e/3547/b432a6e03b0fc38bdda43b3d07172e91?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pXLrtHzHYMfOlKfURwskv54oE1rhRc2aFFrzM3mqBRaqT6Phl6kVh03-2GIFAOKNg6KPVJFebbb2j6IkF7M24ZEQxEuOw7I8ayPWZpv0t7PKNEkGOlZT7jXMQjK2U019~VtryAHC3KVdOtTT0HZiSsDKbGQLFdRK8nDU~sDvVNYTTWlNperTR3FQIl6Jn8xIl1uHfded0szY7Aid1SDFVO0wzscpTpV3IZzfMzZ94WmeUgWhQywNgoMswK4hbomWWOeetb7E6uKQ1eM4xbRus10UJ058XaNGQB68NuQgyaWdZnuwXONKkIFqQK1Z~6vy9jfk95kIBKIvN~ZTKHy27Q__',
    date: '03, January 2023',
    people: '100+',
    title: 'Baku',
    description: 'Dive into the wild with this exciting journey.',
    price: 1000,
    rating: '4.7',
  },
  {
    image: 'https://s3-alpha-sig.figma.com/img/c42e/af38/fdafab30030fa382e89c5aeaf77a495e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a96uYl13gFrxLq3Quj7AysZb~KcMz8cy1L1DBmq4C4VThJ~ffI22S6-qpBAFjmH9F50Rqb2iH6gwo6sAJ1kPpdy1BaBve3anlO3EuTvGmtumsvRqQLgfIzZe~o~6cxbm6bvHicQqAIbTeSg7mNibXDqxHHBgmLpr08nljepo9HyMeQTLGlBByUOOtCZO0Z9gz2XqOvFZOlQ-lIel4PL3~eVT~XDmoEPLccR3fXSNuuULsEdWvVzO43h~BenWFt49wW26BPzXVSYSZgvBSiMjvl0VtOK7x0xVwoSJB3uKPG83h6hHpxED7iUYrcnw4KD4uc1HeqnaTuk1YB-aT0cRbg__',
    date: '18, March 2023',
    people: '60+',
    title: 'Chinese',
    description: 'Immerse yourself in rich historical landmarks.',
    price: 1200,
    rating: '4.6',
  },
]

function PackageLayout() {
  const [activeTab, setActiveTab] = useState('date')
  const [sorted, setSorted] = useState(dummyPackages);
  const tabsConfig = [
    { key: 'date', label: 'Date', icon: Icon1 },
    { key: 'priceLow', label: 'Price Low to High', icon: Icon2 },
    { key: 'priceHigh', label: 'Price High to Low', icon: Icon3 },
    { key: 'name', label: 'Name', icon: Icon4 },
  ]
  const sortPackages = (key) => {
    let Data = [...dummyPackages];

    if (key === "priceLow") {
      Data.sort((a, b) => a.price - b.price);
    } else if (key === "priceHigh") {
      Data.sort((a, b) => b.price - a.price);
    } else if (key === "name") {
      Data.sort((a, b) => a.title.localeCompare(b.title)); 
    } else {
      Data = [...dummyPackages];
    }

    setSorted(Data);
  };
  const handleTabChange = (key) => {
    setActiveTab(key);
    sortPackages(key);
  };

  return (
    <div className="h-full relative -top-16 left-1/2 transform -translate-x-1/2 w-full max-w-7xl bg-white shadow-lg z-40">
      <PackageNavbar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        tabsConfig={tabsConfig}
      />

      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="col-span-12 sm:col-span-7 grid gap-6 sm:grid-cols-2">
        {sorted.map((pkg, index) => (
            <PackageCard
              key={index}
              id={index}
              image={pkg.image}
              date={pkg.date}
              people={pkg.people}
              title={pkg.title}
              description={pkg.description}
              price={`$${pkg.price}`}
              rating={pkg.rating}
            />
          ))}
        </div>

        <div className="col-span-12 sm:col-span-12 md:col-span-5 flex flex-col gap-6">
          <div>
            <TripForm data={dummyPackages} />
          </div>

          <div className="flex justify-center items-center mt-44">
            <img
              src={Plane}
              alt="plane"
              className="w-full max-w-lg object-cove"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackageLayout
