import React, { useState } from "react";
import "./HomePageAnimation.css";
import { apis } from "../../Api/Apis";
import LoadingShape from "../../Helpers/LoadingShape/LoadingShape";
import DonutChart from "../../Helpers/DonutChart/DonutChart";

function HomePageAnimation() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    dt_probability: 0, // Decision Tree probability
    knn_probability: 0, // k-Nearest Neighbors probability
    svm_probability: 0, // Support Vector Machine probability
    message: "",
  });

  async function checkUrl() {
    if (!url) return;
    setIsLoading(true);
    const response = await apis.checkApi(url);

    setData(response);
    setIsLoading(false);
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
          monitor for typosquats and lookalike variants of a domain.
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
        <button className="button" disabled={isLoading} onClick={checkUrl}>
          {isLoading && <LoadingShape />}
          Scan
        </button>
      </div>

      <h1 className="message">{data.message}</h1>
      <footer className="home-page-footer">
        <div className="footer-donut">
          <DonutChart percentage={data.dt_probability} />
          <h1>Decision Tree</h1>
        </div>
        <div className="footer-donut">
          <DonutChart percentage={data.knn_probability} />
          <h1>k-NN</h1>
        </div>
        <div className="footer-donut">
          <DonutChart percentage={data.svm_probability} />
          <h1>SVM</h1>
        </div>
      </footer>
    </div>
  );
}

export default HomePageAnimation;
