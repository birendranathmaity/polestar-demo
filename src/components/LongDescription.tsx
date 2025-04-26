import React from "react";

interface LongDescriptionProps {
  text?: string; // The long description text
  maxLength?: number; // Maximum number of characters to display before truncating
}

const LongDescription: React.FC<LongDescriptionProps> = ({
  text,
  maxLength = 150, // Default max length
}) => {
  return (
    <div className="style-580">
      <section className="style-581">
        <div className="style-582">
          <div className="style-583">
            <div className="style-584" />
            <div className="style-585">
              <li className="style-586">
                Â¹Receive $20,000 off the lease of a new MY25 Polestar 3 vehicle
                when you combine the $5,000 Polestar Conquest Program bonus and
                the $15,000 Polestar Clean Vehicle Noncash Incentive
                (â€œOffersâ€). The Polestar Conquest Program bonus is available
                for eligible customers that currently own or lease a Tesla
                vehicle. &nbsp;Customer must provide a copy of either U.S.
                registration or U.S. insurance documents showing VIN, name,
                address and expiration date. Members of the same household are
                also eligible to provide proof of ownership on behalf of the
                purchaser. Proof of same household residence must be provided
                prior to signing. Supporting documentation must be available at
                time of delivery. Customer eligibility requirements must be met
                for the Conquest Program offer. Please see Polestar Space for
                details. Offer begins April 1, 2025 and expires on April 30,
                2025. Only open to legal U.S. residents who have a valid U.S.
                driver's license. Offers are not transferable. Offer only
                available on lease of new MY25 Polestar 3 vehicle. Vehicle
                leases outside of the program dates are not eligible. Offers
                cannot be used toward the payment of sales tax. This offer is
                subject to federal, state, and local taxes. Offers cannot be
                applied to lease or purchase of any other model year or model
                vehicles purchased as used. &nbsp;No cash value. Offer cannot be
                combined with Polestar loyalty offers. Vehicle delivery must
                take place before April 30, 2025.
              </li>
              <li className="style-587">
                Â²Polestar will provide $15,000 Clean Vehicle Noncash Incentive
                off MSRP for customers who lease a new 2025 Polestar 3 vehicle
                through Polestar Financial Services. The Clean Vehicle Incentive
                will be applied to the lease as a Capitalized Cost Reduction.
                &nbsp;Incentive not valid on previous leases and has no cash
                value. Not everyone will qualify. Offer valid from April 1, 2025
                until April 30, 2025. Must take delivery by April 30, 2025. See
                your participating Polestar Space for details. Polestar reserves
                the right to make changes to any information and elements at any
                time, e.g.to final prices, taxes, fees, etc. Automobile
                financing and account servicing provided by Volvo Car Financial
                Services U.S., LLC, d/b/a Polestar Financial Services. Polestar
                Financial Services is a registered trademark of Polestar Holding
                AB.
              </li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LongDescription;
