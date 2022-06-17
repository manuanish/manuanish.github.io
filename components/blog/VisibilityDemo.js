import Image from "next/image";
import * as React from "react";
import { Slider } from "@geist-ui/core";

export default function VisibilityDemo() {
  const [normalOpacity, setNormalOpaicty] = React.useState(1);
  const [elaOpacity, setElaOpaicty] = React.useState(0);
  const [value, setValue] = React.useState(0);

  const handleSlider = (value) => {
    console.log(value);
    setValue(value);
    setElaOpaicty(value / 100);
    setNormalOpaicty((100 - value) / 100);
  };

  return (
    <div>
      <br/>
      <div className="flex justify-center">
        <div style={{ position: "relative", top: 0, left: 0, borderRadius: 10 }}>
          <div
            style={{
              position: "relative",
              top: 0,
              left: 0,
              opacity: normalOpacity,
              borderRadius: 10
            }}
          >
            <Image
              src="/blog/ela-demo/ela.png"
              width="503"
              height="509"
              quality={100}
              placeholder={"blur"}
              blurDataURL
              style={{ borderRadius: 10 }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              opacity: elaOpacity,
              borderRadius: 10
            }}
          >
            <Image
              src="/blog/ela-demo/visible.png"
              width="503"
              height="509"
              quality={100}
              placeholder={"blur"}
              blurDataURL
              style={{ borderRadius: 10 }}
            />
          </div>
        </div>
      </div>
      <br />
      <div className="flex justify-center">
        <div className="min-w-[300px] max-w-[600px]">
          <Slider
            min={0}
            max={100}
            step={1}
            value={value}
            onChange={handleSlider}
          />
        </div>
      </div>
      <br />
    </div>
  );
}
