import Image from "next/image";
function Main1() {
  return (
    <div className="p-4 grid grid-flow-row-dense lg:grid-cols-3 gap-4">
      <div className="grid grid-flow-row-dense grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-2 col-span-2 lg:col-span-1">
        <div className="w-full cursor-pointer">
          <Image
            className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
            src="/promo1.jpg"
            layout="responsive"
            height={1080}
            width={1920}
            quality="75"
            alt="poster"
          />
        </div>
        <div className="w-full cursor-pointer">
          <Image
            className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
            src="/promo2.jpg"
            layout="responsive"
            height={1080}
            width={1920}
            quality="75"
            alt="poster"
          />
        </div>
      </div>
      <div className=" col-span-2">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game1.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game2.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            FINAL FANTASY VII REMAKE INTERGRADE Photo Contest Showcase
          </h3>
          <p className="tracking-wide hidden lg:flex">
            Enjoy this gallery of some of the best FINAL FANTASY VII REMAKE
            INTERGRADE screenshots from our fans. Our subject this week was Tifa
            Lockhart!
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game3.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide ">
            FINAL FANTASY VII REMAKE INTERGRADE: Sean Chiplock talks Nero
          </h3>
          <p className="tracking-wide hidden lg:flex">
            We spoke to voice actor Sean Chiplock about Nero the Sable, how he
            found the perfect amount of threat and why he’s intimately familiar
            with Cosmo Canyon.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game4.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            FINAL FANTASY VII REMAKE INTERGRADE: Sonon sounds off
          </h3>
          <p className="tracking-wide hidden lg:flex">
            Aleks Le, the actor who portrays Sonon in FF7R EPISODE INTERmission,
            explains why FINAL FANTASY is so close to his heart, and why you
            should never ask him for gameplay tips.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className=" col-span-2">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game5.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game6.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            Assembling Marvel’s Avengers: Black Panther
          </h3>
          <p className="tracking-wide hidden lg:flex">
            How did Crystal Dynamics bring T’Challa to life in Marvel’s
            Avengers? From finding a unique yet faithful take on the character
            to finding the perfect combat style, here’s the full story.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game7.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            Marvel’s Guardians of the Galaxy: Inside the new Lady Hellbender
            cutscene
          </h3>
          <p className="tracking-wide hidden lg:flex">
            Darryl Purdy, Cinematics and Animation Director for Marvel’s
            Guardians of the Galaxy shares some director’s commentary on the
            newly released Lady Hellbender cutscene!
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className=" col-span-2">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game8.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
      </div>
      <div className="grid grid-flow-row-dense gap-2 lg:grid-cols-2 col-span-2 lg:col-span-3">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game9.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game10.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game11.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <Image
          className="object-contain cursor-pointer"
          src="/game12.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
      </div>
      <div className=" col-span-2">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game13.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game14.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            NEO: The World Ends with FOOD
          </h3>
          <p className="tracking-wide hidden lg:flex">
            Reapers’ Game got you feeling hungry, but you’re not quite sure
            where to eat? Here are some of the many places you can dine in NEO:
            The World Ends with You.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game15.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            Don’t worry about missing stuff
          </h3>
          <p className="tracking-wide hidden lg:flex">
            NEO: The World Ends with You follows the Wicked Twisters across a
            set period of time. Once one challenge is completed, time will
            progress to the next day.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game16.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            The Records menu is an invaluable resource
          </h3>
          <p className="tracking-wide hidden lg:flex">
            The Records menu tracks your progress through the game, but it’s
            more useful than simply logging collectables.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 hover:shadow-xl">
        <Image
          className="object-contain cursor-pointer transition duration-300 ease-in transform sm:hover:scale-125 hover:opacity-80"
          src="/game17.jpg"
          layout="responsive"
          height={1080}
          width={1920}
          quality="75"
          alt="poster"
        />
        <div className="cursor-pointer">
          <h3 className="font-bold text-[14px] lg:text-[28px] tracking-wide">
            It’s not just what you know, it’s who you know… online
          </h3>
          <p className="tracking-wide hidden lg:flex">
            Shibuya is full of weird and wonderful characters, and as the game
            continues, you’ll build a sprawling network of contacts.
          </p>
          <div className="mt-4">
            <button className="text-red-600 text-sm lg:text-lg font-bold text-center rounded-md  cursor-pointer border-2 flex items-center p-1 lg:p-4 hover:border-gray-400">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
