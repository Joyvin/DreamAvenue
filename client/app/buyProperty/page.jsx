"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { BedSingle , Bath} from "lucide-react";

const Img = ({
  className,
  src = "defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => (
  <img
    className={className}
    src={src}
    alt={alt}
    {...restProps}
    loading="lazy"
  />
);

const Text = ({
  children,
  className = "",
  size,
  as: Component = "p",
  ...restProps
}) => (
  <Component
    className={`text-left ${className} font-poppins ${size || ""}`}
    {...restProps}
  >
    {children}
  </Component>
);

function MyDialog({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={() => onClose(false)}>
      <Dialog.Panel className="absolute inset-1/2 transform -translate-x-1/2 h-[180px] w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <Dialog.Title
          as="h3"
          className="text-lg font-medium leading-6 text-gray-900"
        >
          Payment successful
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Your payment has been successfully submitted. We’ve sent you an
            email with all of the details of your order.
          </p>
        </div>

        <div className="mt-4">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            onClick={() => {
              setIsDialogOpen(false);
            }}
          >
            Got it, thanks!
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
}

const BuyPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <MyDialog isOpen={isDialogOpen} onClose={setIsDialogOpen} />
      <div className="bg-blue_gray-900 flex flex-col font-poppins items-center justify-start mx-auto pb-[38px] sm:pr-5 pr-[38px] w-full">
        <div className="flex flex-col justify-start max-w-[1389px] mx-auto md:px-5 w-full">
          <div className="md:h-[506px] h-[539px] md:ml-[0] ml-[63px] mt-[29px] relative w-[52%] md:w-full">
            <div className="flex flex-col m-auto w-full">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col mx-auto w-full">
                  <button
                    onClick={() => {
                      setIsDialogOpen(true);
                    }}
                  >
                    <Img
                      className="h-[477px] m-auto object-cover rounded-[20px] w-60%"
                      src="./h22.png"
                      alt="h22"
                    />
                  </button>
                  <div className="bg-blue_gray-100 h-[34px] mt-[-16px] mx-auto w-full z-[1]"></div>
                  <div className="bg-blue_gray-100 h-[62px] mt-[-18px] mx-auto rounded-[20px] w-full z-[1]"></div>
                </div>
                <div>
                  <Text
                    size="txtJacquesFrancoisRegular36"
                    className="text-4xl text-white"
                  >
                    Taj Palace, Pais Street, Nepensea
                  </Text>
                  <Text
                    size="txtJacquesFrancoisRegular48"
                    className="text-3xl text-white"
                  >
                    Contact Seller...
                  </Text>
                  <Text
                      size="txtJacquesFrancoisRegular48"
                      className="text-2xl text-white"
                    >
                      Type : Single Room Residence
                    </Text>
                  <Text
                      size="txtJacquesFrancoisRegular48"
                      className="text-2xl text-white"
                    >
                      Interiors
                    </Text>
                  <div className="flex gap-4 ">
                    <Text
                      size="txtJacquesFrancoisRegular48"
                      className="text-2xl text-white"
                    >
                      Bedrooms
                    </Text>
                    <BedSingle className="text-white" size={30}/>
                    <Text
                      size="txtJacquesFrancoisRegular48"
                      className="text-2xl text-white"
                    >
                      3
                    </Text>
                  </div>
                  <div className="flex gap-4 ">
                    <Text
                      size="txtJacquesFrancoisRegular48"
                      className="text-2xl text-white"
                    >
                      Bathrooms
                    </Text>
                    <Bath className="text-white" size={30}/>
                    <Text
                      size="txtJacquesFrancoisRegular48"
                      className="text-2xl text-white"
                    >
                      3
                    </Text>
                  </div>
                  <Text
                    size="txtJacquesFrancoisRegular48"
                    className="text-xl text-white"
                  >
                    Location
                  </Text>
                  <Text
                    size="txtJacquesFrancoisRegular48"
                    className="text-xl text-white"
                  >
                    Price
                  </Text>
                </div>
              </div>
            </div>

            <div className="flex md:flex-col flex-row font-javanesetext md:gap-10 items-center justify-between md:ml-[0] ml-[19px] mt-14 w-[99%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-[59px] items-center justify-between w-[34%] md:w-full">
                <div className="h-[65px] relative w-[77%] sm:w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyPage;
