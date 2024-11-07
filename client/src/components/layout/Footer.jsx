import { Button } from '../ui/button';
import { Input } from '../ui/input';

const Footer = () => {
  const companyLinks = [
    { text: 'About Us', href: '#' },
    { text: 'Careers', href: '#' },
    { text: 'Blog', href: '#' },
    { text: 'Price', href: '#' },
  ];

  const destinationLinks = [
    { text: 'Maldives', href: '#' },
    { text: 'Los Angeles', href: '#' },
    { text: 'Las Vegas', href: '#' },
    { text: 'Toronto', href: '#' },
  ];

  return (
    <footer className="bg-white mt-28 text-black py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-dark_blue"><span className='text-orange'>T</span>ravel</h2>
            <p className="mb-4 text-sm text-slate-400">
              Travel is a premium travel agency website template that is perfect for a travel agency website.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Company</h2>
            <ul>
              {companyLinks.map(link => (
                <li key={link.text} className="mb-2">
                  <a href={link.href} className="hover:text-orange">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Destinations</h2>
            <ul>
              {destinationLinks.map(link => (
                <li key={link.text} className="mb-2">
                  <a href={link.href} className="hover:text-orange">{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Join Our Newsletter</h2>
            <div className="flex relative">
              <Input placeholder="Enter your email" className=" flex-grow w-full bg-input_bg" />
              <Button className="bg-orange hover:opacity-90 hover:bg-orange absolute right-0">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-slate-400">
              *Will send you weekly updates for your better tour packages.
            </p>
          </div>
        </div>
      </div>
      <div className="w-7/12 h-1 mx-auto bg-slate-100 my-5" />
      <div className=" mt-10 pt-5 text-center">
        <p>© {new Date().getFullYear()} Star Union. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
