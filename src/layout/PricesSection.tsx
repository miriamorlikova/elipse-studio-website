import { motion } from "framer-motion";
import { SelectedPageValueType } from "../App";
import H1Text from "../components/H1Text";
import PriceListItem from "../components/PriceListItem";

type PricesSectionProps = {
  setSelectedPage: (value: SelectedPageValueType) => void;
};

export default function PricesSection({ setSelectedPage }: PricesSectionProps) {
  return (
    <section
      id="prices"
      className="relative min-w-screen px-10 sm:px-20 md:px-24 xl:px-40"
    >
      <motion.div
        className="py-24 sm:py-32 lg:py-36"
        onViewportEnter={() => setSelectedPage(SelectedPageValueType.Prices)}
      >
        {/* HEADER */}
        <H1Text>Prices</H1Text>

        {/* PRICES LIST */}
        <PriceListItem
          heading="Small Tattoos"
          size="(<5cm)"
          subHeading="These are minimal designs, such as small symbols or simple lines. This covers the base setup fee, ink, and artist time."
          price="$50–$100"
        />
        <PriceListItem
          heading="Medium Tattoos"
          size="(6-40cm)"
          subHeading="A more detailed piece that takes 2-4 hours, like small portraits or intricate designs."
          price="$200–$500"
        />
        <PriceListItem
          heading="Large Tattoos "
          size="(Half/Full Sleeve)"
          subHeading="Larger, more detailed pieces that can take several sessions to complete."
          price="$1,000–$3,000+"
        />
        <PriceListItem
          heading="Cover-Up Tattoos"
          subHeading="Covering up old tattoos requires more time, ink, and artistic effort, that's why price is higher than the price of the original tattoo."
          price="$150–$200/hour"
        />
        <PriceListItem
          heading="Color Tattoos"
          subHeading="Some extra money for each used color."
          price="+$10–$30/color"
        />
        <PriceListItem
          heading="Portrait Tattoos"
          subHeading="Highly detailed work requiring a skilled artist, usually charged hourly."
          price="$200–$500+"
        />
        <PriceListItem
          heading="Finger Tattoos"
          subHeading="Popular for minimal designs like symbols, names, or rings. These tattoos are delicate but tend to fade faster."
          price="$50–$150"
        />
        <PriceListItem
          heading="Hand Tattoos"
          subHeading="Hand tattoos are quite visible, and often, artists take extra care to ensure precision, hence a higher rate."
          price="$200–$400"
        />
      </motion.div>
    </section>
  );
}
