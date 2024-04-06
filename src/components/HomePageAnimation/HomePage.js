import React, { useEffect, useRef, useState } from "react";
import "./HomePageAnimation.css";
import { apis } from "../../Api/Apis";
import LoadingShape from "../../Helpers/LoadingShape/LoadingShape";
import DonutChart from "../../Helpers/DonutChart/DonutChart";

function HomePage() {
  const [url, setUrl] = useState("");
  const [isloading, setIsLoading] = useState(false);
  const [data, setData] = useState({});

  const checkUrl = async (url) => {
    if (!url) {
      return;
    }
    setIsLoading(true);

    const response = await apis.checkApi(url);

    if (response.status === 200) {
      setData(response.data);
      console.log(response);
      setIsLoading(false);
      setUrl("");
    }
  };

  return (
    <div className="parent">
      <div>
        <h1 className="main-header">
          MESH URL Phishing Detector Detects and Monitors Phishing and Scam
          Sites
        </h1>
        <h1 className="main-header-sub">
          With MESH URL Phishing Detector, you can scan suspicious URLs and
          monitor for typosquats and lookalikes variants of a domain.
        </h1>
      </div>
      <div className="search-container">
        <input
          className="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Your Url To Check It..."
        />
        <button className="button" disabled={isloading} onClick={checkUrl}>
          {isloading && <LoadingShape />}
          Scan
        </button>
      </div>
      {data && (
        <footer className="home-page-foorter">
          <div className="footer-donut">
            <DonutChart percentage={50} />
            <h1>SVM</h1>
          </div>
          <div className="footer-donut">
            <DonutChart percentage={60} />
            <h1>Random Forest</h1>
          </div>
          <div className="footer-donut">
            <DonutChart percentage={90} />
            <h1>Decision Tree</h1>
          </div>
        </footer>
      )}
    </div>
  );
}

export default HomePage;
