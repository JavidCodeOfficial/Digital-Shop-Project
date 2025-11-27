//Utilities

class Utils {
  static formatCurrency = (value: number): string => {
    // فرمت قیمت ها به ریال
    return new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency: "IRR",
      maximumFractionDigits: 0,
    }).format(value);
  };
}

export default Utils;
