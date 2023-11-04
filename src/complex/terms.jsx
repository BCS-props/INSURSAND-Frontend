import { GiConfirmed } from "react-icons/gi";

const Terms = () => {
  return (
    <div className="">
      <div className="mt-8 bg-white rounded-xl shadow-2xl h-full">
        <div className=" bg-white rounded-xl shadow-2xl h-full">
          <div className="p-6 text-2xl flex items-center gap-2">
            <div>
              <GiConfirmed />
            </div>
            Terms and conditions
          </div>
          <div className="p-6 text-sm">
            <div className="text-xl mb-2">1. Coverage Options</div>
            &nbsp; &nbsp;1.1. You can choose between two coverage options: 30
            days and 365 days. The coverage period starts from the date of
            purchase.
            <br /> &nbsp; &nbsp;1.2. Please note that the fee rates may vary
            depending on the chosen duration.
            <br /> &nbsp; &nbsp;1.3. The coverage amount will be calculated
            differently based on the chosen coverage amount and duration.
            <div className="text-xl mb-2 mt-2">2. Coverage Eligibility</div>
            &nbsp; &nbsp;2.1. The coverage is available for holders of the
            specified coin (to be determined).
            <br /> &nbsp; &nbsp;2.2. You must hold the specified coin at the
            time of purchase to be eligible for coverage.
            <br /> <div className="text-xl mb-2 mt-2">3. Payment</div> &nbsp;
            &nbsp;3.1. The payment currency for the coverage is USDT.
            <br /> &nbsp; &nbsp;3.2. The coverage amount must be paid in full at
            the time of purchase.
            <br /> <div className="text-xl mb-2 mt-2">4. Voting Rights</div>
            &nbsp; &nbsp;4.1. By purchasing coverage, you will obtain voting
            rights based on the final price of the specified coin.
            <br /> &nbsp; &nbsp;4.2. Voting rights will be allocated
            proportionally to the coverage amount.
            <br /> <div className="text-xl mb-2 mt-2">5. NFT Issuance</div>{" "}
            &nbsp; &nbsp;5.1. Upon purchasing coverage, you will receive a
            unique non-fungible token (NFT) as proof of coverage.
            <br /> &nbsp; &nbsp;5.2. The NFT will be issued to the wallet
            address used for the purchase.
            <br /> <div className="text-xl mb-2 mt-2">6. Claim Process</div>
            &nbsp; &nbsp;6.1. In the event of a valid claim, you must follow the
            specified claim process provided separately.
            <br /> &nbsp; &nbsp;6.2. Claims will be evaluated based on the terms
            and conditions outlined in the claim process.
            <br />
            <div className="text-xl mb-2 mt-2">7. Market Fluctuations</div>
            &nbsp; &nbsp;7.1. Please be aware that the final price of the
            specified coin may vary due to market fluctuations.
            <br /> &nbsp; &nbsp;7.2. INSURSAND does not guarantee any specific
            outcome or returns from the coverage.
            <br /> <div className="text-xl mb-2 mt-2">8. Disclaimer</div> &nbsp;
            &nbsp;8.1. INSURSAND reserves the right to modify or update these
            terms and conditions at any time.
            <br /> &nbsp; &nbsp;8.2. By purchasing coverage, you agree to comply
            with these terms and conditions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
