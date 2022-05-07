import React from "react";

function Refund() {
  return (
    <div>
      <div className="shipping flex flex-col align-middle justify-center items-center text-center   text-white mt-32">
        <div className="shipping__title p-10 text-lg font-bold">
          Returns and refunds
        </div>
        <div className="shipping__details text-left ">
          <div className="shipping__info flex pb-3">
            <p className="p-10 sm:w-1/2 text-center bg-gray-800/75 rounded-md ">
              All orders can be cancelled until they are shipped. If your order
              has been paid and you need to change or cancel it, you must
              contact us within 12 hours. Once the packaging and shipping
              process has started, it can no longer be cancelled. Refunds We
              offer a 100% money back guarantee on all products that are
              defective or damaged during shipping. Just let us know and we will
              provide a return address and a replacement or refund as preferred.
              If you are unsatisfied with your order – please contact our
              support and we will do our best to help you out! Customers will be
              responsible for paying return shipping costs.
            </p>
          </div>
          <div className="shipping__info flex pb-3">
            <h1 className="p-10 sm:w-1/2 text-center bg-gray-800/75 rounded-md">
              We do not issue the refund if:
            </h1>
            <p className="p-10 sm:w-1/2 text-center bg-gray-800/75 rounded-md ">
              your order does not arrive due to factors within your control
              (e.g. providing the wrong shipping address)
            </p>
          </div>
        </div>
        <h1 className="p-10 sm:w-1/2 text-center bg-gray-800/75 rounded-md">
          *You can submit refund requests within 15 days after the guaranteed
          period for delivery (45 days) has expired. You can do it by sending a
          message on Contact Us page.
        </h1>
      </div>
    </div>
  );
}

export default Refund;
