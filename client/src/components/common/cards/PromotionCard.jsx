export default function PromotionCard(Props) {
  return (
    <div className="relative lg:w-[20%] lg:h-auto max-[500px]:w-[100%] xl:w-[18%] xl:h-auto md:w-[32%] rounded-lg overflow-hidden cursor-pointer shadow-lg flex items-center justify-center">
      <img src={Props.image} alt="Promotion" className="w-full h-full object-cover" />
      <div className="absolute top-4 right-4 bg-orange text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-base sm:text-lg md:text-sm">
        ${Props.price}
      </div>
    </div>
  );
}
