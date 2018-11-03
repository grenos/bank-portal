import React from 'react';
import './girl.css';
import { TimelineMax, Power2 } from 'gsap/all';
import { useEffect } from 'react-use/lib/react';

let style = {
  width: 300
};

const Girl = () => {
  useEffect(() => {
    let eye = document.getElementsByClassName('eye');
    let eyeBrowR = document.getElementsByClassName('eyebrowR');
    let eyeBrowL = document.getElementsByClassName('eyebrowL');
    let eyeBall = document.getElementsByClassName('eyeBall');
    let mouth = document.getElementsByClassName('mouth');
    let cheekL = document.getElementsByClassName('cheekL');
    let cheekR = document.getElementsByClassName('cheekR');
    let nose = document.getElementsByClassName('nose');
    let chin = document.getElementsByClassName('chin');

    //
    setInterval(() => {
      const tl = new TimelineMax();
      tl.fromTo(eyeBrowL, 0.4, { y: 0 }, { y: 3 })
        .fromTo(
          eye,
          0.4,
          { scale: 1 },
          { scale: 0.5, transformOrigin: '50% 50%', ease: Power2.easeInOut },
          '-=0.4'
        )
        .fromTo(
          eyeBrowR,
          0.4,
          { y: 0 },
          { y: -2, ease: Power2.easeInOut },
          '-=0.4'
        )
        .fromTo(
          eyeBall,
          0.4,
          { scale: 1, opacity: 1 },
          { scale: 0.1, opacity: 0, ease: Power2.easeInOut },
          '-=0.4'
        )
        .fromTo(
          mouth,
          0.4,
          { scaleY: 1, scaleX: 1 },
          {
            scaleY: 1.8,
            scaleX: 1.4,
            transformOrigin: '50% 50%',
            ease: Power2.easeInOut
          },
          '-=0.4'
        )
        .fromTo(
          cheekL,
          0.4,
          { scaleY: 1, scaleX: 1 },
          {
            scaleX: 1.1,
            scaleY: 0.8,
            transformOrigin: '50% 50%',
            ease: Power2.easeInOut
          },
          '-=0.4'
        )
        .fromTo(
          cheekR,
          0.4,
          { scaleY: 1, scaleX: 1 },
          {
            scaleX: 1.1,
            scaleY: 0.8,
            transformOrigin: '50% 50%',
            ease: Power2.easeInOut
          },
          '-=0.4'
        )
        .fromTo(
          nose,
          0.4,
          { scaleX: 1 },
          {
            scaleX: 0.7,
            transformOrigin: '50% 50%',
            ease: Power2.easeInOut
          },
          '-=0.4'
        )
        .fromTo(
          chin,
          0.4,
          { y: 0 },
          {
            y: 3,
            ease: Power2.easeInOut
          },
          '-=0.4'
        );

      tl.reverse(0);
    }, 5000);
  });

  return (
    <>
      <svg
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 207.964 207.964"
        style={{ enableBackground: 'new 0 0 207.964 207.964' }}
        xmlSpace="preserve"
        style={style}
      >
        <g>
          <path
            style={{ fill: '#432B1F' }}
            d="M40.634,148.18c6.989,19.495-3.968,55.375-3.968,55.375h63.346V93.325l-69.52,13.325
		C30.493,106.649,34.315,130.553,40.634,148.18z"
          />
          <path
            style={{ fill: '#432B1F' }}
            d="M159.452,148.18c-6.989,19.495,3.969,55.375,3.969,55.375h-63.347V93.325l69.519,13.325
		C169.593,106.649,165.772,130.553,159.452,148.18z"
          />
          <g>
            <g>
              <rect
                x="85.315"
                y="157.699"
                style={{ fill: '#FDCC9B' }}
                width="29.395"
                height="32.922"
              />
              <path
                style={{ fill: '#FCBC85' }}
                d="M85.315,161.577c0,0,12.365,7.874,29.395,6.05v-9.928H85.315V161.577z"
              />
              <ellipse
                style={{ fill: '#FCBC85' }}
                cx="42.928"
                cy="106.649"
                rx="14.343"
                ry="16.364"
              />
              <ellipse
                style={{ fill: '#FCBC85' }}
                cx="157.096"
                cy="106.649"
                rx="14.343"
                ry="16.364"
              />
              <path
                style={{ fill: '#FDCC9B' }}
                d="M157.038,75.394c0-24.103-17.637-41.741-57.025-41.741c-39.39,0-57.026,17.637-57.026,41.741
				c0,24.104-4.115,87.597,57.026,87.597C161.153,162.99,157.038,99.498,157.038,75.394z"
              />
              <g>
                <g>
                  <ellipse
                    className="eye"
                    style={{ fill: '#3B2519' }}
                    cx="72.237"
                    cy="102.731"
                    rx="6.173"
                    ry="6.761"
                  />

                  <circle
                    className="eyeBall"
                    style={{ fill: '#FFFFFF' }}
                    cx="69.545"
                    cy="99.746"
                    r="1.846"
                  />
                </g>
                <path
                  className="eyebrowL"
                  style={{ fill: '#51362A' }}
                  d="M62.362,88.154c2.918,1.118,7.606-3.798,18.334,0.478c1.956,0.78,3.124-6.668-8.377-6.668
					C62.362,81.964,60.598,87.479,62.362,88.154z"
                />
                <g>
                  <ellipse
                    style={{ fill: '#3B2519' }}
                    cx="128.55"
                    cy="102.731"
                    rx="6.173"
                    ry="6.761"
                  />
                  <circle
                    style={{ fill: '#FFFFFF' }}
                    cx="125.859"
                    cy="99.746"
                    r="1.847"
                  />
                </g>
                <path
                  className="eyebrowR"
                  style={{ fill: '#51362A' }}
                  d="M137.663,88.154c-2.919,1.118-7.605-3.798-18.335,0.478c-1.955,0.78-3.123-6.668,8.378-6.668
					C137.663,81.964,139.426,87.479,137.663,88.154z"
                />
              </g>
              <path
                className="nose"
                style={{ fill: '#FCBC85' }}
                d="M100.012,126.511c-6.1,0-9.774-4.556-9.774-2.352c0,2.205,1.764,6.394,9.774,6.394
				c8.01,0,9.773-4.189,9.773-6.394C109.786,121.955,106.112,126.511,100.012,126.511z"
              />
              <path
                className="chin"
                style={{ fill: '#FCBC85' }}
                d="M100.012,146.782c-2.109,0-3.381-1.576-3.381-0.813s0.61,2.211,3.381,2.211
				s3.381-1.448,3.381-2.211S102.122,146.782,100.012,146.782z"
              />
              <path
                className="mouth"
                style={{ fill: '#F7945E' }}
                d="M100.012,141.165c-9.668,0-15.493-3.936-15.493-2.939c0,0.998,2.796,4.924,15.493,4.924
				c12.697,0,15.492-3.926,15.492-4.924C115.504,137.228,109.68,141.165,100.012,141.165z"
              />
            </g>
            <circle
              className="cheekL"
              style={{ fill: '#F9AA8D' }}
              cx="64.298"
              cy="124.336"
              r="8.378"
            />
            <circle
              className="cheekR"
              style={{ fill: '#F9AA8D' }}
              cx="136.756"
              cy="124.336"
              r="8.377"
            />
          </g>
          <path
            style={{ fill: '#694B74' }}
            d="M100.012,170.927v37.038H35.639C35.639,192.973,66.208,170.927,100.012,170.927z"
          />
          <path
            style={{ fill: '#694B74' }}
            d="M100.012,170.927v37.038h64.372C164.384,192.973,133.816,170.927,100.012,170.927z"
          />
          <path
            style={{ fill: '#563C60' }}
            d="M99.821,170.927c-7.271,0-14.715,1.005-21.933,2.72c0.049,0.063,8.006,10.214,21.933,10.214
		c12.898,0,21.472-8.693,22.715-10.03C115.076,172,107.355,170.927,99.821,170.927z"
          />
          <path
            style={{ fill: '#FDCC9B' }}
            d="M85.315,172.209c0,0,4.299,5.332,14.697,5.332c10.398,0,14.697-5.332,14.697-5.332
		S99.461,166.657,85.315,172.209z"
          />
          <path
            style={{ fill: '#51362A' }}
            d="M151.747,24.541C114.709-19.552,44.162-1.915,28.584,58.933
		c-15.577,60.847,12.05,89.247,12.05,89.247C30.04,112.321,54.744,75.247,75.908,74.806c21.165-0.441,54.675-12.346,54.675-12.346
		s5.625,28.622,23.81,39.132c13.669,7.9,8.477,31.122,4.949,46.588C172.569,143.149,211.712,42.619,151.747,24.541z"
          />
        </g>
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    </>
  );
};

export default Girl;
