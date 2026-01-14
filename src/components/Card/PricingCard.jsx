const PricingCard = ({ pricing }) => {
  const { hourlyCharge, dailyCharge, dailyDiscountPercent, finalDailyCharge } =
    pricing;

  return (
    <div className="card bg-base-200 shadow-lg">
      <div className="card-body">
        <h3 className="text-xl font-semibold mb-4">Pricing</h3>

        {/* Hourly Pricing */}
        <div className="flex justify-between items-center border-b pb-3 mb-3">
          <div>
            <p className="font-medium">Hourly Care</p>
            <p className="text-sm text-base-content/70">
              Flexible short-term support
            </p>
          </div>
          <div>

          <p className="text-lg  font-bold">৳{hourlyCharge}/hr</p>
          </div>
        </div>
        <div className="flex justify-end">
          <span className="badge badge-success text-white badge-lg">
            Save {dailyDiscountPercent}%
          </span>
        </div>

        {/* Daily Pricing */}
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium flex items-center gap-2">Daily Care</p>
            <p className="text-sm text-base-content/70">
              Best for full-day care
            </p>
          </div>

          <div className="text-right">
            <p className="line-through text-sm text-base-content/50">
              ৳{dailyCharge}
            </p>
            <p className="text-xl font-bold text-primary">
              ৳{finalDailyCharge}/day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
