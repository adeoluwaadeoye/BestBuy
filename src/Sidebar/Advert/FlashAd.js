import "./FlashAd.css";

const FlashAd = () => {
    return (
        <div className="flash-ad">
            <img
                src="https://m.media-amazon.com/images/I/613oGQcOLcL._AC_UY327_FMwebp_QL65_.jpg"
                alt="Product"
                className="flash-ad-image"
            />
            <div className="flash-ad-text">
                <p>🔥 Limited-Time Offer! 🔥</p>
                <p className="flash-code">Save 20% Now!</p>
                <p>Use Code: FLASH20</p>
            </div>
        </div>
    );
};

export default FlashAd;
