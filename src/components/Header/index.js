import "./index.css";

function Header({
  showOrderBanner = true,
  orderBannerText = "Orders placed after 8pm will be delivered the next day",
}) {
  return (
    <div className="">
      {showOrderBanner ? (
        <div className="header-order-banner">
          <p className="header-order-banner_msg">{orderBannerText}</p>
        </div>
      ) : null}
      <div>Header</div>
    </div>
  );
}

export default Header;
