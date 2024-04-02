import React, { useEffect, useRef, useState } from "react";
import "./HomePageAnimation.css";
import { apis } from "../../Api/Apis";
import LoadingShape from "../../Helpers/LoadingShape/LoadingShape";
import { redirect } from "react-router-dom";

function HomePageAnimation() {
  const consoleRef = useRef(null);
  const [url, setUrl] = useState("");
  const [isPhishing, setIsPhishing] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const intervalID = window.setInterval(updateScreen, 200);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const txt = [
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
  ];

  function updateScreen() {
    //Shuffle the "txt" array
    txt.push(txt.shift());
    //Clear console
    consoleRef.current.innerHTML = "";
    //Update console
    txt.forEach((e) => {
      const p = document.createElement("p");
      p.textContent = e;
      consoleRef.current.appendChild(p);
    });
  }

  const checkUrl = async () => {
    setIsLoading(true);
    try {
      const response = await apis.checkApi(url);
      setIsPhishing(response.data);

      if (response.status === 200) {
        setIsLoading(false);
        setUrl("");
        return redirect("/AnalysisPage");
      }
    } catch (error) {
      console.error("Error checking URL:", error);
      setIsLoading(false);
      setUrl("");
      return redirect("/analysis");
    }
  };

  return (
    <div className="parent-one">
      <div className="parent">
        <input
          className="url-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter Your Url To Check It..."
        />
        <button className="button" disabled={isloading} is onClick={checkUrl}>
          {isloading && <LoadingShape />}
          Check URL
        </button>
      </div>
      <div className="animation" id="console" ref={consoleRef}></div>
    </div>
  );
}

export default HomePageAnimation;
