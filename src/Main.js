import PropTypes from "prop-types";

function Main(props) {
  return (
    <div className="content">
      <div className="wrapper">
        <input
          type="text"
          value={props.amount}
          onChange={(ev) => props.onAmountChange(ev.target.value)}
          className="input"
        />
        <select
          value={props.currency}
          onChange={(ev) => props.onCurrencyChange(ev.target.value)}
        >
          {props.currencies.map((currency) => (
            <option value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

Main.propTypes = {
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
  currencies: PropTypes.array,
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
};

export default Main;
