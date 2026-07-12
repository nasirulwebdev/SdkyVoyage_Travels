import { useState } from "react";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

const currencies = [
  { code: "BDT", symbol: "৳", name: "Bangladeshi Taka" },
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal" },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham" },
];

const CurrencyDropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

  return (
    <div className="dropdown dropdown-hover">
      <label
        tabIndex={0}
        className="
          btn
          btn-ghost
          btn-sm
          normal-case
          rounded-xl
          gap-2
          hover:bg-sky-50
          hover:text-sky-600
          transition-all
          duration-300
        "
      >
        <MdOutlineCurrencyExchange className="text-lg" />

        <span className="font-medium">
          {selectedCurrency.code}
        </span>

        <FaChevronDown className="text-xs" />
      </label>

      <ul
        tabIndex={0}
        className="
          dropdown-content
          z-[100]
          mt-3
          w-64
          rounded-2xl
          border
          border-gray-100
          bg-white
          shadow-2xl
          p-2
        "
      >
        {currencies.map((currency) => (
          <li key={currency.code}>
            <button
              onClick={() => setSelectedCurrency(currency)}
              className="
                w-full
                flex
                items-center
                justify-between
                px-4
                py-3
                rounded-xl
                hover:bg-sky-50
                transition
              "
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">
                  {currency.symbol}
                </span>

                <div className="text-left">
                  <p className="font-semibold">
                    {currency.code}
                  </p>

                  <p className="text-xs text-gray-500">
                    {currency.name}
                  </p>
                </div>
              </div>

              {selectedCurrency.code === currency.code && (
                <span className="text-sky-600 font-bold">
                  ✓
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CurrencyDropdown;