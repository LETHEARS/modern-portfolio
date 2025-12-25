import { useEffect, useState } from 'react';
import { FaClock, FaEnvelope, FaCloud, FaMapMarkerAlt, FaUser, FaBirthdayCake, FaHiking, FaPalette, FaYoutube, FaFlag } from 'react-icons/fa';
import Image from 'next/image';

function AntalyaTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const AntalyaTime = new Date(time.toLocaleString('en-US', { timeZone: 'Europe/Antalya' }));
  const formattedTime = AntalyaTime.toLocaleTimeString();
  const formattedDate = AntalyaTime.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <p className="flex items-center">
      <FaClock className="mr-2" />
      Time in Antalya: {formattedDate}・{formattedTime}
    </p>
  );
}

export default function About() {

  return (
    <div className="container mx-auto bg-zinc-900/30 w-11/12 sm:w-9/12 md:w-7/12 rounded-md flex flex-col-reverse my-16 py-10 px-8 justify-between md:flex-row md:items-center">
      <div className="md:w-8/12">
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold" id="about">Benim Hakkımda</h1>
          <p>
            Merhaba Ben Kaptan Kral Selamünaleyküm Nider Nişlersiniz Sağolun Bende iyiyim Derslerinize Çalışın olurmu hadi iyi günler.
          </p>
          <br />
          <AntalyaTime />
          <p className="flex items-center">
            <FaEnvelope className="mr-2" />
            Mail :
            <span className="padding-left-5 underline font-semibold hover:opacity-75 cursor-pointer">
              <a href="mailto:kaptankral@gmail.com">kaptankral@gmail.com</a>
            </span>
          </p>
        </div>
        <div className="flex flex-col">
          <div className="font-medium rounded-md flex text-zinc-300 items-center mt-4">
          </div>
        </div>
      </div>
    </div>
  );
}
