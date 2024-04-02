import React, { useEffect, useRef, useState } from "react";
import "./HomePageAnimation.css";
import { apis } from "../../Api/Apis";
import LoadingShape from "../../Helpers/LoadingShape/LoadingShape";
import { Navigate } from "react-router-dom";
import DonutChart from "../../Helpers/DonutChart/DonutChart";

function HomePageAnimation() {
  const [url, setUrl] = useState("");
  const [isPhishing, setIsPhishing] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const data = [
    { name: "Mark", value: 90 },
    { name: "Robert", value: 12 },
    { name: "Emily", value: 34 },
    { name: "Marion", value: 53 },
    { name: "Nicolas", value: 98 },
  ];
  const checkUrl = async () => {
    if (!url) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await apis.checkApi(url);
      setIsPhishing(true);

      if (response.status === 200) {
        setDatas(response.data);
        setIsLoading(false);
        setUrl("");
        setIsPhishing(true);
      }
    } catch (error) {
      console.error("Error checking URL:", error);
      setIsLoading(false);
      setUrl("");
      setIsPhishing(true); //false
    }
  };
  if (isPhishing) {
    return <Navigate to={"/analysis"} />;
  }
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
        <button className="button" disabled={isloading} is onClick={checkUrl}>
          {isloading && <LoadingShape />}
          Scan
        </button>
      </div>
      {datas && (
        <footer className="home-page-foorter">
          <div className="footer-donut">
            <DonutChart width={300} height={300} data={data} />
            <h1>SVM</h1>
          </div>
          <div className="footer-donut">
            <DonutChart width={300} height={300} data={data} />
            <h1>Random Forest</h1>
          </div>
          <div className="footer-donut">
            <DonutChart width={300} height={300} data={data} />
            <h1>Decision Tree</h1>
          </div>
        </footer>
      )}
    </div>
  );
}

export default HomePageAnimation;
