import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section
      className="relative bg-[url('public/image/bag.png)] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/bag.png')" }}
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-80 h-full"
      ></div>

      <div
        className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div className="max-w-3xl text-start ltr:sm:text-left rtl:sm:text-right">
          <p className="text-white p-2 bg-blue-900 rounded-md font-bold w-fit mb-5">Kami telah menjangkau seluruh penjuru Indonesia</p>
          <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
              Wujudkan Aplikasi Terbaik.

            <strong className="block font-extrabold text-[#0096C7]"> Bersama Kami!</strong>
          </h1>

          <p className="mt-4 max-w-4xl text-white sm:text-xl/relaxed text-sm">
          SevenTech Technology adalah suatu Software House yang bergerak dalam pengembangan perangkat lunak dan konsultasi IT, yang terletak di Bondowoso, Jawa Timur. Kami akan memberikan solusi dan pelayanan yang terbaik demi kenyamanan Customer. 
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <dl
              className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
            >
              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-[#0096C7]">Project Selesai</dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">10+</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-[#0096C7]">Kabupaten/Kota</dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">24+</dd>
              </div>

              <div className="flex flex-col px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-[#0096C7]">Customer Kami</dt>

                <dd className="text-4xl font-extrabold text-white md:text-5xl">86+</dd>
              </div>

            </dl>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
