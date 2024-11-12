function GalleryCard(Props) {
    return (
      <div className={`relative group cursor-pointer ${Props.isLarge ? 'md:row-span-2' : ''} hover:opacity-90 hover:shadow-lg`}>
        <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
        <img src={Props.img} alt={Props.name} className="w-full h-full object-cover rounded-md" />
        <div className="absolute flex justify-between items-center z-10 left-0 right-0 bottom-0 p-4 text-white">
          <h3 className="font-semibold text-lg">{Props.name}</h3>
          <p>{Props.price}</p>
        </div>
      </div>
    );
  }
  
  export default GalleryCard;
  